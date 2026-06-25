<template>
	<span class="mf" aria-label="Montreux Faces mag.">
		<span class="mf-top">MONTREUX</span>
		<span class="mf-main">FACES</span>
		<span class="mf-mag">mag.</span>
	</span>
</template>

<script setup>
useHead({
	link: [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@500&family=Playfair+Display:ital,wght@1,600&display=swap",
		},
	],
});
</script>

<style scoped>
.mf {
	position: relative;
	display: inline-block;
	color: #fff;
	font-size: 56px;
	padding-top: 0.30em;
	padding-bottom: 0.14em;
	white-space: nowrap;
}
.mf-main {
	display: block;
	font-family: "Anton", "Helvetica Neue", Arial, sans-serif;
	font-weight: 400;
	font-size: 1em;
	line-height: 0.78;
	letter-spacing: -0.012em;
}
.mf-top {
	position: absolute;
	top: 0;
	left: 0.03em;
	font-family: "Oswald", "Helvetica Neue", Arial, sans-serif;
	font-weight: 500;
	font-size: 0.225em;
	letter-spacing: 0.17em;
	line-height: 1;
}
.mf-mag {
	position: absolute;
	right: 0.02em;
	bottom: 0;
	z-index: 2;
	color: #22d3ee;
	font-family: "Playfair Display", Georgia, serif;
	font-style: italic;
	font-weight: 600;
	font-size: 0.30em;
	line-height: 1;
}
</style>
