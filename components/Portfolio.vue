<template>
	<section id="portfolio" class="w-full max-w-screen-xl" v-if="images">
		<div id="title" class="flex justify-between items-center pb-6">
			<h1 class="text-4xl text-slate-100 font-bold">Portfolio</h1>
			<IconsFullscreen @click="router.push('/')" class="w-10 h-10" />
		</div>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
			<div
				v-for="(image, index) of images"
				class="cursor-pointer w-full aspect-[1.5]"
				@click="router.push(`/sales/${image.id}`)">
				<picture>
					<source :srcset="image.urlFirebaseWebp" type="image/webp" />
					<source :srcset="image.urlFirebaseJpg" type="image/jpeg" />
					<img
						class="rounded-md w-full h-full object-cover"
						:src="image.urlFirebaseJpg"
						:alt="`Portrait${index + 1}`"
						srcset="" />
				</picture>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useNuxtApp } from "#app";
import { collection, query, onSnapshot, limit, CollectionReference, Firestore, orderBy } from "firebase/firestore";

const router = useRouter();

const { $db } = useNuxtApp();

const portraitsRef: CollectionReference = collection($db, "portraits");
const q = query(portraitsRef, limit(12), orderBy("createdDate", "desc"), orderBy("urlFirebaseWebp"));
const images: Ref<any[]> = ref([]);

const unsubscribe = onSnapshot(q, (querySnapshot) => {
	const newImages: any[] = [];
	querySnapshot.forEach((doc) => {
		newImages.push({ id: doc.id, ...doc.data() });
	});
	images.value = [...newImages];
});

onUnmounted(unsubscribe);
</script>
