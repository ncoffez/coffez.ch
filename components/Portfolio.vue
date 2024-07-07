<template>
  <section id="portfolio" class="w-full max-w-screen-2xl">
    <div id="title" class="flex justify-between items-center pb-6">
      <h1 class="text-4xl text-slate-100 font-bold">Portfolio</h1>
      <nuxtLink to="/live">
        <Icon name="ic:sharp-fullscreen" class="w-10 h-10" />
      </nuxtLink>
    </div>
    <div class="grid gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6  lg:gap-12 xl:gap-16">
      <div class="" v-for="(image, index) of images">
        <picture class="">
          <source :srcset="image.urlFirebaseWebp" type="image/webp" />
          <source :srcset="image.urlFirebaseJpg" type="image/jpeg" />
          <img class="rounded-md" :src="image.urlFirebaseJpg" :alt="`Portrait${index + 1}`" srcset="" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mask = ref();
import { useNuxtApp } from '#app';
import { collection, query, onSnapshot, limit, CollectionReference, Firestore, orderBy } from "firebase/firestore";

const nuxtApp = useNuxtApp();
const db = nuxtApp.$db as Firestore;


const portraitsRef: CollectionReference = collection(db, "portraits");
const q = query(portraitsRef, limit(12), orderBy('createdDate', 'desc'), orderBy('urlFirebaseWebp'));
const images: Ref<any[]> = ref([]);

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const newImages: any[] = [];
  querySnapshot.forEach((doc) => {
    newImages.push({ id: doc.id, ...doc.data() });
  });
  images.value = [...newImages]
});

onUnmounted(unsubscribe);
</script>
