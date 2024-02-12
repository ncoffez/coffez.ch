<template>
<details class="dropdown" ref="listbox">
	<summary>{{ localeProperties.name }}</summary>
	<ul>
		<li v-for="language in locales">
			<a @click="selectedLanguage = language.code">{{ language.name }}</a>
		</li>
	</ul>
</details>
</template>

<script lang="ts" setup>
const { setLocale, locales, locale, localeProperties } = useI18n();
const listbox: Ref<any> = ref('');

let selectedLanguage: Ref<any> = ref(locale);
watch(selectedLanguage, (newLang: any) => {
	setLocale(newLang);
	listbox.value.open = null;
});
</script>
<style lang="sass" scoped></style>
