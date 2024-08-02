<template>
  <div class="px-4 py-6 gap-16 mx-auto w-full h-full max-w-screen-xl block" v-if="gallery">
    <div class="grid grid-cols-2 w-fit gap-8">
      <UiGalleryCover :id="gallery.id" :title="gallery.title" :description="gallery.description"
        :coverImage="selectedImage[0] || gallery.coverImage" :admin="true" :disabled="true">
      </UiGalleryCover>
      <div class="flex flex-col w-full max-w-lg">
        <label for="upload-images">Upload</label>
        <UiImageDropZone id="upload-images" @imageChanged="onImageChange" />
      </div>
    </div>
    <h1 class="text-3xl font-bold text-slate-100">{{ gallery.title }}</h1>
    <p class="leading-relaxed mb-12 text-zinc-400 font-light text-lg">{{ gallery.description }}</p>
    <UiGalleryMasonry class="my-16" :images="gallery?.images" v-if="gallery?.images">
      <slot name="first-card"></slot>
    </UiGalleryMasonry>
    <div class="my-8 p-8 flex flex-col w-full border-dotted border-2 h-96 border-zinc-700" v-else>
      <p class=" text-lg text-zinc-400">No images uploaded yet.</p>
    </div>
  </div>

</template>
<script lang='ts' setup>
import { getDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { id } = useRoute().params;
const { $db, $functions } = useNuxtApp();

const { data: gallery, refresh } = await useAsyncData<Gallery>('gallery', async () => {
  const galleryRef = await getDoc(doc($db, 'gallery', id as string));
  return galleryRef.data() as Gallery;
})
const newImages: Ref<string[]> = ref([])
const selectedImage: any = ref([gallery.value?.coverImage]);

async function onImageChange(event: any) {
  const files: File[] = Array.from(event.target.files);
  const images: string[] = [];
  for (const file of files) {
    images.push(await readFile(file));
  }
  if (!images.length) return;
  const imageUrls: string[] = await Promise.all(files.map(async (file, index) => {
    const extension = file.name.split('.').pop() || 'jpg';
    const timestamp = new Date().toISOString();
    const fileName = `${timestamp}_${index}.${extension}`;
    return (await httpsCallable($functions, "uploadEventCover")({
      imageBase64: images[index],
      name: fileName,
    })).data as string;
  }));
  await uploadImages(imageUrls);
}

async function uploadImages(images: string[]) {
  const docRef = doc($db, 'gallery', id as string);
  await updateDoc(docRef, { images: arrayUnion(...images) });
  refresh();
}

function readFile(file: any): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result?.toString().split(',')[1];
      resolve(base64Image || '');
    }
    if (reader.error) reject(reader.error);
    reader.readAsDataURL(file);
  })
}

</script>
<style lang='sass' scoped></style>
