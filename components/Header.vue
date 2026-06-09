<template>
	<section class="relative w-full h-screen overflow-hidden">
		<video
			autoplay
			muted
			loop
			playsinline
			class="absolute inset-0 w-full h-full object-cover"
		>
			<source src="https://firebasestorage.googleapis.com/v0/b/coffez-ch.appspot.com/o/videos%2Fhero_video_2.mp4?alt=media&token=7b8a77d4-1bb0-4b53-a588-69158f337e94" type="video/mp4" />
			<source src="https://firebasestorage.googleapis.com/v0/b/coffez-ch.appspot.com/o/videos%2Fhero_video_1.webm?alt=media&token=e1a6f4b1-4e69-4516-a053-4e9fcea82c38" type="video/webm" />
		</video>
		<div class="absolute inset-0 bg-black/40"></div>
		<div class="relative z-10 flex flex-col justify-end h-full pb-16 px-6 md:px-16 lg:px-40">
			<h1 class="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-4">
				{{ $t("header.title.text") }}
				<span class="text-primary-400">{{ $t("header.title.special") }}</span>
			</h1>
			<p class="text-lg text-white/80 max-w-2xl mb-8">
				{{ $t("header.subtitle") }}
			</p>
			<button
				@click="scrollTo('contact')"
				class="w-fit px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-primary-400 hover:text-white transition-all">
				{{ $t("header.button") }}
			</button>
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style scoped></style>
