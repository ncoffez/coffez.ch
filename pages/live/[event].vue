<template>
	<div class="bg-stone-50 dark:bg-stone-900">
		<div id="gallery" class="md:overflow-y-clip sm:h-vh px-8" v-if="images?.length > 0">
			<div class="grid grid-cols-[1fr,auto]">
				<section id="title" class="w-full p-4 sticky top-0 z-2 stretch-1">
					<h2 class="hidden md:block text-4xl font-extrabold" id="url-title">
						<NuxtLink
							class="dark:text-primary-600 text-primary-800 hover:text-primary-900 dark:hover:text-primary-700 pe-1 leading-normal"
							to="/"
							>coffez.ch</NuxtLink
						>/live
					</h2>
					<div
						id="subtitle"
						class="md:leading-tight tracking-tight gap-4 inline-flex items-center font-semibold text-3xl md:font-light md:text-xl">
						<IconsHome @click="router.push('/')" class="md:hidden hover:scale-105 cursor-pointer duration-200" />
						<h4 @click="">{{ settings?.title }}</h4>
					</div>
				</section>
				<div class="grid items-center">
					<UiDownloadAllImages :images="filteredImages" :title="settings?.title" v-if="route.query.download">
						<IconsDownload class="text-lg" />
					</UiDownloadAllImages>
				</div>
			</div>
			<section
				id="images"
				class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-6"
				ref="container">
				<div
					:key="image.id"
					:class="index === 0 ? 'sm:col-span-2 sm:row-span-2 h-full flex flex-col' : ''"
					v-for="(image, index) in filteredImages">
					<nuxtLink :to="'/sales/' + image.id">
						<img
							:alt="image.name"
							:src="image.index === 0 ? image.urlFirebaseOriginal : image.urlFirebaseWebp"
							class="object-cover rounded-lg w-full flex-grow shadow-md dark:shadow-none" />
					</nuxtLink>
					<p class="text-sm dark:text-slate-400 font-base text-center leading-relaxed pt-1">
						{{ toRelativeDate(image.createdDate.toDate()) }}
					</p>
				</div>
			</section>
		</div>

		<section id="placeholder" class="h-full justify-between flex flex-col" v-else>
			<div id="up-next" class="ml-auto block dark:bg-primary-600 text-white text-2xl font-light p-4">
				{{ settings?.title }}
			</div>
			<UiComingSoon class="place-self-center h-full my-auto" />
		</section>
	</div>
</template>
<script lang="ts" setup>
import { toRelativeDate } from "#imports";
import { addDays, subDays } from "date-fns";
import { collection, query, orderBy, where } from "firebase/firestore";

const { $db, $logEvent } = useNuxtApp();

onMounted(() => {
	$logEvent("Event page was visited.");
});

const { event } = useRoute().params;
const { data: settings } = await useFetch(`/api/getEvent/${event}`);
const route = useRoute();
const router = useRouter();

const q = query(
	collection($db, "portraits"),
	where("createdDate", ">=", new Date(settings.value?.startDate || subDays(new Date(), 1))),
	where("createdDate", "<=", new Date(settings.value?.endDate || addDays(new Date(), 5))),
	orderBy("createdDate", "desc"),
	orderBy("urlFirebaseWebp")
);
const images = useFirestore(q);
const filteredImages = computed(() => images?.value?.filter((image: any) => !image.hidden));

let meta = {
	title: settings.value?.title,
	description: settings.value?.description,
	coverImage: settings.value?.coverImage,
	defaultImage: `https://storage.googleapis.com/coffez-ch/analoge_zeichnung.jpeg`,
	url: `https://coffez.ch/live/${event}`,
	start: {
		date: new Date(settings.value?.startDate).toLocaleDateString(),
		valid: !isNaN(new Date(settings.value?.startDate).getTime()),
	},
	end: {
		date: new Date(settings.value?.endDate).toLocaleDateString(),
		valid: !isNaN(new Date(settings.value?.endDate).getTime()),
	},
};

if (meta.start.valid && meta.end.valid && !meta.description)
	meta.description += ` Gallery of caricatures drawn from ${meta.start.date} to ${meta.end.date}.`;
if (meta.start.valid && !meta.end.valid && !meta.description)
	meta.description += ` Join the live event that started on ${meta.start.date}.`;

useSeoMeta({
	description: meta.description,
	ogTitle: meta.title,
	ogDescription: meta.description,
	ogImage: meta.coverImage || meta.defaultImage,
	ogUrl: `https://coffez.ch/live/${event}`,
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
