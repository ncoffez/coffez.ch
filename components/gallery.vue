<template>
  <section class="w-full max-w-screen-lg mx-auto">
    <h1 class="text-3xl font-bold mx-2 my-4 text-slate-100">Gallery</h1>
    <div class="w-full px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 ">
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

const { data: galleries } = await useAsyncData('galleries', async () => {
  const galleryRef = collection($db, 'gallery');
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
<style lang='sass' scoped></style>
