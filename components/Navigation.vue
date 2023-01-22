<template>
<header id="navigation">

  <div class="desktop">
    <div class="logo">Coffez.ch</div>
    <ul>
      <li @click="scrollTo('header')">Home</li>
      <li @click="scrollTo('cards')">Über uns</li>
      <li @click="scrollTo('portfolio')">Portfolio</li>
    </ul>
    <button @click="scrollTo('contact')">Kontakt</button>
  </div>

  <div class="mobile">
    <span id="icon" class="material-symbols-outlined">menu</span>
  </div>

</header>
</template>

<script setup lang="ts">
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
#navigation
  position: sticky
  top: 0px
  z-index: 1

ul
  display: flex
  flex-direction: row
  gap: 3em
  padding: unset
  place-content: center
  width: 100%

li 
  text-decoration: none
  list-style: none

.desktop
  width: 100%
  display: flex
  place-items: center
  gap: 2em
  height: 4em
  background: var(--background)
  filter: opacity(95%)

.logo
  font-weight: 700
  font-size: 1.2em
  width: fit-content
  padding: .5em 1em

button
  margin-left: auto

li, button
  cursor: pointer

@media screen and (min-width: 701px) //desktop
  .mobile
    display: none
@media screen and (max-width: 700px) //smartphone
  .desktop
    display: none

  #icon
    padding: .4em
    margin: .4em
    position: absolute
    right: 0
    font-size: 2em
    background-color: var(--background)
    border-radius: 1em
    cursor: pointer



</style>