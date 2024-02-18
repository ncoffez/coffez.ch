<template>
<section>
  <h4>{{ settings.title }}</h4>
  <div class="grid">
    <div v-for="image in  images" class="image-box">
      <nuxtLink :to="'/sales/' + image.id">
        <img :src="image.urlFirebaseWebp" :alt="image.name">
      </nuxtLink>
      <small>{{ intlFormatDistance(image.createdDate.toDate(), now) }}</small>
    </div>
  </div>
</section>
</template>
<script lang='ts' setup>
import { useNuxtApp } from '#app';
import { intlFormatDistance, subDays } from 'date-fns';
import { collection, query, onSnapshot, CollectionReference, Firestore, orderBy, getDoc, doc, Timestamp, where } from "firebase/firestore";

const nuxtApp = useNuxtApp();
const db = nuxtApp.$db as Firestore;

let settings = ref({ title: 'Coffez.ch - Live', startDate: subDays(new Date(), 1.2) })
let now = ref(new Date());

onMounted(() => setInterval(() => {
  now.value = new Date();
}, 1000))

const settingsData = (await getDoc(doc(db, 'settings/gallery'))).data();
if (settingsData) settings.value = { ...settingsData } as any

const portraitsRef: CollectionReference = collection(db, "portraits");
const q = query(portraitsRef, where('createdDate', '>=', settings.value.startDate), orderBy('createdDate', 'desc'), orderBy('urlFirebaseWebp'));
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
  overflow-y: scroll
.grid
  grid-template: 1fr 1fr / repeat(auto-fit, minmax(230px, 1fr))

.image-box
  display: flex
  flex-direction: column
  justify-content: space-around

img
  aspect-ratio: 21/29.7
  object-position: center

small
  font-size: .9em
  opacity: .5
  width: 100%
  text-align: center
</style>
