<template>
<div class="w-fit flex flex-col lg:grid lg:grid-cols-2 gap-6 p-8 max-w-screen-lg mx-auto">
  <div id="image" class="max-w-[500px]">
    <img v-if="data?.urlFirebaseOriginalWithQR" :src="data?.urlFirebaseOriginalWithQR" alt="" srcset="" />
    <img v-else :src="data?.urlFirebaseReduced" alt="" srcset="" />
  </div>
  <div id="text">
    <hgroup>
      <h1 class="text-3xl font-bold">{{ data?.originalName }}</h1>
      <p class="text-lg leading-loose text-slate-500">{{ toDate(data?.createdDate) }}</p>
      <div class="inline-block text-base font-light px-2 py-1 bg-zinc-700 text-stone-400 rounded-full my-2">{{ data?.size }}</div>
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
    }
  },
  { immediate: true }
);

const toDate = (date: { _seconds: any; _nanoseconds: any }) => {
  return new Timestamp(date?._seconds, date?._nanoseconds).toDate().toLocaleString() || date;
};
</script>

<style scoped>
</style>
