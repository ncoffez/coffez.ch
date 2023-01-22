<template>
<section id="header">
  <div class="heading">
    <h1 class="title">Dein Anlass wird zur <span class="colored-text">Party</span></h1>
    <p class="subheader">Buche mit Coffez.ch eine einzigartige Dienstleistung und versichere dass deine Veranstaltung zum Erfolg wird.
      <br>Mit seinen Karikaturen bringt <strong>Pascal Coffez</strong> deine Gäste aus ihrer Komfortzone und sichert eine angenehme und lockere Athmosphäre in
      jeder
      Situation.
    </p>
    <button @click="scrollTo('contact')">Uns kontaktieren</button>
  </div>
  <div class="pascal-coffez"><img src="/img/PascalCoffez2.jpg" alt="" srcset=""></div>
  <!-- <div class="images">Images</div> -->
  <Brands class="brands" />
</section>
</template>

<script setup>
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
#header
  width: 100%
  padding: 6em 0 0 0
  display: grid
  gap: 1em
  grid-template-columns: 1fr 1fr
  grid-template-areas:  "heading artist" "brands brands"

.heading
  width: 100%
  padding: 1em
  gap: 2em
  display: flex
  flex-direction: column
  grid-area: heading

  h1, p, button
    margin: 0

.pascal-coffez
  grid-area: artist
  overflow: hidden
  padding-left: 3em

  img
    width: 100%
    aspect-ratio: 1
    filter: grayscale(50%) brightness(60%) opacity(80%)
    border-radius: 17em .5em 13em 3.5em


.images
  grid-area: images

.brands
  grid-area: brands

.title
  font-size: 4.2em
  line-height: 1.2em

.subheader
  font-weight: 300
  line-height: 1.7em
  font-size: 1.2em

.colored-text
  background: -webkit-linear-gradient(0deg, var(--secondary), var(--tertiary))
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

@media screen and (max-width: 700px) //smartphone
  .pascal-coffez
    display: none

  #header
    display: flex
    flex-direction: column
    padding-top: 2em
  
  .heading
    height: calc(100vh - 4em)
    place-items: center
    place-content: center
    gap: 4em
</style>