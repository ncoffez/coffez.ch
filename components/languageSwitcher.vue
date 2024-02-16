<template>
<select name="select" aria-label="Select language" required v-model="selectedLanguage"
	@change="setLocale(selectedLanguage)">
	<option v-for="language in locales" :value="language.code">{{ language.name }}</option>
</select>
</template>
	
<script lang="ts" setup>
const { setLocale, locales, locale } = useI18n();
const selectedLanguage = ref(locale.value);
</script>