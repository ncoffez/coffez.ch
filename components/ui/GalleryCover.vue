<template>
	<NuxtLink
		:to="link"
		class="w-52 h-52 flex-grow-0 relative flex-shrink-0 m-6 dark:bg-zinc-800 bg-zinc-200 hover:scale-105 duration-300 ease-in-out cursor-pointer overflow-clip rounded-full"
		id="gallery-cover">
		<div class="scale-105">
			<div class="relative h-52 w-52">
				<img
					:aria-label="id"
					class="h-52 w-52 object-cover object-center"
					:src="coverImage"
					v-if="isImage(coverImage)" />
				<video
					:src="coverImage"
					v-if="isVideo(coverImage)"
					:autoplay="true"
					:muted="true"
					:loop="true"
					:playsinline="true"
					class="h-52 w-52 object-cover object-center">
					<source :src="coverImage" :type="getMediaType(coverImage)" />
				</video>
				<div
					id="title"
					class="absolute bottom-0 w-full h-16 place-items-center flex flex-col content-around place-content-center dark:bg-zinc-900/60 bg-zinc-800/60 transition-all duration-300 ease-in-out">
					<div class="text-white text-md font-bold uppercase tracking-wide block text-sm">{{ title }}</div>
					<div
						id="description"
						class="dark:text-zinc-400 text-zinc-100 text-xs font-light tracking-wide hidden w-2/3 max-w-prose text-center">
						{{ description.length < 70 ? description : description.substring(0, 80) + "..." }}
					</div>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>
<script lang="ts" setup>
const props = defineProps(["id", "title", "description", "coverImage", "admin", "disabled"]);

const link = computed(() => {
	if (props.disabled) return "";
	if (props.admin) return `/admin/gallery/${props.id}`;
	return `/gallery/${props.id}`;
});
</script>
<style scoped>
#gallery-cover:hover #title {
	@apply h-full bg-opacity-90;
}

#gallery-cover:hover #description {
	@apply grid;
}
</style>
