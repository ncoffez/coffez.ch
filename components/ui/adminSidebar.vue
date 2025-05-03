<template>
	<UiMobileSidebar v-model="showSidebar">
		<div class="h-full flex flex-col py-2 gap-2 mx-4">
			<div class="flex gap-2 items-center hover:dark:bg-zinc-800 p-2 rounded-lg">
				<span
					class="bg-primary-500 overflow-hidden w-9 h-9 items-center text-white rounded-lg cursor-pointer hover:scale-105"
					@click="router.push('/')"
					tooltip
					aria-label="Go back to coffez.ch">
					<img :src="user?.photoURL" alt="" v-if="user?.photoURL" class="object-cover" />
					<IconsGalleryVerticalEnd class="text-xl my-2 bg-primary-500" v-else />
				</span>
				<div id="title" class="flex flex-col leading-4">
					<p class="font-semibold">Administration</p>
					<p class="font-light text-sm">{{ user?.displayName }}</p>
				</div>
			</div>
			<!-- <div
				id="search"
				class="m-2 rounded-md dark:border-zinc-700 border focus-within:dark:border-zinc-500 flex items-center gap-2 p-2 text-sm dark:bg-zinc-950"
				:hidden="true">
				<IconsSearch /><input type="text" class="px-1 bg-inherit" placeholder="Search the docs..." />
			</div> -->
			<menu class="flex flex-col px-2 gap-6 leading-8 text-gray-600 dark:text-gray-400 h-fit w-fit font-light">
				<div class="grid">
					<button @click="router.push('/admin/create')">Create</button>
					<NuxtLink to="/admin/event"><IconsCalendarDays /> View all events</NuxtLink>
					<NuxtLink to="/admin/gallery"><IconsGrip />View all galleries</NuxtLink>
				</div>
				<div class="grid">
					<NuxtLink to="/admin/setlocation"><IconsMapPin /> Update location</NuxtLink>
					<NuxtLink to="/admin/location"><IconsMapPinned />View current location</NuxtLink>
				</div>
			</menu>
			<footer class="mt-auto px-2 font-thin text-sm text-zinc-500">
				<span><{{ $config.public?.GITHUB_BRANCH }}></span>
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

a {
	@apply gap-2 flex items-center;
}

.router-link-active {
	@apply font-medium;
}
</style>
