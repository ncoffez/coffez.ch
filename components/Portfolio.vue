<template>
<section id="portfolio">
  <h1>Portfolio
    <span @click="mask.scrollBy({ behavior: 'smooth', left: -800 })" class="material-symbols-outlined">chevron_left</span>
    <span @click="mask.scrollBy({ behavior: 'smooth', left: 800 })" class="material-symbols-outlined">chevron_right</span>
  </h1>
  <div class="mask" ref="mask">
    <div class="gallery">
      <div class="image" v-for="image, index of images">
        <img :src="image" :alt="`Caricature ${index+1}.jpeg`" srcset="">
      </div>
    </div>
  </div>
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
#portfolio
  margin-block: 4em
  box-sizing: border-box

.mask
  overflow-x: scroll
  width: 100%
  display: block
  position: relative

  &::-webkit-scrollbar
    display: none

.gallery
  display: flex
  width: fit-content
  gap: 1em

.image
  background-color: var(--light)
  width: 13em
  height: 18em

  img
    height: 100%
    width: 100%
    object-fit: cover
</style>