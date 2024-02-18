<template>
<section>
  <h4>{{ settings.title }}</h4>
  <div class="custom-grid">
    <div v-for="image in images" class="image-box">
      <nuxtLink :to="'/sales/' + image.id">
        <img :src="image.urlFirebaseWebp" :alt="image.name">
      </nuxtLink>
      <small>{{ intlFormatDistance(image.createdDate.toDate(), now) }}</small>
    </div>
  </div>
</section>

<!-- <section v-else>
<h1>Placeholder</h1>
</section> -->
</template>
<script lang='ts' setup>
import { useNuxtApp } from '#app';
import { intlFormatDistance, subDays } from 'date-fns';
import { collection, query, onSnapshot, CollectionReference, Firestore, orderBy, getDoc, doc, Timestamp, where } from "firebase/firestore";

const nuxtApp = useNuxtApp();
const db = nuxtApp.$db as Firestore;

let settings: Ref<{ title: string, startDate: Timestamp | Date }> = ref({ title: 'Coffez.ch - Live', startDate: Timestamp.fromDate(subDays(new Date(), 1.2)) })
let now = ref(new Date());

onMounted(() => setInterval(() => {
  now.value = new Date();
}, 1000))

const settingsData: { title: string, startDate: Timestamp | Date } = (await getDoc(doc(db, 'settings/gallery'))).data() as any;
if (settingsData) settings.value = { ...settingsData }

const portraitsRef: CollectionReference = collection(db, "portraits");
const q = query(portraitsRef, where('createdDate', '>=', settings.value.startDate), orderBy('createdDate', 'desc'), orderBy('urlFirebaseWebp'));
const images: Ref<any[]> = ref([]);

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    const data = { id: change.doc.id, ...change.doc.data() }
    if (change.newIndex === 0) images.value.unshift(data);
    else { images.value.push(data) }
  });
});

onUnmounted(unsubscribe);
</script>
<style lang='sass' scoped>
section
  padding: 2.5rem 2rem
  display: flex
  flex-direction: column
  overflow: hidden
  height: 100vh

  @media screen and (max-width: 850px)
    padding: 1.5em

  @media screen and (max-width: 500px)
    padding: 1em 2em
    overflow: scroll

h4
  margin-block: .5em 1.5em

  @media screen and (max-width: 850px)
    margin-block: 0 1em

.custom-grid
  display: grid
  grid-template: 1fr 1fr / repeat(5, 1fr)
  gap: 1em 2em
  width: 100%
  overflow-y: scroll

  @media screen and (min-width: 1400px)
    grid-template: 1fr 1fr 1fr / repeat(7, 1fr)
    gap: 1em 3em

  @media screen and (max-width: 850px) and (min-width: 701px)
    grid-template: 1fr 1fr / repeat(4, 1fr)
    gap: 1em 2em

  @media screen and (max-width: 700px) and (min-width: 501px)
    grid-template: 1fr 1fr / 1fr 1fr

  @media screen and (max-width: 500px)
    display: flex
    flex-direction: column
    gap: 2em
    overflow: unset

.image-box
  display: flex
  flex-direction: column

  @media screen and (min-width: 701px)
    &:first-child
      grid-area: 1 / 1 / 3 / 3
      height: 100%
      width: 100%
      
      img
        aspect-ratio: 21/30.3
        overflow: hidden
        object-fit: cover
        height: calc((100vh - 10.65em))
        width: 100%

img
  aspect-ratio: 21/29.7
  height: calc((100vh - 13em) / 2)
  object-position: center

  @media screen and (max-width: 500px)
    width: 100%
    height: 100%
    aspect-ratio: unset
    object-fit: cover

small
  font-size: .9em
  opacity: .5
  width: 100%
  text-align: center
</style>
