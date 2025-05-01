<template>
	<div class="w-full h-screen flex overflow-hidden">
		<UiAdminSidebar v-model="showSidebar" />
		<section class="overflow-y-auto w-full">
			<nav class="py-4 px-6 border-b dark:border-zinc-800 border-zinc-200 flex items-center w-full">
				<div class="mr-6 hover:scale-110">
					<IconsPanelLeft class="text-xl" @click="showSidebar = !showSidebar"></IconsPanelLeft>
				</div>
				<div class="hidden md:flex gap-2 items-center" v-for="breadcrumb of breadcrumbs">
					<span class="text-stone-500 dark:text-stone-400 font-light">{{ breadcrumb }}</span>
					<IconsChevronRight v-if="breadcrumbs" class="md:inline hidden" />
				</div>
				<span>{{ title }}</span>
				<div id="spacer" class="flex-grow"></div>
				<UiLanguageSwitcher />
				<UiThemePicker />
			</nav>
			<NuxtPage></NuxtPage>
		</section>
	</div>
</template>
<script lang="ts" setup>
const showSidebar = ref(true);
const route = useRoute();
const breadcrumbs = ["Coffez.ch", ...route.path.split("/").slice(2, -1)];
const title = route.name;
</script>
<style scoped>
</style>
