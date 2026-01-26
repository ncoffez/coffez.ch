<template>
	<div
		class="h-fit w-fit my-auto p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600/30 text-xl"
		@click="theme = theme === 'light' ? 'dark' : 'light'">
		<IconsLucideMoon class="text-xl" v-if="theme === 'light'" />
		<IconsLucideSun class="text-xl" v-else />
	</div>
</template>
<script lang="ts" setup>
const theme = useState("theme");
</script>
<style scoped></style>
