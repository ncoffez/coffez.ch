<template>
	<header id="desktop-top-nav">
		<nav class="container">
			<div id="logo">Coffez.ch</div>
			<ul id="menu">
				<li @click="scrollTo('cards')">{{ $t('navigation.about') }}</li>
				<!-- <li @click="scrollTo('portfolio')">{{ $t('navigation.portfolio') }}</li> -->
				<li><a href="/live">{{ $t('navigation.portfolio') }}</a></li>
				<li @click="scrollTo('contact')">{{ $t('navigation.contact') }}</li>
			</ul>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
header
	margin-top: 1em

nav
	display: grid
	grid-template-columns: 2fr 4fr 1fr
	gap: 2em

#logo
	font-size: 1.5em
	font-weight: 700
	display: grid
	place-items: center start

#menu
	justify-self: center
	gap: 1em

	li
		padding: .5em .8em
		border-radius: .5em
		cursor: pointer
		white-space: nowrap

	li:hover
		// background-color: var(--muted-color)
		transition: all .25s ease-in
		color: var(--primary-hover)

@media (max-width: 900px)
	#menu
		gap: 0em

@media (max-width: 720px)
	#menu
		display: none


@media (min-width: 1200px)
	nav
		grid-template-columns: 1fr 2fr 1fr
</style>
