<template>
	<div class="px-4 py-6 gap-16 mx-auto w-full h-fit max-w-screen-xl block" v-if="gallery">
		<div class="grid grid-cols-1 mx-auto @sm:grid-cols-3 w-full max-w-screen-xl gap-6 md:gap-8 mb-16">
			<UiGalleryCover
				class="mx-auto grow-0"
				:id="gallery.id"
				:title="gallery.title"
				:description="gallery.description"
				:coverImage="gallery.coverImage || gallery.coverImage"
				:admin="true"
				:disabled="true">
			</UiGalleryCover>
			<div class="flex flex-col w-full flex-grow">
				<input type="text" id="title" v-model="gallery.title" @change="updateTitle(gallery.title)" />
				<textarea
					id="description"
					class="h-32"
					v-model="gallery.description"
					@change="updateDescription(gallery.description)" />
				<button
					class="bg-red-600 hover:bg-red-500 text-white mb-0 w-48 ml-auto leading-relaxed"
					@click="deleteGallery()">
					<IconsTrash class="inline-block text-xl"></IconsTrash> Delete gallery
				</button>
			</div>
			<div class="block flex-col w-full max-w-lg mx-auto">
				<label for="upload-images">Upload</label>
				<UiImageDropZone id="upload-images" @mediaChanged="onMediaChange" />
			</div>
		</div>
		<h1 class="text-3xl font-bold dark:text-slate-100">{{ gallery.title }}</h1>
		<p class="leading-relaxed mb-12 dark:text-zinc-400 font-light text-lg">{{ gallery.description }}</p>
		<UiGalleryMasonry
			class="my-16"
			:images="gallery?.images"
			v-if="gallery?.images"
			@image-favorited="setCoverImage"
			:favorite="gallery.coverImage"
			@image-deleted="deleteImage"
			:admin="true">
			<slot name="first-card"></slot>
		</UiGalleryMasonry>
		<div class="my-8 p-8 flex flex-col w-full border-dotted border-2 h-96 border-zinc-700" v-else>
			<p class="text-lg text-zinc-400">No images uploaded yet.</p>
		</div>
		<div class="mb-16"></div>
	</div>
</template>
<script lang="ts" setup>
import { doc, updateDoc, arrayUnion, arrayRemove, deleteDoc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
const { $db, $functions } = useNuxtApp();
const route = useRoute();
const id = route.params.id as string;

const gallery = useFirestore(`gallery/${id}`);
definePageMeta({ middleware: "user-is-admin", layout: "admin" });

async function onMediaChange(event: any) {
	const files: File[] = Array.from(event.target.files);
	const mediaItems: string[] = [];
	for (const file of files) {
		mediaItems.push(await readFile(file));
	}
	if (!mediaItems.length) return;

	const mediaUrls: string[] = await Promise.all(
		files.map(async (file, index) => {
			const extension = file.name.split(".").pop() || "jpg";
			const timestamp = new Date().toISOString();
			const fileName = `${timestamp}_${index}.${extension}`;
			const isVideo = file.type.startsWith("video/");
			if (isVideo) console.log("isVideo", isVideo);

			const uploadFunction = isVideo ? "uploadGalleryVideo" : "uploadGalleryImage";

			return (
				await httpsCallable(
					$functions,
					uploadFunction
				)({
					[isVideo ? "videoBase64" : "imageBase64"]: mediaItems[index],
					name: fileName,
					folder: "gallery",
				})
			).data as string;
		})
	);

	await uploadMedia(mediaUrls);
}

async function uploadMedia(images: string[]) {
	const docRef = doc($db, "gallery", id as string);
	await updateDoc(docRef, { images: arrayUnion(...images) });
}

async function updateTitle(title: string) {
	const docRef = doc($db, "gallery", id as string);
	await updateDoc(docRef, { title });
}

async function updateDescription(description: string) {
	const docRef = doc($db, "gallery", id as string);
	await updateDoc(docRef, { description });
}

async function setCoverImage(imageUrl: string) {
	const docRef = doc($db, "gallery", id as string);
	await updateDoc(docRef, { coverImage: imageUrl });
}

async function deleteImage(imageUrl: string) {
	const docRef = doc($db, "gallery", id as string);
	await updateDoc(docRef, { images: arrayRemove(imageUrl) });
}

async function deleteGallery() {
	const galleryRef = doc($db, "gallery", id as string);
	await deleteDoc(galleryRef);
	await navigateTo("/admin/galleries");
}

function readFile(file: any): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const base64Media = reader.result?.toString().split(",")[1];
			resolve(base64Media || "");
		};
		if (reader.error) reject(reader.error);
		reader.readAsDataURL(file);
	});
}
</script>
<style scoped>
input,
textarea {
	@apply dark:bg-zinc-900 w-full px-4 py-4 rounded-md font-light text-base border-solid border-2 dark:border-zinc-700 mt-2 focus:ring-1 dark:ring-slate-500 focus:outline-none dark:focus:bg-zinc-900 leading-tight;
	@apply dark:lg:bg-zinc-900 dark:lg:border-zinc-700 dark:lg:focus:bg-zinc-900;
}
</style>
