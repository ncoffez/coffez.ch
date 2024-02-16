<template>
<section>
  <h1>Live Caricatures</h1>
  <div class="grid">
    <div v-for="image in images" class="image-box">
      <img :src="image.urlFirebaseWebp" :alt="image.name">
      <small>{{ image.createdDate.toDate().toLocaleDateString() }}</small>
    </div>
  </div>
</section>
</template>
<script lang='ts' setup>
import { useNuxtApp } from '#app';
import { collection, query, onSnapshot, limit, CollectionReference, Firestore, orderBy, deleteDoc } from "firebase/firestore";

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
<style lang='sass' scoped>
section
  height: 100vh
  padding: 3em
  display: flex
  flex-direction: column
  overflow-y: hidden
.grid
  grid-template: 1fr 1fr / repeat(auto-fit, minmax(230px, 1fr))
  overflow-y: scroll

.image-box
  display: flex
  flex-direction: column
  justify-content: space-around


  img
    aspect-ratio: 21/29.7
    width: 100%
    object-position: center

small
  font-size: .5em
  width: 100%
  text-align: center
</style>
