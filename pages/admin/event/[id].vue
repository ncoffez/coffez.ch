<template>
  <div class=" px-16 pb-12 mx-auto w-full h-full">
    <div class="md:flex-row flex flex-col gap-8 md:gap-16 place-items-center">
      <UiEventCard :title="event.title" :startDate="event.startDate" :coverImage="selectedImage || event.coverImage"
        :endDate="event.endDate" :description="event.description" :loading="loading" class="my-auto"></UiEventCard>
      <div class="flex flex-col w-full max-w-lg gap-4">
        <div class="flex flex-col w-full max-w-lg">
          <p class="leading-relaxed py-6 text-zinc-400 font-bold">{{ event.id }}</p>
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="event.title">
        </div>
        <div class="flex flex-row gap-2">
          <div class="flex flex-col w-full max-w-lg">
            <label for="start">Start Date</label>
            <input type="date" id="start" v-model="start">
          </div>
          <div class="flex flex-col w-full max-w-lg">
            <label for="end">End Date</label>
            <input type="date" id="end" v-model="end">
          </div>
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <label for="description">Description</label>
          <textarea id="description" class="h-32" v-model="event.description" />
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <label for="upload-images">Upload</label>
          <UiImageDropZone id="upload-images" @mediaChanged="onImageChange" />
        </div>
        <div class="flex gap-4 grid-cols(1fr,2fr)">
          <div class="flex flex-col w-full max-w-lg flex-grow">
            <button @click="updateEvent()" class="cursor-pointer" v-if="!updated">Save</button>
            <button disabled class="bg-green-500 hover:bg-green-500 text-white" v-else>Event saved successfully</button>
          </div>
          <div class="flex flex-col w-32 flex-shrink">
            <button @click="deleteEvent()" class="cursor-pointer bg-zinc-700 hover:bg-zinc-500">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang='ts' setup>
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

const { $db, $functions } = useNuxtApp();

definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { id } = useRoute().params;
const { data: serverEvent } = await useAsyncData('event', async () => {
  const event = await $fetch<any>(`/api/getEvent/${id}`);
  return event;
});

const updated = ref(false);
const loading = ref(false);
watch(updated, () => {
  setTimeout(() => {
    updated.value = false
  }, 3000)
})

const start = computed({
  get: () => event.value.startDate.slice(0, 10),
  set: (value) => event.value.startDate = value
})
const end = computed({
  get: () => event.value.endDate.slice(0, 10),
  set: (value) => event.value.endDate = value
})

const selectedImage = ref(serverEvent.value?.coverImage);

async function updateEvent() {
  const eventRef = doc($db, 'events', id as string);
  let data: any = {};
  data.title = event.value.title;
  data.description = event.value.description;
  data.startDate = startOfDay(event.value.startDate);
  data.endDate = endOfDay(event.value.endDate);
  if (selectedImage.value) data.coverImage = selectedImage.value;

  await updateDoc(eventRef, data)
  updated.value = true
}

async function deleteEvent() {
  await deleteDoc(doc($db, 'events', id as string));
  await navigateTo('/admin');
}

async function onImageChange(event: any) {
  console.log(`Uploading ${event.target.files[0].name}.`);
  const reader = new FileReader();
  reader.onload = async () => {
    loading.value = true;
    const base64Image = reader.result?.toString().split(',')[1]; // Extract Base64 data after comma
    selectedImage.value = (await httpsCallable($functions, "uploadEventCover")({
      imageBase64: base64Image, name: event.target.files[0].name,
    })).data;
    loading.value = false;
    console.log(`Uploaded ${event.target.files[0].name}.`);
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
