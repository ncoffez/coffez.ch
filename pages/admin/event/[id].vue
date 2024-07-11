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
          <label for="coverImage">Cover image</label>
          <input type="file" id="coverImage" accept="image/jpeg, image/png" class="w-full" @change="onImageChange">
        </div>
        <div class="flex flex-col w-full max-w-lg">
          <button @click="updateEvent()" class="cursor-pointer">Save</button>
        </div>
      </div>
    </div>
    <pre>{{ event }}</pre>
  </div>

</template>
<script lang='ts' setup>
import { doc, updateDoc } from 'firebase/firestore';

const { $db } = useNuxtApp();

definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { id } = useRoute().params;
const { data: serverEvent } = await useAsyncData('event', async () => {
  const event = await $fetch<any>(`/api/getEvent/${id}`);
  return event;
});

const selectedImage = ref(serverEvent.value?.coverImage);

async function updateEvent() {
  const eventRef = doc($db, 'events', id as string);
  const data: Record<string, any> = {
    title: event.value.title,
    description: event.value.description,
  }
  if (selectedImage.value) data.coverImage = selectedImage.value;
  await updateDoc(eventRef, data)
}

async function onImageChange(event: any) {
  const formData = new FormData();
  formData.append('file', event.target.files[0]);
  selectedImage.value = await $fetch('/api/uploadImageToStorage', { method: 'post', body: formData });
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
