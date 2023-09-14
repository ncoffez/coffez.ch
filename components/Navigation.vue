<template>
  <header id="desktop-top-nav">
    <nav class="container">
      <div id="logo">Coffez.ch</div>
      <ul id="menu">
        <li @click="scrollTo('header')">{{$t('navigation.home')}}</li>
        <li @click="scrollTo('cards')">{{  $t('navigation.about') }}</li>
        <li @click="scrollTo('portfolio')">{{ $t('navigation.portfolio') }}</li>
      </ul>
      <ul>
        <li><button @click="scrollTo('contact')" id="contact-link" class="outline">{{$t('navigation.contact')}}</button></li>
        <li><LanguageSwitcher /></li>
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

@media (max-width: 500px)
  #menu, #contact-link
    display: none

#logo
  font-size: 1.3em
  font-weight: 700
  display: grid
  place-items: center

#menu > li
  cursor: pointer
</style>
