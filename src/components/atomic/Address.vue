<template>
	<Tooltip disabled>
		<template #content>
			<div class="text">
				{{ address }}
			</div>
		</template>
		<div class="address ellipsis">
			<span class="address-tx ellipsis" @click="tools = !tools">
				<slot />
				<span class="text ellipsis">{{ val }}</span>
				<Icon :icon="IconVerify" v-if="arverify?.verified" class="arverify" />
			</span>
		</div>
	</Tooltip>
</template>



<script setup lang="ts">
import Icon from '@/components/atomic/Icon.vue'
import Tooltip from '@/components/function/Tooltip.vue'
import ProfileStore, { getArverify } from '@/store/ProfileStore'
import { computed, watch, ref } from 'vue'

import IconVerify from '@/assets/icons/verify.svg?component'

const props = defineProps<{
	address?: string
	tx?: string
	block?: string
}>()
const val = computed(() => props.address || props.tx || props.block)

const arverify = computed(() => props.address && ProfileStore.arverify[props.address])
watch(() => props.address, async () => props.address && getArverify(props.address), { immediate: true })

const tools = ref(false)
</script>



<style scoped>
.address {
	display: inline-flex;
	max-width: 100%;
}

.address-tx {
	display: inline-flex;
	align-items: center;
	white-space: nowrap;
}

.text {
	flex: 1 1 0;
	font-family: monospace, monospace;
	font-size: 1em;
	user-select: all;
	white-space: nowrap;
}

.arverify {
	margin-inline-start: 4px;
}
</style>