<template>
  <section id="cards">
    <article v-for="card in ($tm('sections') as any)" :key="card.id" class="grid">
      <div id="image">
        <video v-if="card?.media?.type === 'video'" :src="card.media?.modern" autoplay preload="auto" muted loop />
        <picture v-else>
          <source :srcset="card.media?.modern" type="image/webp" />
          <source :srcset="card.media?.legacy" type="image/jpeg" />
          <img :src="card.media?.legacy" :alt="card.header" />
        </picture>
      </div>
      <div id="text">
        <h1>{{ card.header }}</h1>
        <p>{{ card.lead }}</p>
        <button class="" @click="scrollTo('contact')" v-if="card.action">{{ card.action }}</button>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style lang="sass" scoped>
video
  aspect-ratio: 1

h1
  margin-block: .5em .8em

img, video
  height: clamp(200px, 100%, 100%)


@media (min-width: 992px)
  article
    gap: 2em
    grid-template-columns: 4fr 3fr

  article:nth-of-type(2n)
    grid-template-columns: 3fr 4fr

    #image
      order: 2

@media (max-width: 991px)
  img, video
    max-height: 70vh
</style>
