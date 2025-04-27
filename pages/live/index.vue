<template>
  <section id="gallery" v-if="images.length > 0">
    <hgroup id="title-large-screens">
      <h2 id="url-title"><NuxtLink to="/">coffez.ch</NuxtLink>/live</h2>
      <h4 @click="">{{ settings?.title }}</h4>
    </hgroup>
    <hgroup id="title-small-screens">
      <h2>{{ settings?.title }}</h2>
    </hgroup>
    <TransitionGroup name="grid" tag="div" class="custom-grid">
      <div
        v-for="(image, index) in images"
        :class="{ 'image-box': true, 'large-first-image': index === 0 }"
        :key="image.id">
        <nuxtLink :to="'/sales/' + image.id">
          <img v-if="index === 0" :src="image.urlFirebaseReduced" :alt="image.name" />
          <img v-else :src="image.urlFirebaseWebp" :alt="image.name" />
        </nuxtLink>
        <small>{{ toRelativeDate(image.createdDate.toDate()) }}</small>
      </div>
    </TransitionGroup>
  </section>

  <section id="placeholder" v-else>
    <div id="up-next">{{ settings?.title }}</div>
    <UiComingSoon />
  </section>
</template>
<script lang="ts" setup>
import { toRelativeDate } from "#imports";
import { intlFormatDistance, subDays, differenceInDays, formatRelative } from "date-fns";
import {
  collection,
  query,
  onSnapshot,
  CollectionReference,
  Firestore,
  orderBy,
  getDoc,
  doc,
  Timestamp,
  where,
} from "firebase/firestore";

definePageMeta({ middleware: "live-event" });
const { $db } = useNuxtApp();
const db = await $db();

const settings = ref({ title: "Coffez.ch - Live", startDate: new Date(subDays(new Date(), 60)) });

const portraitsRef: CollectionReference = collection(db, "portraits");
const q = query(
  portraitsRef,
  where("createdDate", ">=", settings.value?.startDate || Timestamp.fromDate(subDays(new Date(), 1.2))),
  orderBy("createdDate", "desc"),
  orderBy("urlFirebaseWebp")
);
const images: Ref<any[]> = ref([]);

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    const data = { id: change.doc.id, ...change.doc.data() };
    if (change.newIndex === 0) images.value.unshift(data);
    else {
      images.value.push(data);
    }
  });
});

onUnmounted(unsubscribe);
</script>
<style scoped>
a {
  text-decoration: none;
  display: inline-block;
  margin-right: 0.1rem;
  cursor: pointer;
}

#gallery {
  padding: 1.7rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

@media screen and (max-width: 850px) {
  #gallery {
    padding: 1.5em;
  }
}

@media screen and (max-width: 500px) {
  #gallery {
    padding: 1em 2em;
    overflow: scroll;
  }
}

h4 {
  margin-block: 0.5em 1.5em;
}

@media screen and (max-width: 850px) {
  h4 {
    margin-block: 0 1em;
  }
}

.custom-grid {
  display: grid;
  grid-template: 1fr 1fr / repeat(4, 1fr);
  gap: 1em 2em;
  width: 100%;
  overflow-y: scroll;
}

@media screen and (min-width: 2000px) {
  .custom-grid {
    grid-template: 1fr 1fr 1fr / repeat(8, 1fr);
    gap: 1em 3em;
  }
}

@media screen and (min-width: 1400px) and (max-width: 1999px) {
  .custom-grid {
    grid-template: 1fr 1fr 1fr / repeat(6, 1fr);
    gap: 1em 3em;
  }
}

@media screen and (max-width: 850px) and (min-width: 701px) {
  .custom-grid {
    grid-template: 1fr 1fr / repeat(4, 1fr);
    gap: 1em 2em;
  }
}

@media screen and (max-width: 700px) and (min-width: 501px) {
  .custom-grid {
    grid-template: 1fr 1fr / 1fr 1fr;
  }
}

@media screen and (max-width: 500px) {
  .custom-grid {
    display: flex;
    flex-direction: column;
    gap: 2em;
    overflow: unset;
  }
}

.image-box {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 851px) {
  .large-first-image {
    grid-area: 1 / 1 / 3 / 3;
    z-index: 2;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease-in-out;
  }

  .large-first-image img {
    aspect-ratio: 21/30.3;
    overflow: hidden;
    object-fit: cover;
    height: calc((100vh - 10.65em));
    width: 100%;
    transition: all 0.25s ease-in-out;
  }
}

img {
  aspect-ratio: 21/29.7;
  height: calc((100vh - 13em) / 2);
  object-position: center;
}

@media screen and (max-width: 500px) {
  img {
    width: 100%;
    height: 100%;
    aspect-ratio: unset;
    object-fit: cover;
  }
}

small {
  font-size: 0.8em;
  font-weight: 300;
  opacity: 1;
  width: 100%;
  text-align: center;
}

@media screen and (min-width: 1000px) {
  #title-large-screens {
    display: block;
  }

  #title-small-screens {
    display: none;
  }
}

@media screen and (max-width: 999px) {
  #title-large-screens {
    display: none;
  }

  #title-small-screens {
    display: block;
  }
}

.grid-move,
.grid-leave-active,
.grid-enter-active {
  transition: all 0.25s ease-in-out;
}

#placeholder {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
}

#placeholder #up-next {
  position: absolute;
  right: 0em;
  top: 1rem;
  font-size: 1.125rem;
  background-color: var(--pico-primary-background);
  padding: 1rem 0.875rem;
  color: var(--pico-primary-inverse);
}
</style>
