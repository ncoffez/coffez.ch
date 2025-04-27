<template>
  <section class="w-full max-w-screen-lg mx-auto">
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 ">
      <slot name="first-card"></slot>
      <UiGalleryCover v-for="gallery of galleries" :key="gallery.id" :id="gallery.id" :title="gallery.title"
        :description="gallery.description" :coverImage="gallery.coverImage" :admin="admin">
      </UiGalleryCover>
    </div>
  </section>
</template>
<script lang='ts' setup>
import { collection, getDocs } from 'firebase/firestore';
defineProps({
  admin: {
    type: Boolean,
    required: false,
    default: false
  }
})
const { $db } = useNuxtApp();
const db = await $db();

const { data: galleries } = await useAsyncData('galleries', async () => {
  const galleryRef = collection(db, 'gallery');
  const galleries = await getDocs(galleryRef);
  return galleries.docs.map((doc) => {
    return {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      coverImage: doc.data().coverImage
    }
  })
})


</script>
<style scoped></style>
