<template>
	<div
		class="py-2 w-full px-6 items-center max-w-lg bg-zinc-100 dark:bg-zinc-800 first-of-type:rounded-t-xl first-of-type:pt-4 last-of-type:pb-4 last-of-type:rounded-b-xl">
		<div class="flex w-full justify-between">
			<div class="w-56 text-wrap">{{ title }}</div>
			<slot />
		</div>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>
<style scoped></style>
