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
		<a
			href="https://coffez.ch/live/Tx1pN24ALqarPZDFMrt7"
			class="absolute top-5 left-1/2 -translate-x-1/2 z-10 inline-flex px-3 py-1.5 rounded-lg bg-black/35 backdrop-blur-sm border border-white/30 hover:bg-white/10 transition-colors duration-200 leading-none">
			<MontreuxFacesLogo style="font-size: 30px" />
		</a>
		<div class="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-6 px-6 text-center">
			<div class="flex flex-col items-center gap-3">
				<span class="text-white/85 text-[11px] md:text-xs tracking-[0.3em] uppercase">Live Portrait Performance</span>
				<p class="hero-line text-white">Every guest becomes the star of a three-minute show.</p>
			</div>
			<button
				@click="scrollTo('contact')"
				class="px-8 py-3 rounded-full border border-white/80 text-white text-sm tracking-widest uppercase bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-200">
				Contact
			</button>
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

<style scoped>
.hero-line {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(28px, 6vw, 56px);
	line-height: 1.1;
	text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
}
</style>
