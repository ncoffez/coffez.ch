<template>
	<section class="relative w-full h-screen overflow-hidden">
		<video
			ref="video"
			autoplay
			muted
			playsinline
			:src="sources[current]"
			@ended="next"
			class="absolute inset-0 w-full h-full object-cover"
		></video>
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2">
			<p class="text-white text-sm tracking-widest uppercase opacity-70">Coffez · 3 min · Montreux</p>
			<button @click="scrollTo('contact')" class="text-white opacity-60 text-2xl animate-bounce">↓</button>
		</div>
	</section>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { scrollTo } from "~~/methods/scrollTo";

const sources = [
	"/hero_1.mp4",
	"/hero_2.mp4",
	"/hero_3.mp4",
	"/hero_4.mp4",
];
const current = ref(0);
const video = ref(null);

async function next() {
	current.value = (current.value + 1) % sources.length;
	await nextTick();
	const v = video.value;
	if (v) {
		v.load();
		v.play().catch(() => {});
	}
}
</script>

<style scoped></style>
