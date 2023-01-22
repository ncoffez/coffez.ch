<template>
<header>

  <nav class="container">
    <ul>
      <b>Coffez.ch</b>
    </ul>
    <ul>
      <li @click="scrollTo('header')">Home</li>
      <li @click="scrollTo('cards')">Über uns</li>
      <li @click="scrollTo('portfolio')">Portfolio</li>
    </ul>
    <ul>
      <li><button @click="scrollTo('contact')" id="contact-link" class="outline">Kontakt</button></li>
    </ul>
  </nav>
</header>
</template>

<script setup lang="ts">
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
button#contact-link
  border: none

</style>