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
			class="absolute top-5 left-1/2 -translate-x-1/2 z-10 inline-flex px-4 py-2 rounded-lg bg-black/55 backdrop-blur-sm border border-white/25 hover:bg-black/70 transition-colors duration-200 leading-none">
			<MontreuxFacesLogo style="font-size: 32px" />
		</a>
		<div class="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-6 px-6 text-center">
			<p class="hero-statement">Let the Joy <em>Shine</em> In</p>
			<button
				@click="scrollTo('contact')"
				class="px-8 py-3 rounded-full bg-[#E9DC73] text-black text-sm tracking-widest uppercase hover:bg-[#F0E796] transition-colors duration-200">
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
.hero-statement {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(34px, 6.5vw, 68px);
	font-weight: 400;
	line-height: 1.12;
	color: #fff;
	text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
}
.hero-statement em {
	font-style: italic;
	color: #c9a44c;
}
</style>
