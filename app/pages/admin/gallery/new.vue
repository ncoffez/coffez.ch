<template>
	<div class="px-4 pb-4 w-full h-full">
		<div class="sm:flex-row flex flex-col gap-16">
			<div class="flex flex-col w-full max-w-lg gap-4">
				<div class="flex flex-col w-full max-w-xl" v-if="gallery?.id">
					<p class="leading-relaxed py-6 dark:text-zinc-400 font-bold">{{ gallery.id }}</p>
				</div>
				<div class="flex flex-col w-full max-w-lg">
					<label for="title">{{ $t("admin.gallery.new.title") }}</label>
					<input type="text" id="title" v-model="gallery.title" />
				</div>
				<div class="flex flex-col w-full max-w-lg">
					<label for="description">{{ $t("admin.gallery.new.description") }}</label>
					<textarea id="description" class="h-32" v-model="gallery.description" />
				</div>
				<div id="actions" class="flex gap-4 grid-cols(2fr,3fr)">
					<div class="flex flex-col w-full max-w-lg flex-grow">
						<button @click="createNewGallery(gallery)" class="cursor-pointer">
							{{ $t("admin.gallery.new.save") }}
						</button>
					</div>
					<div class="flex flex-col w-fit flex-shrink">
						<button @click="resetGallery()" class="cursor-pointer bg-zinc-700 hover:bg-zinc-500">
							{{ $t("admin.gallery.new.reset") }}
						</button>
					</div>
				</div>
			</div>
			<UiGalleryCover
				:title="gallery.title"
				:description="gallery.description"
				:cover-image="gallery.coverImage"
				class="flex-grow-0" />
		</div>
	</div>
</template>
<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";
definePageMeta({ layout: "admin", name: "Create a new gallery" });

const { $db } = useNuxtApp();

const selectedImage: Ref<string | null> = ref(null);
const gallery = ref(new Gallery());

const resetGallery = () => (gallery.value = new Gallery());

async function createNewGallery(data: any) {
	const newGallery = await addDoc(collection($db, "gallery"), {
		title: data.title,
		description: data.description,
		coverImage: data.coverImage,
	});
	await navigateTo(`/admin/gallery/${newGallery.id}`);
}
</script>
<style scoped>
input[type="text"] {
	@apply w-full p-4 rounded-md border-solid border-2 mt-2 focus:ring-1 ring-slate-500 focus:outline-none dark:focus:bg-zinc-900 leading-tight;
}

input,
textarea {
	@apply dark:bg-zinc-900 w-full px-4 py-4 rounded-md font-light text-base border-solid border-2 dark:border-zinc-700 mt-2 focus:ring-1 dark:ring-slate-500 focus:outline-none dark:focus:bg-zinc-900 leading-tight;
	@apply dark:lg:bg-zinc-900 dark:lg:border-zinc-700 dark:lg:focus:bg-zinc-900;
}
</style>
