<template>
	<UiMobileSidebar v-model="showSidebar">
		<div class="h-full flex flex-col py-2 gap-2">
			<div class="flex gap-2 items-center hover:dark:bg-zinc-800 p-2 rounded-lg font-xl">
				<span
					class="bg-primary-500 overflow-hidden w-9 h-9 items-center text-white rounded-lg cursor-pointer hover:scale-105"
					@click="router.push('/')"
					tooltip
					aria-label="Go back to coffez.ch">
					<img :src="user?.photoURL" alt="" v-if="user?.photoURL" class="object-cover" />
					<IconsGalleryVerticalEnd class="text-xl m-2 bg-primary-500" v-else />
				</span>
				<div id="title" class="flex flex-col leading-4">
					<p class="font-semibold">Administration</p>
					<p class="font-light text-sm">{{ user?.displayName }}</p>
				</div>
			</div>
			<div
				id="search"
				class="m-2 rounded-md dark:border-zinc-700 border focus-within:dark:border-zinc-500 flex items-center gap-2 p-2 text-sm dark:bg-zinc-950" :hidden="true">
				<IconsSearch /><input type="text" class="px-1 bg-inherit" placeholder="Search the docs..." />
			</div>
			<menu class="flex flex-col px-2 gap-8">
				<div class="grid">
					<h3>Events</h3>
					<NuxtLink to="/admin/event/new"><IconsCalendarPlus class="text-neutral-500" /> Create new event</NuxtLink>
					<NuxtLink to="/admin/event"><IconsCalendarDays class="text-neutral-500" /> View all events</NuxtLink>
				</div>
				<div class="grid">
					<h3>Galleries</h3>
					<NuxtLink to="/admin/gallery/new"><IconsGrid2x2Plus class="text-neutral-500" /> New gallery</NuxtLink>
					<NuxtLink to="/admin/gallery"><IconsGrip class="text-neutral-500" />View all galleries</NuxtLink>
				</div>
				<div class="grid">
					<h3>Actions</h3>
					<NuxtLink to="/admin"><IconsMapPin class="text-neutral-500" /> Update location</NuxtLink>
					<NuxtLink to="/admin/location"><IconsMapPinned class="text-neutral-500" />View current location</NuxtLink>
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
const user = await useCurrentUser();
</script>
<style scoped>
input {
	all: unset;
}

menu a {
	@apply leading-8 text-gray-600 flex items-center gap-2 h-fit w-fit font-light;
}

.router-link-active {
  @apply font-medium
}

menu h3 {
	@apply font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400;
}
</style>
