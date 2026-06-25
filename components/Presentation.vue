<template>
	<section class="w-full text-white py-24 md:py-32 px-6">
		<div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
			<!-- Photo -->
			<div class="w-full md:sticky md:top-28">
				<img
					src="/img/coffez-cover.jpg"
					alt="Coffez — Live Portrait Performer"
					class="w-full aspect-[4/5] object-cover rounded-2xl md:rounded-3xl" />
			</div>
			<!-- Texte -->
			<div class="text-left">
				<h2 class="pres-title mb-8">{{ $t('presentation.title') }}</h2>
				<p class="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
					{{ $t('presentation.intro') }}
				</p>
				<p class="whitespace-pre-line text-base md:text-lg text-white/80 leading-loose mb-8">
					{{ $t('presentation.sequence') }}
				</p>
				<p class="whitespace-pre-line text-base md:text-lg text-white/90 leading-relaxed mb-8">
					{{ $t('presentation.service') }}
				</p>
				<p class="text-base md:text-lg text-white/90 leading-relaxed mb-8">
					{{ $t('presentation.takeaway') }}
				</p>
				<p class="whitespace-pre-line border-l-2 border-white/40 pl-4 text-base md:text-lg text-white/90 leading-relaxed mb-8">
					{{ $t('presentation.proof') }}
				</p>
				<p class="text-sm tracking-wide text-white/60 mb-10">
					{{ $t('presentation.trust') }}
				</p>
				<p class="pres-kicker whitespace-pre-line mb-10">
					{{ $t('presentation.kicker') }}
				</p>
				<button
					@click="scrollTo('contact')"
					class="px-8 py-3 rounded-full bg-white text-black text-sm tracking-widest uppercase hover:bg-white/80 transition-colors duration-200">
					{{ $t('presentation.cta') }}
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { scrollTo } from "~~/methods/scrollTo";
</script>

<style scoped>
.pres-title {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(32px, 4.5vw, 56px);
	line-height: 1.05;
	letter-spacing: 0.01em;
}
.pres-kicker {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-style: italic;
	font-size: clamp(20px, 2.6vw, 30px);
	line-height: 1.35;
	color: rgba(255, 255, 255, 0.95);
}
</style>
