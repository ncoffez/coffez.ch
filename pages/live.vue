<template>
  <div v-for="image in images" :key="image.id">
    <img :src="image.url" /> {{ image }}
  </div>
  </template>
  
  <script setup>
  // const { data: images } = await useFetch('https://api.thecatapi.com/v1/images/search?limit=1', {
  const { data: images } = await useFetch('/api/liveImages', {
    method: 'GET',
    initialCache: false,
    async onEvent(event) {
      console.log({event})
      const imageData = JSON.parse(event.data);
      images.value.push(imageData);
    }
  });
  </script>
  
