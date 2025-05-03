<template>
  <div class="flex gap-6">
      <UiGenericCard 
      class="w-80"
      :title="!coords?.longitude || !coords?.latitude ? 'Location':'Loading location...'" 
      description="Update the current location of your ongoing event. This information will be visible on the homepage if an event is planned for today."
      >
      <template #image><UiEmbeddedMap :coords="coords" class="h-full w-full"/></template>
      <template #action>
        <button class="m-0 disabled:bg-zinc-300 dark:disabled:bg-zinc-700" @click="uploadLocationToDB(coords)" :disabled="!locatedAt">Upload your location</button>
        <p class="text-sm italic font-light mt-1">Last update: {{ locatedAt ? new Date(locatedAt).toLocaleString("de-CH", {timeStyle: 'medium'}) : "never" }}</p class="text-sm italic font-light">
      </template>
    </UiGenericCard>
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

<style scoped>

</style>
