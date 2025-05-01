<template>
	<section v-if="gallery" class="w-full max-w-screen-xl mb-8 mx-auto px-4 pb-16">
		<div id="header" class="mb-8">
			<h1 class="text-3xl font-bold my-4 text-slate-100">{{ gallery.title }}</h1>
			<p class="text-lg max-w-prose">{{ gallery.description }}</p>
		</div>
		<UiGalleryMasonry :images="gallery.images" />
	</section>
</template>
<script lang="ts" setup>
import { doc, getDoc } from "firebase/firestore";
definePageMeta({ layout: "gallery" });
defineProps({
	admin: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const { $db } = useNuxtApp();
const db = await $db();
const { id } = useRoute().params;
const router = useRouter();

const { data: gallery } = await useAsyncData(`gallery-${id}`, async () => {
	const galleryRef = await getDoc(doc(db, "gallery", id as string));
	if (!galleryRef.exists()) router.push("/");
	return galleryRef.data();
});
</script>
<style scoped>
img {
	@apply h-auto max-w-full rounded-lg;
}

.masonry-container > img::before {
	content: "1";
	@apply absolute top-0 left-0 w-full h-full bg-black text-white text-xl font-bold text-center flex justify-center items-center z-10;
}
</style>
