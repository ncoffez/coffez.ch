<template>
	<div>
		<iframe v-if="mapUrl" class="w-full h-full" :src="mapUrl"></iframe>
		<IconsEarth v-else class="m-12 text-zinc-300" />
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
