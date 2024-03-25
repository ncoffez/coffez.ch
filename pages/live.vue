<template>
  <section id="gallery" v-if="false">
    <hgroup id="title-large-screens">
      <h2 id="url-title">coffez.ch/live</h2>
      <h4>{{ settings.title }}</h4>
    </hgroup>
    <hgroup id="title-small-screens">
      <h2>{{ settings.title }}</h2>
    </hgroup>
    <TransitionGroup name="grid" tag="div" class="custom-grid">
      <div v-for="(image, index) in images" :class="{ 'image-box': true, 'large-first-image': index === 0 }"
        :key="image.id">
        <nuxtLink :to="'/sales/' + image.id">
          <img v-if="index === 0" :src="image.urlFirebaseReduced" :alt="image.name">
          <img v-else :src="image.urlFirebaseWebp" :alt="image.name">
        </nuxtLink>
        <small>{{ intlFormatDistance(image.createdDate.toDate(), now) }}</small>
      </div>
    </TransitionGroup>
  </section>

  <section id="placeholder" v-else>
    <div id="up-next">{{ settings.title }}</div>
    <UiComingSoon />
  </section>
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


#gallery
  padding: 1.7rem 2rem
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
  grid-template: 1fr 1fr / repeat(4, 1fr)
  gap: 1em 2em
  width: 100%
  overflow-y: scroll

  @media screen and (min-width: 2000px)
    grid-template: 1fr 1fr 1fr / repeat(8, 1fr)
    gap: 1em 3em

  @media screen and (min-width: 1400px) and (max-width: 1999px)
    grid-template: 1fr 1fr 1fr / repeat(6, 1fr)
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

@media screen and (min-width: 851px)
  .large-first-image
    grid-area: 1 / 1 / 3 / 3
    z-index: 2
    height: 100%
    width: 100%
    transition: all .25s ease-in-out
    
    img
      aspect-ratio: 21/30.3
      overflow: hidden
      object-fit: cover
      height: calc((100vh - 10.65em))
      width: 100%
      transition: all .25s ease-in-out

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
  font-size: .8em
  font-weight: 300
  opacity: 1
  width: 100%
  text-align: center

@media screen and (min-width: 1000px)
  #title-large-screens
    display: block

  #title-small-screens
    display: none

@media screen and (max-width: 999px)
  #title-large-screens
    display: none

  #title-small-screens
    display: block

.grid-move, .grid-leave-active, .grid-enter-active
  transition: all .25s ease-in-out

#placeholder
  width: 100vw
  height: 100vh
  display: grid
  place-items: center
  position: relative

  #up-next
    position: absolute
    right: 0em
    top: 1rem
    font-size: 1.125rem
    background-color: var(--pico-primary-background)
    padding: 1rem .875rem
    color: var(--pico-contrast)

</style>