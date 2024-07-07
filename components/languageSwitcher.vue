<template>
	<div
		class="w-full items-center rounded-md pe-4 bg-zinc-900 border-solid border-2 border-zinc-800 max-w-screen-sm mx-auto">
		<select class="bg-inherit ps-6 py-4 w-full text-center focus:outline-none leading-tight"name="select" aria-label="Select language" required v-model="selectedLanguage"
			@change="setLocale(selectedLanguage)">
			<option v-for="language in locales" :value="language.code">{{ language.name }}</option>
		</select>
	</div>
</template>

<script lang="ts" setup>
const { setLocale, locales, locale } = useI18n();
const selectedLanguage = ref(locale.value);
</script>

<style lang="sass" scoped>

</style>