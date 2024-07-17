<template>
	<section class="max-w-screen-2xl">
		<div class="grid px-12 md:grid-cols-2 sm:my-16 md:mb-12 md:px-8 lg:px-40 xl:px-64 items-center">
			<div class="px-2 md:px-0 mx-auto">
				<h1 class="text-5xl font-black pb-6">
					{{ $t('header.title.text') }} <span
						class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">{{
							$t('header.title.special') }}</span>
				</h1>
				<p class="text-lg max-w-prose">{{ $t('header.subtitle') }}</p>
				<button class="" @click="scrollTo('contact')">{{ $t('header.button') }}</button>
			</div>
			<img src="/img/PascalCoffez.jpg" alt=""
				class="rounded-full aspect-square object-cover w-[300px] h-[300px] hidden md:block mx-auto" />
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
</style>
