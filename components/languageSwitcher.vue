<script setup>
const { setLocale, locales, locale } = useI18n();
let selectedLanguage = ref(locale);
watch(selectedLanguage, (newLang) => setLocale(newLang))
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
.picker
  display: flex
  place-items: center
  gap: .4em

.language-flag
  &.active
    width: 35px
    height: 35px
    transition: all .3s ease-out
    border: 2px solid var(--contrast)
    border-radius: 100%
  
  &.inactive
    filter: saturate(70%)
    width: 25px
    height: 25px
    transition: all .2s ease-out

.flag-container
  display: grid
  place-items: center
  width: 35px
  height: 35px
</style>
