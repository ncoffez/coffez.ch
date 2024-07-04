<template>
  <section id="brands">
    <div class="grid">
      <div class="logo" v-for="logo of logos">
        <img :src="`/img/Logos/${logo}`" :alt="logo" srcset="">
      </div>
    </div>
    <footer aria-hidden="true">* {{$t('theseBrandsTrustUs')}}</footer>
  </section>
  </template>
  
  <script setup lang="ts">
  const logos = [
    'itconcepts.svg',
    'iwc.svg',
    'manor.svg',
    'matis.svg',
    'ubs.svg',
    'zkb.svg',
  ];
  </script>
  
  <style lang="sass" scoped>
  section
    margin-block: 4em 3em
  
  .logo
    filter: invert(.5)
    padding-inline: .8em
  
  img
    border-radius: 0
  
  footer
    text-align: end
    padding-top: 2em
    font-size: .8em
    font-style: italic
    filter: opacity(50%)
  
  @media (max-width: 991px)   
    .grid
      grid-template-columns: 1fr 1fr 1fr
      gap: 2em
  
  @media (max-width: 500px)
    section
      margin-top: 3em
  
    .grid
      grid-template-columns: 1fr 1fr
      gap: 2em 1em
  </style>