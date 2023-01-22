<template>
<section id="brands">
  <div class="logos">
    <div class="logo" v-for="logo of logos">
      <img :src="`/img/Logos/${logo}`" :alt="logo" srcset="">
    </div>
  </div>
  <div id="title">Diese Unternehmen vertrauen uns</div>
</section>
</template>

<script setup lang="ts">
const logos = [
  'itconcepts.png',
  'iwc.png',
  'manor.png',
  'matis.png',
  'ubs.png',
  'zkb.png',
];
</script>

<style lang="sass" scoped>

#brands
  width: 100%
  place-items: center
  place-content: center
  display: flex
  flex-direction: column
  padding: 2em 1em

.logos
  display: grid
  place-items: center
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))
  gap: 1em
  overflow: hidden

.logo
  place-items: center
  place-content: center
  overflow: hidden
  padding: 1em

#title
  margin-top: .5em
  font-weight: 300
  font-size: 1.3em
  width: fit-content
  color: var(--text-muted)

img
  width: min(100%, 200px)
  filter: opacity(60%)

@media (prefers-color-scheme: dark)
  img
    filter: invert(70%)

  #title
    order: 1
    margin-block: 0 1.5em

  .logos
    order: 2

</style>