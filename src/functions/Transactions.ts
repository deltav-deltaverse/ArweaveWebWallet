import ArweaveStore, { arweave } from '@/store/ArweaveStore'
import { getMempool, getPending } from '@/store/BlockStore'
import { exportTransaction } from '@/functions/File'
import { notify } from '@/store/NotificationStore'
import BigNumber from 'bignumber.js'
import type Transaction from 'arweave/web/lib/transaction'
import type { CreateTransactionInterface } from 'arweave/web'

export type TxParams = {
	target?: string
	quantity?: string
	ar?: string
	winston?: string
	reward?: string
	arReward?: string
	winstonReward?: string
	tags?: { name: string, value: string }[]
	data?: string | File
}

export async function buildTransaction (tx: TxParams) {
	const txSettings = {} as Partial<CreateTransactionInterface>
	txSettings.target = tx.target || ''
	txSettings.quantity = tx.quantity || tx.winston || (tx.ar ? arweave.ar.arToWinston(tx.ar) : '0')
	txSettings.reward = tx.reward || tx.winstonReward || (tx.arReward ? arweave.ar.arToWinston(tx.arReward) : undefined)
	if (tx.data) { txSettings.data = tx.data instanceof File ? await readFile(tx.data) : tx.data }
	const txObj = await arweave.createTransaction(txSettings)
	for (const tag of tx.tags || []) { txObj.addTag(tag.name, tag.value) }
	if (txSettings.reward) { txObj.reward = txSettings.reward }
	return txObj
}

function readFile (file: File) {
	return new Promise<Uint8Array>((resolve, reject) => {
		const fileReader = new FileReader()
		fileReader.onload = (e) => resolve(new Uint8Array(e.target?.result as any))
		fileReader.onerror = (e) => reject(e)
		fileReader.readAsArrayBuffer(file)
	})
}

export async function manageUpload (tx: Transaction) {
	if (!navigator.onLine) { return exportTransaction(tx) }
	if (!tx.chunks?.chunks?.length) { return arweave.transactions.post(tx) }
	const uploader = await arweave.transactions.getUploader(tx)
	const storageKey = 'uploader:' + tx.id
	localStorage.setItem(storageKey, JSON.stringify(uploader))
	ArweaveStore.uploads[tx.id] ??= {}
	ArweaveStore.uploads[tx.id].upload = 0
	while (!uploader.isComplete) {
		await uploader.uploadChunk()
		localStorage.setItem(storageKey, JSON.stringify(uploader))
		ArweaveStore.uploads[tx.id].upload = uploader.pctComplete
	}
	localStorage.removeItem(storageKey)
	setTimeout(() => delete ArweaveStore.uploads[tx.id], 1000)
	return uploader.lastResponseStatus
}

let failedLastFeeRange = false
export async function getFeeRange () {
	const blockSize = 1000
	const range = {
		default: null as null | BigNumber,
		min: null as null | BigNumber,
		max: new BigNumber('145605600')
	}
	const ids = await getPending(failedLastFeeRange)
	if (ids.length <= blockSize) { return range }
	const txs = await getMempool(failedLastFeeRange)
	if (!txs) { throw 'failed to get pending transactions list' }
	const fees = txs.map(tx => tx.fee.winston)
	const sortedFees = fees.sort((a, b) => (+b) - (+a))
	const nextBlock = sortedFees.slice(0, blockSize)
	range.max = (new BigNumber(nextBlock[0])).plus('1')
	if (txs.length < (ids.length / 4)) {
		notify.warn('Unable to estimate optimal transaction fee')
		failedLastFeeRange = true
		return range
	}
	failedLastFeeRange = false
	range.min = (new BigNumber(nextBlock.slice(-1)[0])).plus('1')
	range.default = (new BigNumber(nextBlock.slice(-(txs.length/10))[0])).plus('1')
	return range
}

export function unpackTags <T extends boolean = false> (tags: { name: string, value: string }[], options?: { duplicate?: T, lowercase?: boolean }) {
	const result = {} as { [key:string]: any }
	const set = options?.duplicate
		? (tag: typeof tags[0]) => (result[options?.lowercase ? tag.name.toLowerCase() : tag.name] ??= []).push(tag.value)
		: (tag: typeof tags[0]) => result[options?.lowercase ? tag.name.toLowerCase() : tag.name] ??= tag.value
	tags.forEach(set)
	return result as { [key:string]: (T extends true ? string[] : string) }
}