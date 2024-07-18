<template>
  <div class=" px-16 pb-12 mx-auto w-full h-full">
    <div class="flex flex-row gap-16">
      <UiEventCard :title="event.title" :startDate="event.startDate" :coverImage="selectedImage || event.coverImage"
        :endDate="event.endDate" :description="event.description" class="my-auto"></UiEventCard>

      <div class="flex flex-col w-full max-w-lg gap-4">
        <div class="flex flex-col w-full max-w-lg">
          <p class="leading-relaxed py-6 text-zinc-400 font-bold">{{ event.id }}</p>
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="event.title">
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <label for="description">Description</label>
          <textarea id="description" class="h-32" v-model="event.description" />
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <label for="file">File</label>
          <label for="dropzone-file"
            class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center border-2 border-dashed cursor-pointer bg-zinc-900 border-zinc-700 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-8 h-8 text-zinc-400">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
            <h2 class="mt-1 font-medium tracking-wide text-zinc-200">Event image</h2>
            <p class="mt-2 text-xs tracking-wide text-zinc-400">Upload or drag & drop your file as PNG or JPG </p>
            <input id="dropzone-file" type="file" accept="image/png, image/jpeg" class="hidden"
              @change="onImageChange" />
          </label>
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <button @click="updateEvent()" class="cursor-pointer" v-if="!updated">Save</button>
          <button disabled class="bg-green-500 hover:bg-green-500 text-white" v-else>Event saved successfully</button>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang='ts' setup>
import { doc, updateDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

const { $db, $functions } = useNuxtApp();

definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { id } = useRoute().params;
const { data: serverEvent } = await useAsyncData('event', async () => {
  const event = await $fetch<any>(`/api/getEvent/${id}`);
  return event;
});

const updated = ref(false);
watch(updated, () => {
  setTimeout(() => {
    updated.value = false
  }, 3000)
})

const selectedImage = ref(serverEvent.value?.coverImage);

async function updateEvent() {
  const eventRef = doc($db, 'events', id as string);
  const data: Record<string, any> = {
    title: event.value.title,
    description: event.value.description,
  }
  if (selectedImage.value) data.coverImage = selectedImage.value;
  await updateDoc(eventRef, data)
  updated.value = true
}

async function onImageChange(event: any) {
  const reader = new FileReader();
  reader.onload = async () => {
    const base64Image = reader.result?.toString().split(',')[1]; // Extract Base64 data after comma
    selectedImage.value = (await httpsCallable($functions, "uploadEventCover")({
      imageBase64: base64Image, name: event.target.files[0].name
    })).data;
  }
  reader.readAsDataURL(event.target.files[0]);
}

const event = ref({
  title: serverEvent.value?.title,
  id: serverEvent.value?.id,
  startDate: serverEvent.value?.startDate,
  endDate: serverEvent.value?.endDate,
  coverImage: serverEvent.value?.coverImage,
  description: serverEvent.value?.description
});

</script>
<style lang='sass' scoped>
input[type="text"]
  @apply w-full p-4 rounded-md border-solid border-2 border-zinc-700 mt-2 focus:ring-1 ring-slate-500 focus:outline-none focus:bg-zinc-900 leading-tight
</style>
