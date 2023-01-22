<template>
<section id="brands">
  <div class="grid">
    <div class="logo" v-for="logo of logos">
      <img :src="`/img/Logos/${logo}`" :alt="logo" srcset="">
    </div>
  </div>
  <footer>* Diese Unternehmen vertrauen uns</footer>
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
section
  margin-block: 6em 3em

.logo
  filter: invert(.5)
  padding-inline: .8em

img
  border-radius: 0

footer
  text-align: end
  padding-block: 1em
  font-size: .8em
  font-style: italic
  filter: opacity(50%)

@media (max-width: 991px)   
  .grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 2em

</style>