<template>
	<div class="edit-wallet">
		<h2>New Wallet{{ wallets.length > 1 ? 's' : '' }}</h2>
		<div class="flex-column">
			<div v-for="wallet in wallets" :key="wallet.id" class="card">
				<WalletOptions class="wallet-options" :wallet="wallet" />
				<Button v-if="state.type === 'popup' && !sharedState.walletId" @click="() => sharedState.walletId = wallet.id">Connect</Button>
			</div>
		</div>
	</div>
</template>



<script setup lang="ts">
import WalletOptions from '@/components/composed/WalletOptions.vue'
import Button from '@/components/atomic/Button.vue'
import { computed } from 'vue'
import { Wallets } from '@/functions/Wallets'
import { useRoute } from 'vue-router'
import { state } from '@/functions/Channels'
import { sharedState } from '@/functions/Connect'

const route = useRoute()
const wallets = computed(() => {
	const editWallet = route.query.wallet
	const editWalletArray = Array.isArray(editWallet) ? editWallet : [editWallet]
	return Wallets.value.filter(wallet => editWalletArray.includes(wallet.id + ''))
})
</script>



<style scoped>
.edit-wallet {
	padding: var(--spacing);
	width: 100%;
}
</style>