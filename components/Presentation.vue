<template>
	<section class="w-full max-w-screen-xl mx-auto px-7 py-24 md:py-28 text-center text-white">
		<div class="pres-rule"></div>
		<h2 class="pres-name">Pascal Coffez</h2>
		<p class="pres-tagline">Joy. Connection. <em>Memorable moments.</em></p>
		<p class="pres-trust">Trusted by leading international brands for premium live experiences.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center mt-14">
			<NuxtLink to="/business-events" class="pres-btn">Business Events</NuxtLink>
			<NuxtLink to="/private-events" class="pres-btn">Private Events</NuxtLink>
		</div>
	</section>
</template>

<script setup>
useHead({
	link: [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap",
		},
	],
});
</script>

<style scoped>
.pres-rule {
	width: 64px;
	height: 1px;
	margin: 0 auto 56px;
	background: #c9a44c;
}
.pres-name {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(40px, 7.5vw, 84px);
	font-weight: 400;
	line-height: 1.05;
	color: #fff;
}
.pres-tagline {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(26px, 4.6vw, 50px);
	font-weight: 400;
	line-height: 1.18;
	margin-top: 18px;
	color: #fff;
}
.pres-tagline em {
	font-style: italic;
	color: #c9a44c;
}
.pres-trust {
	font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
	font-size: clamp(18px, 2.4vw, 24px);
	font-weight: 400;
	line-height: 1.5;
	margin: 26px auto 0;
	color: rgba(255, 255, 255, 0.7);
	max-width: 720px;
}
.pres-btn {
	display: inline-block;
	background: #FFD60A;
	color: #000;
	font-size: 13px;
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	padding: 16px 36px;
	border-radius: 9999px;
	transition: background 0.2s ease;
}
.pres-btn:hover {
	background: #FFE04D;
}
</style>
