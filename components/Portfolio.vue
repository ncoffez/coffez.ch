<template>
<section id="portfolio">
  <h1>
    Portfolio
  </h1>
  <div class="grid">
    <div class="image" v-for="(image, index) of images">
      <picture>
        <source :srcset="image.urlFirebaseWebp" type="image/webp" />
        <source :srcset="image.urlFirebaseJpg" type="image/jpeg" />
        <img :src="image.urlFirebaseJpg" :alt="`Portrait${index + 1}`" srcset="" />
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
const q = query(portraitsRef, limit(5), orderBy('createdDate', 'desc'), orderBy('urlFirebaseWebp'));
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

<style lang="sass" scoped>
img
  aspect-ratio: calc(21/29.7)

.grid
  gap: 2em
</style>
