<template>
  <section class="">
    <div class="grid px-6 sm:mt-8 md:mb-6 md:px-8 lg:px-40 items-center">
      <div class="px-2 md:px-0 mx-auto">
        <h1 class="text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl mb-6">
          {{ $t("header.title.text") }}
          <span
            class="bg-gradient-to-r from-primary-400 via-secondary-400 to-quaternary-400 bg-clip-text text-transparent px-1"
            >{{ $t("header.title.special") }}</span
          >
        </h1>
        <p class="leading-relaxed max-w-(--breakpoint-md) px-2 text-lg/7 font-normal text-gray-600 max-sm:px-4 dark:text-gray-400">{{ $t("header.subtitle") }}</p>
        <button @click="scrollTo('contact')">{{ $t("header.button") }}</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style scoped></style>
