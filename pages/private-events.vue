<template>
	<section class="w-full max-w-screen-lg mx-auto px-7 py-24 md:py-32 text-center text-white min-h-[60vh]">
		<div class="pe-rule"></div>
		<h1 class="pe-title">Private Events</h1>
		<p class="pe-lead">Weddings, birthdays and private celebrations — turn your guests into the stars of the night.</p>
		<p class="pe-soon">Offre détaillée bientôt en ligne</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
			<a href="/#contact" class="pe-btn">Contact</a>
			<NuxtLink to="/" class="pe-ghost">← Accueil</NuxtLink>
		</div>
	</section>
</template>

<script setup>
useHead({
	link: [
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap" },
	],
});
definePageMeta({ layout: "home" });
</script>

<style scoped>
.pe-rule { width: 64px; height: 1px; margin: 0 auto 48px; background: #c9a44c; }
.pe-title {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(44px, 8vw, 92px);
	font-weight: 400;
	line-height: 1.02;
}
.pe-lead {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(20px, 3vw, 30px);
	font-weight: 400;
	margin: 22px auto 0;
	color: rgba(255, 255, 255, 0.85);
	max-width: 640px;
	line-height: 1.4;
}
.pe-soon { margin-top: 16px; color: rgba(255, 255, 255, 0.5); font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; }
.pe-btn {
	display: inline-block; background: #E9DC73; color: #000; padding: 15px 34px;
	border-radius: 9999px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500;
}
.pe-ghost {
	display: inline-block; border: 1px solid rgba(255, 255, 255, 0.35); color: #fff; padding: 15px 34px;
	border-radius: 9999px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase;
}
</style>
