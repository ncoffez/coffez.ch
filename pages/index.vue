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
  <Footer class="mb-16" />
</template>

<script setup>
definePageMeta({ layout: "home" });
</script>
