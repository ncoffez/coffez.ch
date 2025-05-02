<template>
	<div class="flex full-screen w-full flex-col md:flex-row">
		<div id="text" class="px-2 py-8 gap-2 flex flex-col">
			<h1 class="text-5xl font-medium pb-6">Location</h1>
			<p>
				The current location of your event is <b>{{ location?.longitude }}, {{ location?.latitude }}</b>
			</p>
			<p>The location was last updated on {{ location?.date.toLocaleString() }}</p>
		</div>
		<UiEmbeddedMap id="map" :coords="location" class="w-full h-full" />
	</div>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "View location" });
interface Location {
	longitude: number;
	latitude: number;
	date: Date;
}
const { data: location, error } = await useAsyncData<Location>("location", () => $fetch("/api/currentLocation"), {
	transform: (data) => ({
		date: new Date((data.date as any)._seconds * 1000 + (data.date as any)._nanoseconds / 1e6), // Convert serialized Timestamp to Date
		longitude: data.longitude,
		latitude: data.latitude,
	}),
});

watch(location, () => {
	console.log(location);
});
</script>
<style scoped>
#map {
	height: calc(100vh - 89px - 2rem);
}
</style>
