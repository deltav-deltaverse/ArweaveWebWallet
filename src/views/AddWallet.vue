<template>
	<div class="add-wallet flex-column">
		<div class="card">
			<h2 style="display:flex; justify-content:space-between;">
				<span>Passphrase</span>
				<span>Key file</span>
			</h2>
			<div class="flex-column">
				<InputData v-model="passphraseInput" @files="files => importKeyfiles(files)" :disabled="isCreatingWallet" placeholder="Import passphrase or key file" />
				<div />
				<Button v-if="!isCreatingWallet && !passphraseInput.length" @click="create()" :disabled="passphraseInput.length && !isPassphrase" :icon="LogoArweave" class="main">Create new wallet</Button>
				<Button v-else-if="isCreatingWallet" :disabled="createdWallet == null" @click="goToCreatedWallet" :icon="createdWallet == null ? 'loader' : ''" class="main">{{ createdWallet == null ? 'Generating, write down the passphrase' : 'Passphrase saved? Click here to proceed' }}</Button>
				<Button v-else :disabled="!isPassphrase || isGeneratingWallet" @click="confirmPassphrase" class="main">Import passphrase</Button>
			</div>
			<OverlayPrompt :options="popup" />
		</div>
		<div class="card" v-for="provider in hardwareProviders" :key="provider.metadata.name">
			<h2 class="flex-row" style="align-items: center;"><Icon :icon="provider.metadata.icon" /><span>{{ provider.metadata.name }} Hardware Wallet (awaiting release)</span></h2>
			<div class="flex-column">
				<Button :disabled="provider.metadata.disabled" @click="importProvider(provider)" :icon="provider.metadata.icon" class="main">
					{{ provider.metadata.disabled ? `${provider.metadata.name} not supported for this browser` : `Connect with ${provider.metadata.name}` }}
				</Button>
				<div class="flex-row">
					<Button :icon="IconVerify" @click="provider.metadata.verify">Verify address</Button>
					<a :href="provider.metadata.link" target="_blank" class="reset">
						<Button :icon="IconLaunch">Purchase | affiliate link</Button>
					</a>
				</div>
			</div>
		</div>
		<div class="card">
			<h2>Address Only</h2>
			<InputAddress v-model="targetInput" :actions="[importAddressOnlyAction]" />
		</div>
	</div>
</template>



<script setup lang="ts">
import InputData from '@/components/atomic/InputData.vue'
import InputAddress from '@/components/atomic/InputAddress.vue';
import Button from '@/components/atomic/Button.vue'
import Icon from '@/components/atomic/Icon.vue'
import OverlayPrompt from '@/components/layout/OverlayPrompt.vue'
import { hardwareProviders, addAddress, addMnemonic, addProvider, generateMnemonic, validateMnemonic } from '@/functions/Wallets'
import { importKeyfiles } from '@/functions/File'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import LogoArweave from '@/assets/logos/arweave.svg?component'
import IconAddBox from '@/assets/icons/add_box.svg?component'
import IconLaunch from '@/assets/icons/launch.svg?component'
import IconVerify from '@/assets/icons/verify.svg?component'

const router = useRouter()
const passphraseInput = ref('')
const targetInput = ref('')
// const maskAddress = (address) => { return address.match(/^[a-z0-9_-]{0,43}$/i) }
const popup = ref(undefined as undefined | object)
const isPassphrase = computed(() => passphraseInput.value.trim().split(/\s+/g).length >= 12)
const isCreatingWallet = ref(false)
const isGeneratingWallet = ref(false)
const createdWallet = ref(null as null | WalletDataInterface)
const create = async () => {
	isCreatingWallet.value = true
	passphraseInput.value = await generateMnemonic()
	const walletData = addMnemonic(passphraseInput.value)
	setTimeout(async () => createdWallet.value = await walletData, 10000)
}
const goToCreatedWallet = () => {
	if (!createdWallet.value) { return }
	router.push({ name: 'EditWallet', query: { wallet: createdWallet.value.id } })
}
const importPassphrase = async () => {
	isGeneratingWallet.value = true
	const walletData = addMnemonic(passphraseInput.value)
	popup.value = {
		icon: 'loader',
		message: 'importing',
	}
	router.push({ name: 'EditWallet', query: { wallet: (await walletData).id } })
}
const confirmPassphrase = async () => {
	if (await validateMnemonic(passphraseInput.value)) { return importPassphrase() }
	popup.value = {
		message: 'This passphrase is not valid, do you want to import it anyway?',
		actions: [
			{ name: 'Back', run: () => popup.value = undefined },
			{ name: 'Import Passphrase', run: () => importPassphrase() },
		]
	}
}
const importProvider = async (provider: Provider) => {
	const walletData = await addProvider(provider)
	router.push({ name: 'EditWallet', query: { wallet: walletData.id } })
}
const importAddressOnlyAction = { icon: IconAddBox, run: async () => {
	const walletData = await addAddress(targetInput.value)
	router.push({ name: 'EditWallet', query: { wallet: walletData.id } })
}}
</script>



<style scoped>
.add-wallet {
	width: 100%;
	min-height: var(--current-vh);
	padding: var(--spacing);
	align-items: center;
}

.card {
	width: 100%;
	max-width: var(--column-width);
	overflow: hidden;
}

.input-data {
	text-align: center;
}

.button.main {
	background-image: radial-gradient(circle at center, #81a1c166, #81a1c133);
	height: 4em;
	font-size: 1.1em;
	width: 100%;
}
</style>