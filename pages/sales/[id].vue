<template>
  <main class="container">
    <div class="grid">
      <div id="image">
        <img :src="data?.urlZapier" alt="" srcset="" />
      </div>
      <div id="actions">
        <h1>{{ data?.originalName }}</h1>
        <p>{{ data?.createdDate }}</p>
        <pre>{{ JSON.stringify(data) }}</pre>
        <button role="button" class="outline secondary" @click="fetchDocument(routeId)">Refresh</button>
        <button>Buy</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const data: Ref<any> = ref(null);
const routeId: any = ref(useRoute().params.id);

onMounted(async () => {
  await fetchDocument(routeId);
});

const fetchDocument = async (route: any) => {
  const res = await useFetch("/api/getPortrait", {
    method: "post",
    body: {
      id: route,
    },
  });

  const { status, body, error }: any = { ...res.data.value };
  if (status == 200) {
    data.value = body;
    console.log(`Fetched doc from firestore.`);
    console.log({ ...data.value });
  }
  else if (status == 404) {
    console.log(`Was unable to fetch data from firestore. ${error}`);
  } else {
    console.log(`Response returned empty. ${JSON.stringify(res.data.value)}`);
  }
};
</script>

<style lang="sass" scoped>
.grid > *
  height: 100%
  padding-block: 5%
  place-content: center
  display: grid

.grid
  gap: 3em
</style>
