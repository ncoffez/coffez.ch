<script setup>
const { setLocale, locales, locale, messages } = useI18n();
const i18n = ref(useI18n());

let selectedLanguage = ref(locale);
watch(selectedLanguage, (newLang) => setLocale(newLang));
</script>

<template>
  <div class="center">
    <select name="language" id="language" v-model="selectedLanguage">
      <option :value="locale.code" v-for="locale in locales" :key="locale.code">{{ locale.name }}</option>
    </select>
  </div>
</template>

<style lang="sass" scoped>
pre
  overflow-y: auto
  overflow-x: scroll
  max-height: 400px
  width: 100%

select
  width: fit-content

.center
  display: grid
  place-items: center
  width: 100%
</style>
