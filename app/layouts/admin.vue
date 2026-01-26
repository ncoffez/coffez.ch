<template>
	<div class="w-full h-screen flex overflow-hidden flex-row-reverse">
		<section class="overflow-y-auto w-full h-screen">
			<nav class="py-4 px-6 border-b dark:border-zinc-800 border-zinc-200 flex items-center w-full">
				<div class="mr-6 hover:scale-110">
					<IconsPanelLeft class="text-xl" @click="showSidebar = !showSidebar"></IconsPanelLeft>
				</div>
				<div class="hidden md:flex items-center" v-for="breadcrumb of breadcrumbs">
					<div v-if="title !== breadcrumb.name">
						<NuxtLink :to="breadcrumb.path" class="text-stone-500 dark:text-stone-400 font-light">{{
							breadcrumb.name
						}}</NuxtLink>
						<IconsChevronRight v-if="breadcrumb" class="md:inline hidden mx-2" />
					</div>
				</div>
				<span>{{ title }}</span>
				<div id="spacer" class="flex-grow"></div>
				<UiLanguageSwitcher />
				<UiThemePicker />
			</nav>
			<div class="py-8 px-8 h-full">
				<NuxtPage></NuxtPage>
			</div>
		</section>
		<UiAdminSidebar v-model="showSidebar" />
	</div>
</template>
<script lang="ts" setup>
const showSidebar = ref(true);
const breadcrumbs = [
	{ name: "Coffez.ch", path: "/" },
	{ name: "Administration", path: "/admin" },
];
const title = computed(() => {
	const route = useRoute();
	return route.name?.toString() || "Admin";
});
</script>
<style scoped>
a {
	@apply dark:text-primary-500 hover:underline underline-offset-2;
}
</style>
