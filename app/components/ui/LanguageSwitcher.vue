<template>
  <div class="h-fit w-fit my-auto p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600/30 relative">
    <IconsLucideGlobe class="text-xl" @click="hidden = !hidden" />
    <div
      v-if="!hidden"
      class="absolute z-10 top-10 left-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 rounded-md shadow-lg">
      <div
        v-for="language in locales"
        :key="language.code"
        class="px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer text-center"
        @click="
          setLocale(language.code);
          hidden = true;
        ">
        {{ language.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale, locales } = useI18n();
const hidden = ref(true);
</script>
