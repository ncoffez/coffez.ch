<template>
	<section>
		<div class="grid">
			<div>
				<h1>
					{{ $t('header.title.text') }} <span class="colored-text">{{ $t('header.title.special') }}</span>
				</h1>
				<p>{{ $t('header.subtitle') }}</p>
				<button @click="scrollTo('contact')">{{ $t('header.button') }}</button>
			</div>
			<div class="img-box">
				<picture>
					<source srcset="/img/PascalCoffez.webp" type="image/webp" />
					<source srcset="/img/PascalCoffez.jpg" type="image/jpeg" />
					<img src="/img/PascalCoffez.jpg" alt="" />
				</picture>
			</div>
		</div>
		<Brands />
	</section>
</template>

<script setup>
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
h1
	font-size: 4em
	line-height: 1em
	margin-block: 1em .5em
	font-weight: 900
	letter-spacing: -1px

.img-box
	padding: 5em
	img
		aspect-ratio: 1
		border-radius: 40% 10%

@media (max-width: 991px)
	.img-box
		display: none

@media (max-width: 500px)
	h1
		margin-top: 1rem
		font-size: 2.7em

	section
		margin-top: 2em

span
	overflow: hidden
	white-space: nowrap

.colored-text
	background: -webkit-linear-gradient(45deg, #8e24aa, var(--primary))
	-webkit-background-clip: text
	-webkit-text-fill-color: transparent


@media (prefers-color-scheme: light)
	.colored-text
		background: -webkit-linear-gradient(45deg, #5e35b1, var(--primary))
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
</style>
