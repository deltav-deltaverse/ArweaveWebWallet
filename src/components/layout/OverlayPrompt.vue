<template>
	<TransitionsManager>
		<component :is="options.action ? 'button' : 'div'" v-if="options" :key="options.message || options.action?.name" class="overlay-prompt flex-column" :class="{ inline }" @click="options.action?.run">
			<div style="flex:1 1 auto; display:flex; flex-direction:column; align-items:center; justify-content:space-evenly; margin-bottom:var(--spacing);">
				<Icon v-if="options.icon || options.action?.icon" :icon="options.icon || options.action?.icon" style="font-size: 4em;" />
				<slot />
				{{ options.message || options.action?.name }}
			</div>
			<div v-if="options.actions?.length" class="actions-container flex-row">
				<Button v-for="action in options.actions" :key="action.name" @click="action.run">{{ action.name }}</Button>
			</div>
		</component>
	</TransitionsManager>
</template>



<script setup lang="ts">
import Icon from '@/components/atomic/Icon.vue'
import TransitionsManager from '@/components/visual/TransitionsManager.vue'
import Button from '@/components/atomic/Button.vue'

const props = defineProps<{
	options?: {
		icon?: any
		message?: string
		action?: Action
		actions?: Action[]
	}
	inline?: boolean
}>()
</script>



<style scoped>
.overlay-prompt {
	background: inherit;
	border-radius: inherit;
	position: absolute;
	width: 100%;
	z-index: 10;
	align-items: center;
	justify-content: space-evenly;
}

.overlay-prompt:not(.inline) {
	height: 100%;
	inset: 0;
	padding: inherit;
}

.actions-container {
	width: 100%;
}

.button {
	background-image: radial-gradient(circle at center, #81a1c166, #81a1c133);
	height: 5em;
	font-size: 1.1em;
	width: 100%;
}
</style>