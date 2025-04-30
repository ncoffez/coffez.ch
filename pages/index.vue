<template>
  <Header></Header>
  <Brands />
  <LazyEvents />
  <!-- <LazyGallery /> -->
  <div id="parent" ref="cards">
    <LazyCards />
  </div>
  <!-- <LazyPortfolio /> -->
  <Contact />
</template>

<script setup>
definePageMeta({ layout: "home" });
</script>
