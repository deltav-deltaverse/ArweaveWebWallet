<template>
	<input class="input" v-model="model" ref="input" @animationstart="handleAutofill" @change="handleChange" />
</template>



<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const model = computed({
	get () { return props.modelValue },
	set (value) { emit('update:modelValue', value) }
})
const input = ref(undefined as undefined | HTMLInputElement)
const hasAutofill = ref(false)
const handleAutofill = (e: AnimationEvent) => {
	if (e.animationName.includes('onAutofill')) { hasAutofill.value = true }
	if (e.animationName.includes('onNotAutofill')) { hasAutofill.value = false }
}
const handleChange = () => {
	if (hasAutofill.value) { setTimeout(() => input.value && (input.value.value = input.value.value)) }
}
</script>



<style scoped>
.input {
	font-size: 1em;
	outline: none;
	border: none;
	background-color: transparent;
}

.input:-webkit-autofill {
	animation: onAutofill 1s 2;
	transition: background-color 100000s, color 100000s;
}

.input:not(:-webkit-autofill) {
	animation: onNotAutofill 1s 2;
}

@keyframes onAutofill {
	from { opacity: 1 }
	to { opacity: 1 }
}

@keyframes onNotAutofill {
	from { opacity: 1 }
	to { opacity: 1 }
}
</style>