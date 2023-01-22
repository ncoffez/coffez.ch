<template>
<section id="cards">
  <article v-for="card in germanBody" class="grid">
    <div id="image">
      <video v-if="['webp', 'mp4'].includes(card.media.split('.').pop() || '')" :src="card.media" autoplay preload="auto" muted loop />
      <img v-else :src="card.media" alt="">
    </div>
    <div id="text">
      <h1>{{ card.header }}</h1>
      <p>{{ card.lead }}</p>
      <button class="outline" @click="goTo('footer')" v-if="card.action">{{ card.action }}</button>
    </div>
  </article>
</section>
</template>

<script setup lang="ts">
import { germanBody } from '~~/assets/texts';

const goTo = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

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
    padding-inline: 7em
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