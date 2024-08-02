<template>
	<section id="cards" class="gap-16 grid w-full sm:px-12 md:px-0 lg:px-12 xl:max-w-screen-xl xl:gap-28"> 
		<article v-for="(card, index) in ($tm('sections') as any)" :key="card.id" class="grid gap-2 md:gap-8"
			:class="index % 2 === 0 ? 'md:grid-cols-[3fr,2fr] xl:grid-cols-[5fr,3fr]' : 'md:grid-cols-[2fr,3fr] xl:grid-cols-[3fr,5fr]'">
			<div id="image" :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'">
				<video class="block w-full" v-if="card?.media?.type === 'video'" autoplay="true" muted="true" loop="true"
					playsinline="true">
					<source :src="card.media?.modern" type="video/webm" />
					<source :src="card.media?.legacy" type="video/mp4" />
				</video>
				<picture v-else>
					<source :srcset="card.media?.modern" type="image/webp" />
					<source :srcset="card.media?.legacy" type="image/jpeg" />
					<img :src="card.media?.legacy" :alt="card.header" />
				</picture>
			</div>
			<div id="text" :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
				<h1 class="text-3xl font-bold my-4 text-slate-100">{{ card.header }}</h1>
				<p class="text-slate-400 text-md pb-2 max-w-prose md:text-lg leading-relaxed">{{ card.lead }}</p>
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
picture, img, video
	@apply aspect-square object-cover rounded-xl md:rounded-3xl xl:aspect-[1.5] w-full
	</style>