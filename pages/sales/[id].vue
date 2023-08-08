<template>
  <main class="container">
    <div class="grid">
      <div id="image">
        <img :src="data?.urlFirebaseReduced" alt="" srcset="" />
      </div>
      <div id="actions">
        <hgroup>
          <h1>{{ data?.originalName }}</h1>
          <p>{{ toDate(data?.createdDate) }}</p>
        </hgroup>
        <a :href="data?.urlFirebaseReduced" role="button" class="outline secondary" download="Coffez-portrait.jpg">Download</a>
        <button>Buy</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Timestamp } from "firebase/firestore";
const data: Ref<any> = ref(null);
const route: any = useRoute();

async function fetchDocument() {
  const response = await useFetch(`/api/getPortrait/${route.params.id}`);
  data.value = response.data.value;
}

watch(
  route,
  (newRoute, oldRoute) => {
    if (newRoute?.params.id !== oldRoute?.params.id) {
      fetchDocument();
    }
  },
  { immediate: true }
);

const toDate = (date: { _seconds: any; _nanoseconds: any }) => {
  return new Timestamp(date?._seconds, date?._nanoseconds).toDate().toLocaleString() || date;
};
</script>

<style lang="sass" scoped>
.grid > *
  height: 100%
  padding-block: 5%
  place-content: center
  display: grid

.grid
  gap: 0 3em

a[role="button"]
  margin: 1em 0

h1
  max-width: calc(100vw - 1em)
  overflow-wrap: break-word
  word-wrap: break-word

@media (min-width: 992px)
  .grid
    height: 100vh


</style>
