<template>
  <section id="portfolio">
    <h1>
      Portfolio
      <span @click="mask.scrollBy({ behavior: 'smooth', left: -800 })">&lt; </span>
      <span @click="mask.scrollBy({ behavior: 'smooth', left: 800 })">&gt;</span>
    </h1>
    <figure ref="mask">
      <div class="custom-grid">
        <div class="image" v-for="(image, index) of images">
          <picture>
            <source :srcset="image.webp" type="image/webp" />
            <source :srcset="image.jpeg" type="image/jpeg" />
            <img :src="image.jpeg" :alt="`Portrait${index + 1}`" srcset="" />
          </picture>
        </div>
      </div>
    </figure>
  </section>
</template>

<script setup lang="ts">
const mask = ref();
const images = [
  { jpeg: "/img/caricatures/caricatures_1.jpeg", webp: "/img/caricatures/caricatures_1.webp" },
  { jpeg: "/img/caricatures/caricatures_2.jpeg", webp: "/img/caricatures/caricatures_2.webp" },
  { jpeg: "/img/caricatures/caricatures_3.jpeg", webp: "/img/caricatures/caricatures_3.webp" },
  { jpeg: "/img/caricatures/caricatures_4.jpeg", webp: "/img/caricatures/caricatures_4.webp" },
  { jpeg: "/img/caricatures/caricatures_5.jpeg", webp: "/img/caricatures/caricatures_5.webp" },
  { jpeg: "/img/caricatures/caricatures_6.jpeg", webp: "/img/caricatures/caricatures_6.webp" },
  { jpeg: "/img/caricatures/caricatures_7.jpeg", webp: "/img/caricatures/caricatures_7.webp" },
  { jpeg: "/img/caricatures/caricatures_8.jpeg", webp: "/img/caricatures/caricatures_8.webp" },
];
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
