<template>
<section id="portfolio">
  <h1>Portfolio
    <span @click="mask.scrollBy({ behavior: 'smooth', left: -800 })" class="material-symbols-outlined">chevron_left</span>
    <span @click="mask.scrollBy({ behavior: 'smooth', left: 800 })" class="material-symbols-outlined">chevron_right</span>
  </h1>
  <figure ref="mask">
    <div class="custom-grid">
      <div class="image" v-for="image, index of images">
        <img :src="image" :alt="`Caricature ${index + 1}.jpeg`" srcset="">
      </div>
    </div>
  </figure>
</section>
</template>

<script setup lang="ts">
const mask = ref()
const images = [
  '/img/caricatures/caricatures_7.jpeg',
  '/img/caricatures/caricatures_4.jpeg',
  '/img/caricatures/caricatures_3.jpeg',
  '/img/caricatures/caricatures_2.jpeg',
  '/img/caricatures/caricatures_8.jpeg',
  '/img/caricatures/caricatures_1.jpeg',
  '/img/caricatures/caricatures_5.jpeg',
  '/img/caricatures/caricatures_6.jpeg',
]
</script>

<style lang="sass" scoped>
img
  aspect-ratio: calc(3/5)
  min-width: 250px

figure .custom-grid
  display: flex
  width: fit-content
  gap: 1em


</style>