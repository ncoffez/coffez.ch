<template>
<section id="cards">
  <div class="card" v-for="card in germanBody">
    <div class="media">
      <video v-if="['webp', 'mp4'].includes(card.media.split('.').pop() || '')" :src="card.media" autoplay preload="auto" muted loop />
      <img v-else :src="card.media" alt="">
    </div>
    <div class="content">
      <h1>{{ card.header }}</h1>
      <p>{{ card.lead }}</p>
      <button @click="goTo('footer')" v-if="card.action" class="border">{{ card.action }}</button>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { germanBody } from '~~/assets/texts';

const goTo = (target: string) => {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

</script>

<style lang="sass" scoped>
#cards
  width: 100%
  margin-bottom: 4em
  place-items: center
  display: grid

img, video
  width: 100%
  height: 100%
  object-fit: cover
  border-radius: .5em


.media
  width: 500px
  height: 500px
  border-radius: .5em
  overflow: hidden


.card
  display: grid
  grid-template-columns: auto auto
  width: 80%
  gap: 4em
  margin-block: 5em

  &:nth-of-type(2n)
    .media
      order: 2

  h1
    line-height: 1.2em
    
@media screen and (max-width: 700px) //smartphone
  #cards
    padding-inline: 1em

  .media
    width: 100%
    order: 1

  .content
    order: 2
    
    h1
      text-align: center

  .card
    display: flex
    flex-direction: column
    gap: 1.5em
    width: 100%
    max-height: calc(100vh - 2em)

  .border
    background-color: var(--secondary)
    color: var(--secondary-contrast)
    border: none
    width: 100%

@media screen and (min-width: 701px) and (max-width: 1200px) //tablet
  .card
    width: 90%
    gap: 1.5em

  .media
    width: 40vw
    height: 400px

  h1
    font-size: max(1.5em, 2em)

@media screen and (min-width: 500px)
  .card
    width: 100%

</style>