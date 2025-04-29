<template>
  <div
    class="w-96 items-center rounded-md pe-4 dark:bg-zinc-900 border-solid border-2 border-zinc-700 max-w-screen-sm mx-auto">
    <select
      class="bg-inherit ps-6 py-4 w-full text-center focus:outline-none leading-tight"
      name="select"
      aria-label="Select language"
      required
      v-model="selectedLanguage"
      @change="setLocale(selectedLanguage)">
      <option class="text-center" v-for="language in locales" :value="language.code">{{ language.name }}</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const { setLocale, locales, locale } = useI18n();
const selectedLanguage = ref(locale.value);
</script>

<style scoped>
select {
  -webkit-appearance: none; /* Remove Safari's default styling */
  -moz-appearance: none; /* Remove Firefox's default styling */
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'><path d='M8 12l-4-4h8l-4 4z'/></svg>")
    no-repeat right 1rem center; /* Custom dropdown arrow */
}

select option {
  text-align: center;
}

select:focus {
  outline: none;
}
</style>
