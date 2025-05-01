<template>
	<UiMobileSidebar v-model="showSidebar">
		<div class="h-full flex flex-col py-2 gap-2">
			<div class="flex gap-2 items-center hover:dark:bg-zinc-800 p-2 rounded-lg font-xl">
				<span
					class="p-2 bg-primary-500 rounded-lg cursor-pointer hover:scale-105"
					@click="router.push('/')"
					tooltip
					aria-label="Go back to coffez.ch">
					<IconsGalleryVerticalEnd class="text-xl bg-primary-500" />
				</span>
				<div id="title" class="flex flex-col leading-4">
					<p class="font-semibold">Administration</p>
				</div>
			</div>
			<div
				id="search"
				class="m-2 rounded-md dark:border-zinc-700 border focus-within:dark:border-zinc-500 flex items-center gap-2 p-2 text-sm dark:bg-zinc-950">
				<IconsSearch /><input type="text" class="px-1 bg-inherit" placeholder="Search the docs..." />
			</div>
			<menu class="flex flex-col font-xl px-2">
				<div class="grid">
					<h3 class="!mt-0">Events</h3>
					<NuxtLink to="/admin/event/new"><IconsCalendarDays class="text-primary-500" /> View all events</NuxtLink>
					<NuxtLink to="/admin/event/new"><IconsCalendarPlus class="text-primary-500" /> Create new event</NuxtLink>
				</div>
				<div class="grid">
					<h3>Galleries</h3>
					<NuxtLink to="/admin/event/new"><IconsGrip class="text-primary-500" />View all galleries</NuxtLink>
					<NuxtLink to="/admin/event/new"><IconsGrid2x2Plus class="text-primary-500" /> New gallery</NuxtLink>
				</div>
			</menu>
			<footer class="mt-auto px-2">
				<span class="font-thin text-sm"><{{ $config.public?.GITHUB_BRANCH }}></span>
			</footer>
		</div>
	</UiMobileSidebar>
</template>
<script lang="ts" setup>
const showSidebar = defineModel();
const router = useRouter();
const $config = useRuntimeConfig();
</script>
<style scoped>
input {
	all: unset;
}

menu a {
	@apply hover:dark:bg-zinc-800 hover:bg-neutral-200 rounded-lg p-2 font-light flex gap-2 items-center;
}

menu h3 {
	@apply font-medium text-base tracking-tight dark:text-stone-400 text-stone-500 px-2 mb-0 mt-8;
}
</style>
