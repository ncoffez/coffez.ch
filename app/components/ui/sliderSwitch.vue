<template>
	<!-- Rounded switch -->
	<label class="switch relative inline-block w-12 h-7">
		<input type="checkbox" v-model="selected" class="hidden peer" />
		<span
			class="slider rounded-2xl inset-0 absolute cursor-pointer bg-zinc-400 dark:bg-zinc-600 duration-300 peer-checked:bg-primary-500 peer-checked:before:translate-x-5 before:h-5 before:w-5 before:inset-1 before:absolute before:bg-white before:duration-300 before:rounded-full"></span>
	</label>
</template>
<script lang="ts" setup>
const selected = defineModel({ type: Boolean });
</script>
<style scoped></style>
