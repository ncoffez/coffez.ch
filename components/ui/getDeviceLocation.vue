<template>
	<div id="location" class="flex flex-col w-80 h-fit border-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 bg-white shadow-lg border rounded-2xl overflow-hidden">
		<UiEmbeddedMap :coords="coords" class="h-60 w-full"/>
		<div id="text" class="p-4 grid">
			<h2 class="text-2xl leading-relaxed mb-2">Location</h2>
			<p v-if="!coords?.longitude || !coords?.latitude">Loading...</p>
      <p>Update the current location of your ongoing event. This information will be visible on the homepage if an event is planned for today.</p>
      <button class="mb-0" @click="uploadLocationToDB(coords)">Upload your location</button>
			<p class="text-sm italic font-light mt-2">Last update: {{ locatedAt ? new Date(locatedAt).toLocaleString("de-CH", {timeStyle: 'medium'}) : "never" }}</p class="text-sm italic font-light">
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useGeolocation } from "@vueuse/core";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
const { $db } = useNuxtApp();
const db = await $db();

const { coords, error, locatedAt, resume, pause } = useGeolocation();
onUnmounted(pause);
onMounted(resume);

watch(locatedAt, () => {
	pause();
	setTimeout(resume, 20000);
});

const uploadLocationToDB = async(coords: {longitude: number, latitude: number, [key: string]: any}) => {
  const docRef = doc(db, 'settings', 'location');
  return await setDoc(docRef, {longitude: coords.longitude, latitude: coords.latitude, date: serverTimestamp()});
}

</script>

<style scoped></style>
