<template>
  <div @click="createNewGallery()"
    class="w-48 h-48 my-4 bg-zinc-800 hover:scale-105 cursor-pointer overflow-clip rounded-full mx-auto transition duration-300 ease-in-out"
    id="create-new-gallery">
    <div class="basis-full w-48 h-48">
      <div class="md:shrink-0 relative">
        <div class="h-48 w-48 object-center bg-zinc-400 font-2xl text-white place-items-center grid">
          <Icon id="add-icon" name="ic:outline-add" class="w-1/2 h-1/2 text-zinc-300" />
        </div>
        <div id="title"
          class="absolute bottom-0 z-2 w-full h-16 place-items-center flex flex-col content-around place-content-center bg-zinc-900 bg-opacity-60 transition-all duration-300 ease-in-out">
          <div class="text-white text-md font-bold uppercase tracking-wide block">New</div>
          <div id="description"
            class="text-zinc-400 text-sm font-light tracking-wide hidden w-2/3 max-w-prose text-center">Create a new
            gallery</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { addDoc, collection } from 'firebase/firestore';

const { $db } = useNuxtApp();

async function createNewGallery() {
  const data = {
    title: 'New Gallery',
    description: 'This text should be fancier.'
  }
  const newGallery = await addDoc(collection($db, 'gallery'), data);
  await navigateTo(`/admin/gallery/${newGallery.id}`);
}


</script>
<style lang='sass' scoped>
#create-new-gallery:hover #title
  @apply h-full bg-opacity-90

#create-new-gallery:hover #description
  @apply grid

#create-new-gallery:hover #add-icon
  @apply rotate-90 text-white

#add-icon
  @apply transition-transform duration-100 ease-out
</style>
