<template>
	<details role="list" ref="listbox">
		<summary aria-haspopup="listbox">
			{{ localeProperties.name }}
		</summary>
		<ul role="listbox">
			<li v-for="language in (locales as LocaleObject[])">
				<a @click="selectedLanguage = language.code">{{ language.name }}</a>
			</li>
		</ul>
	</details>
</template>
<script lang="ts" setup>
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';
const { setLocale, locales, locale, localeProperties } = useI18n();
const listbox: Ref<any> = ref('');

let selectedLanguage = ref(locale);
watch(selectedLanguage, (newLang: string) => {
	setLocale(newLang);
	listbox.value.open = null;
});
</script>
<style lang="sass" scoped></style>
