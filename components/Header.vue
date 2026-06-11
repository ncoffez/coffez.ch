<template>
	<section class="relative w-full h-screen overflow-hidden">
		<video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
			<source
				src="https://firebasestorage.googleapis.com/v0/b/coffez-ch.appspot.com/o/videos%2Fhero_video_2.mp4?alt=media&token=7b8a77d4-1bb0-4b53-a588-69158f337e94"
				type="video/mp4" />
			<source
				src="https://firebasestorage.googleapis.com/v0/b/coffez-ch.appspot.com/o/videos%2Fhero_video_1.webm?alt=media&token=e1a6f4b1-4e69-4516-a053-4e9fcea82c38"
				type="video/webm" />
		</video>
		<div class="absolute inset-0 bg-black/25"></div>
		<div class="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-3 px-6 text-center">
			<h1 class="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
				{{ $t("header.title.text") }} <span class="font-light">{{ $t("header.title.special") }}</span>
			</h1>
			<p class="text-white/90 text-base md:text-xl drop-shadow">{{ $t("header.subtitle") }}</p>
			<button
				@click="scrollTo('contact')"
				class="mt-3 px-10 py-3 bg-white text-stone-900 font-semibold rounded-full text-base md:text-lg shadow-lg hover:scale-105 transition-transform duration-200">
				{{ $t("header.button") }}
			</button>
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style scoped></style>
