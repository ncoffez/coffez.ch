<template>
	<div
		id="shadow"
		class="w-full inset-0 md:hidden h-full bg-zinc-900/80 fixed shadow-3xl"
		@click="showSidebar = !showSidebar"
		v-if="showSidebar"></div>
	<div
		id="sidebar-container"
		class="h-full flex flex-shrink-0 translate-x-0 md:w-64 w-80 border-r md:static fixed inset-0 dark:border-zinc-800 border-zinc-200 overflow-hidden transition-all duration-200 ease-in-out"
		:class="showSidebar ? '' : 'is-hidden'">
		<div id="sidebar" class="w-full h-full p-2 dark:bg-zinc-900 dark:text-stone-300 bg-stone-100 z-10">
			<slot />
		</div>
	</div>
</template>
<script lang="ts" setup>
const showSidebar = defineModel();
</script>
<style scoped>
.is-hidden {
	@apply -translate-x-full w-0;
}
</style>
