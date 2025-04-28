<template>
  <div class="px-4 md:px-12 overscroll-x-none overflow-x-hidden" ref="container">
    <div class="flex">
      <img class="mx-auto w-64 m-4 dark:invert px-4 py-2" src="/img/Coffez.ch.png" alt="Coffez.ch" />
      <div class="flex h-fit gap-2 text-2xs *:py-1 *:px-2">
        <button @click="setColorScheme('system')">system</button>
        <button @click="setColorScheme('light')">light</button>
        <button @click="setColorScheme('dark')">dark</button>
        <button @click="setColorScheme('colorful')">colorful</button>
        <button @click="setColorScheme(null)">unset</button>
      </div>
    </div>
    <main class="py-4 gap-24 flex flex-col items-center">
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { useParentElement } from "@vueuse/core";
const { $colorScheme } = useNuxtApp();

provide("container", useParentElement());
const setColorScheme = (color) => {
  $colorScheme.setTheme(color);
};
</script>
<style scoped></style>
