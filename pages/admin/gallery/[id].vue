<template>
  <div class="px-4 py-6 gap-16 mx-auto w-full h-full max-w-screen-xl block" v-if="gallery">
    <div class="grid grid-cols-1 mx-auto sm:grid-cols-3 w-full max-w-screen-xl gap-6 md:gap-8 mb-16">
      <UiGalleryCover class="mx-auto grow-0" :id="gallery.id" :title="gallery.title" :description="gallery.description"
        :coverImage="gallery.coverImage || gallery.coverImage" :admin="true" :disabled="true">
      </UiGalleryCover>
      <div class="flex flex-col w-full flex-grow">
        <input type="text" id="title" v-model="gallery.title" @change="updateTitle(gallery.title)">
        <textarea id="description" class="h-32" v-model="gallery.description"
          @change="updateDescription(gallery.description)" />
        <button class="bg-red-600 hover:bg-red-500 text-white mb-0 w-48 ml-auto leading-relaxed" @click="deleteGallery()">
          <Icon name="ic:round-delete" style="white" size="1.5rem" class="inline-block" /> Delete gallery
        </button>
      </div>
      <div class="block flex-col w-full max-w-lg mx-auto">
        <label for="upload-images">Upload</label>
        <UiImageDropZone id="upload-images" @mediaChanged="onMediaChange" />
      </div>
    </div>
    <h1 class="text-3xl font-bold text-slate-100">{{ gallery.title }}</h1>
    <p class="leading-relaxed mb-12 text-zinc-400 font-light text-lg">{{ gallery.description }}</p>
    <UiGalleryMasonry class="my-16" :images="gallery?.images" v-if="gallery?.images" @image-favorited="setCoverImage"
      :favorite="gallery.coverImage" @image-deleted="deleteImage" :admin="true">
      <slot name="first-card"></slot>
    </UiGalleryMasonry>
    <div class="my-8 p-8 flex flex-col w-full border-dotted border-2 h-96 border-zinc-700" v-else>
      <p class=" text-lg text-zinc-400">No images uploaded yet.</p>
    </div>
    <div class="mb-16"></div>
  </div>

</template>
<script lang='ts' setup>
import { getDoc, doc, updateDoc, arrayUnion, arrayRemove, deleteDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { id } = useRoute().params;
const { $db, $functions } = useNuxtApp();
const docRef = doc($db, 'gallery', id as string);

const { data: gallery, refresh } = await useAsyncData<Gallery>('gallery', async () => {
  const galleryRef = await getDoc(docRef);
  return galleryRef.data() as Gallery;
})

async function onMediaChange(event: any) {
  const files: File[] = Array.from(event.target.files);
  const mediaItems: string[] = [];
  for (const file of files) {
    mediaItems.push(await readFile(file));
  }
  if (!mediaItems.length) return;

  const mediaUrls: string[] = await Promise.all(files.map(async (file, index) => {
    const extension = file.name.split('.').pop() || 'jpg';
    const timestamp = new Date().toISOString();
    const fileName = `${timestamp}_${index}.${extension}`;
    const isVideo = file.type.startsWith('video/');
    if (isVideo) console.log('isVideo', isVideo);

    const uploadFunction = isVideo ? "uploadGalleryVideo" : "uploadGalleryImage";

    return (await httpsCallable($functions, uploadFunction)({
      [isVideo ? 'videoBase64' : 'imageBase64']: mediaItems[index],
      name: fileName,
      folder: 'gallery'
    })).data as string;
  }));

  await uploadMedia(mediaUrls);
}

async function uploadMedia(images: string[]) {
  const docRef = doc($db, 'gallery', id as string);
  await updateDoc(docRef, { images: arrayUnion(...images) });
  refresh();
}

async function updateTitle(title: string) {
  const docRef = doc($db, 'gallery', id as string);
  await updateDoc(docRef, { title });
  refresh();
}

async function updateDescription(description: string) {
  const docRef = doc($db, 'gallery', id as string);
  await updateDoc(docRef, { description });
  refresh();
}

async function setCoverImage(imageUrl: string) {
  const docRef = doc($db, 'gallery', id as string);
  await updateDoc(docRef, { coverImage: imageUrl });
  refresh();
}

async function deleteImage(imageUrl: string) {
  const docRef = doc($db, 'gallery', id as string);
  await updateDoc(docRef, { images: arrayRemove(imageUrl) });
  refresh();
}

async function deleteGallery() {
  const galleryRef = doc($db, 'gallery', id as string);
  await deleteDoc(galleryRef);
  await navigateTo('/admin');
}

function readFile(file: any): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Media = reader.result?.toString().split(',')[1];
      resolve(base64Media || '');
    }
    if (reader.error) reject(reader.error);
    reader.readAsDataURL(file);
  })
}

</script>
<style scoped></style>
