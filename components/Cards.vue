<template>
	<section id="cards" class="gap-16 grid w-full">
		<article v-for="card in ($tm('sections') as any)" :key="card.id" class="grid ">
			<div id="image">
				<video class="block w-full aspect-square object-cover rounded-xl md:rounded-3xl" v-if="card?.media?.type === 'video'"
					autoplay="true" muted="true" loop="true" playsinline="true">
					<source :src="card.media?.modern" type="video/webm" />
					<source :src="card.media?.legacy" type="video/mp4" />
				</video>
				<picture v-else class="aspect-square object-cover rounded-xl md:rounded-3xl">
					<source :srcset="card.media?.modern" type="image/webp" />
					<source :srcset="card.media?.legacy" type="image/jpeg" />
					<img :src="card.media?.legacy" :alt="card.header"
						class="aspect-square object-cover rounded-xl md:rounded-3xl" />
				</picture>
			</div>
			<div id="text">
				<h1 class="text-3xl font-bold my-4 text-slate-100">{{ card.header }}</h1>
				<p class="text-slate-400 text-md leading-snug pb-2">{{ card.lead }}</p>
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
	article
		@media (min-width: 1200px)
			padding-inline: 7em

		@media (min-width: 800px)
			gap: 2em
			grid-template-columns: 4fr 3fr
			&:nth-of-type(2n)
				grid-template-columns: 3fr 4fr
				#image
					order: 2
			
	</style>