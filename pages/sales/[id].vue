<template>
<div class="grid">
  <div id="image">
    <img :src="data?.urlFirebaseReduced" alt="" srcset="" />
  </div>
  <div id="text">
    <hgroup>
      <h1>{{ data?.originalName }}</h1>
      <p>{{ toDate(data?.createdDate) }}</p>
      <i>{{ data?.size }}</i>
    </hgroup>
  </div>
</div>
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
      console.log(data)
    }
  },
  { immediate: true }
);

const toDate = (date: { _seconds: any; _nanoseconds: any }) => {
  return new Timestamp(date?._seconds, date?._nanoseconds).toDate().toLocaleString() || date;
};
</script>

<style lang="sass" scoped>
.grid
  padding: 2em
  height: 100vh
  grid-template-columns: 1fr

#image
  height: 100%
  width: fit-content
  overflow: hidden

  img
    height: 100%
    width: auto
    object-fit: scale-down

#text
  place-items: center
  width: 100%
  height: 100%
  align-content: center
</style>
