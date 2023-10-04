<template>
	<header id="desktop-top-nav">
		<nav class="container">
			<div id="logo">Coffez.ch</div>
			<ul id="menu">
				<li @click="scrollTo('header')">{{ $t('navigation.home') }}</li>
				<li @click="scrollTo('cards')">{{ $t('navigation.about') }}</li>
				<li @click="scrollTo('portfolio')">{{ $t('navigation.portfolio') }}</li>
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
	grid-template-columns: 1fr 2fr 1fr

#logo
	font-size: 1.5em
	font-weight: 700
	display: grid
	place-items: center start

#menu
	justify-self: center
	gap: 1em

	li
		padding: .5em 1em
		border-radius: .5em
		cursor: pointer

	li:hover
		// background-color: var(--muted-color)
		transition: all .25s ease-in
		color: var(--primary-hover)

@media (max-width: 767px)
	#menu, #contact-link
		display: none
</style>
