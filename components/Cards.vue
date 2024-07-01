<template>
	<section id="cards">
		<article v-for="card in ($tm('sections') as any)" :key="card.id" class="grid">
			<div id="image">
				<video v-if="card?.media?.type === 'video'" autoplay="true" muted="true" loop="true" playsinline="true">
					<source :src="card.media?.modern" type="video/webm" />
					<source :src="card.media?.legacy" type="video/mp4" />
				</video>
				<NuxtPicture :src="card.media?.modern" :imgAttrs="{style: { aspectRatio: '1 / 1' }}" preset="cards" :alt="card.header" v-else />
			</div>
			<div id="text">
				<h1>{{ card.header }}</h1>
				<p>{{ card.lead }}</p>
				<button @click="handleAction(card.url)" v-if="card.action">{{ card.action }}</button>
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
import { scrollTo } from '~~/methods/scrollTo';

async function handleAction(action: string) {
	if (['/live'].includes(action)) { await navigateTo(action) }
	else { scrollTo('contact') }
}
</script>

<style lang="sass" scoped>
video
	aspect-ratio: 1

h1
	margin-block: .5em .8em

img, video, picture
	aspect-ratio: 1
	// height: clamp(200px, 100%, 100%)

article
	@media (min-width: 1200px)
		padding-inline: 7em
	@media (min-width: 992px)
		gap: 2em
		grid-template-columns: 4fr 3fr
		&:nth-of-type(2n)
			grid-template-columns: 3fr 4fr
			#image
				order: 2
	@media (max-width: 991px)
		padding-inline: .5em

@media (max-width: 991px)
	img, video
		max-height: 70vh
		
</style>
