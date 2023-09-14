<template>
<header id="desktop-top-nav">
  <nav class="container">
    <div id="logo">Coffez.ch</div>
    <ul id="menu">
      <li @click="scrollTo('header')">{{ $t('navigation.home') }}</li>
      <li @click="scrollTo('cards')">{{ $t('navigation.about') }}</li>
      <li @click="scrollTo('portfolio')">{{ $t('navigation.portfolio') }}</li>
      <li @click="scrollTo('contact')">{{ $t('navigation.contact') }}</li>
    </ul>
    <ul>
      <li>
        <LanguageSwitcher />
      </li>
    </ul>
  </nav>
</header>
</template>

<script setup lang="ts">
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style lang="sass" scoped>
button#contact-link
  border: none

@media (max-width: 767px)
  #menu, #contact-link
    display: none

#logo
  font-size: 1.5em
  font-weight: 700
  display: grid
  place-items: center start

#menu > li
  cursor: pointer
</style>
