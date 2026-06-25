<template>
	<span class="mf" aria-label="Montreux Faces">MONTREUX FACES</span>
</template>

<script setup>
useHead({
	link: [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
		{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Anton&display=swap" },
	],
});
</script>

<style scoped>
.mf {
	font-family: "Anton", "Helvetica Neue", Arial, sans-serif;
	font-weight: 400;
	font-size: 40px;
	letter-spacing: -0.005em;
	line-height: 0.95;
	color: #fff;
	white-space: nowrap;
}
</style>
