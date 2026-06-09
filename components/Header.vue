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
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
			<p class="text-white text-sm tracking-widest uppercase opacity-70">Coffez · 3 min · Montreux</p>
			<button @click="scrollTo('contact')" class="text-white opacity-60 text-2xl animate-bounce">↓</button>
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style scoped></style>
