<template>
	<div
		class="w-fit flex flex-col lg:grid lg:grid-cols-[auto,1fr] gap-x-12 gap-y-6 p-8 max-w-screen-lg mx-auto"
		v-if="image">
		<div id="text">
			<div
				id="toGallery"
				class="grid grid-cols-[auto,1fr] items-center w-fit text-zinc-500 mb-4 hover:text-zinc-300 cursor-pointer transition-colors duration-200"
				@click="router.replace(!event ? '/live' : `/live/${event.id}`)">
				<Icon name="ic:round-chevron-left" class="w-8 h-8" />
				<div>Back to gallery</div>
			</div>
			<hgroup>
				<h1 class="text-3xl font-bold lg:max-w-96">{{ event?.title || image.originalName }}</h1>
				<p class="text-lg leading-loose text-zinc-500 gap-3 flex items-center">
					{{ toLocaleDateTime(image.createdDate) }}
				</p>
				<div class="inline-block text-base font-light px-2 py-1 bg-zinc-700 text-zinc-300 rounded-xl my-2">
					{{ image.size }}
				</div>
			</hgroup>
		</div>
		<div id="image" class="max-w-[500px]">
			<img v-if="image.urlFirebaseOriginalWithQR" :src="image.urlFirebaseOriginalWithQR" alt="" srcset="" />
			<img v-else :src="image.urlFirebaseReduced" alt="" srcset="" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { Timestamp } from "firebase/firestore";
const route = useRoute();
const router = useRouter();
const baseURL = useRequestURL();
const currentURL = `${baseURL}${route.fullPath}`;
const { $analytics } = useNuxtApp();

onMounted(() => {
	$analytics("User viewed his picture.");
});

const { data: image } = await useFetch(`/api/getPortrait/${route.params.id}`, {
	transform: (data: any) => {
		return {
			...data,
			createdDate: new Timestamp(data.createdDate._seconds, data.createdDate._nanoseconds).toDate(),
		};
	},
});

const { data: event } = await useLazyFetch<any>("/api/getEvent", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: { date: new Date(image.value.createdDate).toISOString() },
});

function toLocaleDateTime(date: Date | null) {
	if (!date) return "Date is not valid.";
	return date.toLocaleDateString("de-CH", {
		weekday: "long",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
}

let meta = {
	title: event.value?.title,
	description: event.value?.description,
	coverImage: image.value?.urlFirebaseJpg,
	defaultImage: `https://storage.googleapis.com/coffez-ch/analoge_zeichnung.jpeg`,
	url: currentURL,
};

useSeoMeta({
	description: meta.description,
	ogTitle: meta.title,
	ogDescription: meta.description,
	ogImage: meta.coverImage || meta.defaultImage,
	ogUrl: currentURL,
	twitterTitle: meta.title,
	twitterDescription: meta.description,
	twitterImage: meta.coverImage || meta.defaultImage,
	twitterCard: "summary",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.png",
		},
	],
	title: meta.title,
});
</script>

<style scoped></style>
