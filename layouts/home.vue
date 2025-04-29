<template>
  <div class="px-4 md:px-12 overscroll-x-none overflow-x-hidden" ref="container">
    <div class="flex">
      <img class="mx-auto my-auto w-64 h-20 m-4 dark:invert px-4 py-2" src="/img/Coffez.ch.png" alt="Coffez.ch" />
      <div class="flex flex-col md:flex-row h-fit gap-x-2 gap-y-1 text-2xs *:m-0 my-auto">
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

const route = useRoute();
onMounted(async () => await applyButtonClasses());
const applyButtonClasses = async () => {
  await nextTick();
  document.querySelectorAll("button").forEach((button, index) => {
    const classIndex = (index % 4) + 1;
    button.classList.add(`button-${classIndex}`);
  });
};

// Watch route changes (initial load and navigation)
watch(() => route.path, applyButtonClasses, { immediate: true });
</script>
<style scoped></style>
