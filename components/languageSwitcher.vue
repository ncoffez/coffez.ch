<script setup>
const { setLocale, locales, locale, localeProperties } = useI18n();

let selectedLanguage = ref(locale);

watch(selectedLanguage, (newLang) => {
  setLocale(newLang);
})
</script>

<template>
<div class="picker">
  <div class="flag-container" v-for="language in locales">
    <img :class="language.code === locale ? 'active' : 'inactive'" class="language-flag"
      @click="selectedLanguage = language.code" :src="language.flag" alt="language.name" />
  </div>
</div>
</template>

<style lang="sass" scoped>
pre
  overflow-y: auto
  overflow-x: scroll
  max-height: 400px
  width: 100%

select
  all: unset
  width: fit-content


img
  width: 30px
  height: 30px
.picker
  display: flex
  place-items: center
  width: 100%
  gap: .6em

.language-flag
  &.active
    width: 35px
    height: 35px
    transition: all .3s ease-out
    filter: saturate(120%)
    border: 2px solid white
    border-radius: 100%
  
  &.inactive
    filter: saturate(30%)
    width: 25px
    height: 25px
    transition: all .2s ease-out

.flag-container
  display: grid
  place-items: center
  width: 35px
  height: 35px
</style>
