<template>
	<div class="bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 text-zinc-600 content-center">
		<iframe v-if="mapUrl" class="w-full h-full" :src="mapUrl"></iframe>
		<div id="error-loading" v-else class="p-4 w-fit h-fit mx-auto">
			<IconsEarth class="m-4 md:w-64 md:h-64 w-32 h-32" />
			<p class="w-fit text-center mx-auto">Map could not be loaded... <br />Try again later.</p>
		</div>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps(["coords"]);
const config = useRuntimeConfig();

const mapUrl = computed(() => {
	if (typeof props.coords?.longitude !== "number" || typeof props.coords?.latitude !== "number") return null;
	return `https://www.google.com/maps/embed/v1/place?key=${config.public.GOOGLE_MAPS_EMBED_API_KEY}&q=${props.coords?.latitude},${props.coords?.longitude}&zoom=15`;
});
</script>
<style scoped></style>
