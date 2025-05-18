<template>
	<div class="flex full-screen w-full flex-col md:grid lg:grid-cols-[400px,2fr]">
		<div id="text" class="px-2 py-8 gap-2 flex flex-col w-full">
			<h1 class="text-5xl font-medium pb-6">{{ $t("admin.location.title") }}</h1>
			<ul>
				<li>{{ $t("admin.location.longitude") }}: {{ location?.longitude }}</li>
				<li>{{ $t("admin.location.latitude") }}: {{ location?.latitude }}</li>
				<li>{{ $t("admin.location.lastUpdated") }}: {{ location?.date.toLocaleString() }}</li>
			</ul>
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
const { data: location, error } = await useLazyAsyncData<Location>("location", () => $fetch("/api/currentLocation"), {
	transform: (data) => ({
		date: new Date((data.date as any)._seconds * 1000 + (data.date as any)._nanoseconds / 1e6), // Convert serialized Timestamp to Date
		longitude: data.longitude,
		latitude: data.latitude,
	}),
});
</script>
<style scoped>
#map {
	height: calc(100vh - 89px - 2rem);
}
</style>
