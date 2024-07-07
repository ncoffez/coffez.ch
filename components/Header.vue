<template>
	<section>
		<div>
			<div class="px-2 md:px-0">
				<h1 class="text-5xl font-black pb-6">
					{{ $t('header.title.text') }} <span
						class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">{{
							$t('header.title.special') }}</span>
				</h1>
				<p class="text-base max-w-prose ">{{ $t('header.subtitle') }}</p>
				<button class="" @click="scrollTo('contact')">{{ $t('header.button') }}</button>
			</div>
			<div class="hidden md:block">
				<picture>
					<source srcset="/img/PascalCoffez.webp" type="image/webp" />
					<source srcset="/img/PascalCoffez.jpg" type="image/jpeg" />
					<img src="/img/PascalCoffez.jpg" alt="" />
				</picture>
			</div>
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from '~~/methods/scrollTo';
</script>
