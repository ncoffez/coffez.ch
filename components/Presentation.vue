<template>
	<section class="w-full max-w-screen-md mx-auto px-6 py-20 text-center">
		<h2 class="text-3xl md:text-4xl font-bold mb-8 dark:text-slate-100 text-stone-900">
			{{ $t('presentation.title') }}
		</h2>
		<div class="space-y-4 text-lg leading-relaxed dark:text-slate-300 text-stone-700">
			<p>{{ $t('presentation.p1') }}</p>
			<p>{{ $t('presentation.p2') }}</p>
			<p>{{ $t('presentation.p3') }}</p>
			<p>{{ $t('presentation.p4') }}</p>
			<p>{{ $t('presentation.p5') }}</p>
		</div>
		<p class="mt-8 text-sm tracking-widest uppercase text-stone-500 dark:text-slate-400">
			{{ $t('presentation.tagline') }}
		</p>
		<button
			@click="scrollTo('contact')"
			class="mt-8 px-8 py-3 rounded-full bg-rose-600 text-white text-sm tracking-widest uppercase hover:bg-rose-700 transition-colors duration-200">
			{{ $t('presentation.cta') }}
		</button>
	</section>
</template>

<script setup>
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style scoped></style>
