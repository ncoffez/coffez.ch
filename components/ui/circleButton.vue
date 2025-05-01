<template>
	<div class="h-fit w-fit my-auto p-2 rounded-full text-xl hover:bg-neutral-200 dark:hover:bg-neutral-600/30 relative">
		<NuxtLink :to class="w-full h-full">
			<slot />
		</NuxtLink>
	</div>
</template>
<script lang="ts" setup>
defineProps({
	to: {
		type: String,
		required: false,
	},
});
</script>
<style scoped></style>
