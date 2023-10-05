<template>
	<section>
		<div class="grid">
			<div>
				<h1>
					{{ $t('header.title.text') }} <span class="colored-text" v-for="letter of $t('header.title.special')">{{ letter }}</span>
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

span
	$delay: .08s
	$base-delay: .4s
	&:nth-of-type(1)
		animation: display  0 * $delay + $base-delay step-end forwards
	&:nth-of-type(2)
		animation: display  1 * $delay + $base-delay step-end forwards
	&:nth-of-type(3)
		animation: display  2 * $delay + $base-delay step-end forwards
	&:nth-of-type(4)
		animation: display  3 * $delay + $base-delay step-end forwards
	&:nth-of-type(5)
		animation: display 4 * $delay + $base-delay step-end forwards
	&:nth-of-type(6)
		animation: display  5 * $delay + $base-delay step-end forwards
	&:nth-of-type(7)
		animation: display  6 * $delay + $base-delay step-end forwards
	&:nth-of-type(8)
		animation: display  7 * $delay + $base-delay step-end forwards
	&:nth-of-type(9)
		animation: display  8 * $delay + $base-delay step-end forwards
	&:nth-of-type(10)
		animation: display  9 * $delay + $base-delay step-end forwards
	&:nth-of-type(11)
		animation: display  10 * $delay + $base-delay step-end forwards

@keyframes display
	0%
		opacity: 0
	100%
		opacity: 1


@media (prefers-color-scheme: light)
	.colored-text
		background: -webkit-linear-gradient(45deg, #5e35b1, var(--primary))
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
</style>
