<template>
	<section class="max-w-screen-2xl">
		<div class="grid px-12 md:grid-cols-2 sm:mt-8 md:mb-6 md:px-8 lg:px-40 xl:px-64 items-center">
			<div class="px-2 md:px-0 mx-auto">
				<h1 class="text-5xl font-black pb-6">
					{{ $t('header.title.text') }} <span
						class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">{{
							$t('header.title.special') }}</span>
				</h1>
				<p class="text-lg max-w-prose">{{ $t('header.subtitle') }}</p>
				<button class="" @click="scrollTo('contact')">{{ $t('header.button') }}</button>
			</div>
			<picture>
				<source srcset="/img/PascalCoffez@0.5x.webp" type="image/webp" />
				<img src="/img/PascalCoffez@0.5x.jpg" alt=""
					class="rounded-full aspect-square object-cover w-[300px] h-[300px] hidden md:block mx-auto" />
			</picture>
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style scoped>
</style>
