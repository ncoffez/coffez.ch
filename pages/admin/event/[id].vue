<template>
	<div class="px-16 py-12 mx-auto w-full h-full">
		<div class="md:flex-row flex flex-col gap-8 md:gap-16">
			<UiEventCard
				:title="event.title"
				:startDate="event.startDate"
				:coverImage="selectedImage || event.coverImage"
				:endDate="event.endDate"
				:description="event.description"
				:loading="loading"
				class="my-auto"></UiEventCard>
			<div class="flex flex-col w-full max-w-lg gap-4">
				<div class="flex flex-col w-full max-w-lg">
					<p v-if="event.id" class="leading-relaxed py-6 text-zinc-400 font-bold flex flex-col sm:flex-row gap-2">
						{{ event.id }}
						<UiCopyLink :url="`/live/${event.id}?download=true`" :title="event.title" :text="event.description">
						</UiCopyLink>
					</p>
				</div>
				<div class="flex flex-col w-full max-w-lg">
					<label for="title">Title</label>
					<input type="text" id="title" v-model="event.title" />
				</div>
				<div class="flex flex-row gap-2">
					<div class="flex flex-col w-full max-w-lg">
						<label for="start">Start Date</label>
						<input type="date" id="start" v-model="start" />
					</div>
					<div class="flex flex-col w-full max-w-lg">
						<label for="end">End Date</label>
						<input type="date" id="end" v-model="end" />
					</div>
				</div>
				<div class="flex flex-col w-full max-w-lg">
					<label for="description">Description</label>
					<textarea id="description" class="h-32" v-model="event.description" />
				</div>
				<div class="flex flex-col w-full max-w-lg">
					<label for="upload-images">Upload</label>
					<UiImageDropZone id="upload-images" @mediaChanged="onImageChange" />
				</div>
				<div class="flex gap-4 grid-cols(1fr,2fr)">
					<div class="flex flex-col w-full max-w-lg flex-grow">
						<button @click="updateEvent()" class="cursor-pointer" v-if="!updated">Save</button>
						<button disabled class="bg-green-500 hover:bg-green-500 text-white" v-else>Event saved successfully</button>
					</div>
					<div class="flex flex-col w-32 flex-shrink">
						<button @click="deleteEvent()" class="cursor-pointer bg-zinc-700 hover:bg-zinc-500">Delete</button>
					</div>
				</div>
			</div>
		</div>
		<section id="images" class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-4 gap-x-6 pt-16">
			<div id="image" :key="image.id" v-for="(image, index) in images" class="relative">
				<Icon
					v-if="!image.hidden"
					id="hide"
					class="absolute top-2 left-2 text-2xl text-white bg-slate-500 rounded-full p-1 z-10 hidden"
					name="ic:outline-visibility-off"
					@click="hideImage(image.id)"></Icon>
				<Icon
					v-else
					id="show"
					class="absolute top-2 left-2 text-2xl text-white bg-slate-500 rounded-full p-1 z-10 hidden"
					name="ic:outline-visibility"
					@click="showImage(image.id)"></Icon>
				<img
					:alt="image.name"
					:src="index === 0 ? image.urlFirebaseOriginal : image.urlFirebaseWebp"
					:class="image.hidden ? 'opacity-20' : ''"
					class="object-cover rounded-md w-full flex-grow" />
				<p class="text-sm text-slate-400 font-base text-center leading-relaxed">
					{{ toRelativeDate(image.createdDate) }}
				</p>
			</div>
		</section>
	</div>
</template>
<script lang="ts" setup>
import { toRelativeDate } from "#imports";
import { addDays, subDays } from "date-fns";
import {
	collection,
	CollectionReference,
	deleteDoc,
	deleteField,
	doc,
	getDocs,
	orderBy,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

const { $db, $functions } = useNuxtApp();
const db = await $db();
const functions = await $functions();
const { id } = useRoute().params;
const { data: serverEvent } = await useFetch(`/api/getEvent/${id}`);
const name = computed(() => serverEvent.value || id);

definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "" });

const updated = ref(false);
const loading = ref(false);
watch(updated, () => {
	setTimeout(() => {
		updated.value = false;
	}, 3000);
});

async function hideImage(id: string) {
	const docRef = doc(db, "portraits", id);
	await updateDoc(docRef, { hidden: true });
	refreshImages();
}

async function showImage(id: string) {
	const docRef = doc(db, "portraits", id);
	await updateDoc(docRef, { hidden: deleteField() });
	refreshImages();
}

const { data: images, refresh: refreshImages } = await useAsyncData(`images-${id}`, async () => {
	const portraitsRef: CollectionReference = collection(db, "portraits");
	const q = query(
		portraitsRef,
		where("createdDate", ">=", new Date(serverEvent.value?.startDate || subDays(new Date(), 1))),
		where("createdDate", "<=", new Date(serverEvent.value?.endDate || addDays(new Date(), 5))),
		orderBy("createdDate", "desc"),
		orderBy("urlFirebaseWebp")
	);
	const images = await getDocs(q);
	const result: any[] = [];
	return images.docs.map((doc) => {
		return {
			id: doc.id,
			name: doc.data().name,
			urlFirebaseOriginal: doc.data().urlFirebaseOriginal,
			urlFirebaseWebp: doc.data().urlFirebaseWebp,
			hidden: doc.data().hidden,
			createdDate: dateFromTimestamp(doc.data().createdDate),
		};
	});
});

const start = computed({
	get: () => event.value.startDate.slice(0, 10),
	set: (value) => (event.value.startDate = value),
});
const end = computed({
	get: () => event.value.endDate.slice(0, 10),
	set: (value) => (event.value.endDate = value),
});

const selectedImage = ref(serverEvent.value?.coverImage);

async function updateEvent() {
	const eventRef = doc(db, "events", id as string);
	let data: any = {};
	data.title = event.value.title;
	data.description = event.value.description;
	data.startDate = startOfDay(event.value.startDate);
	data.endDate = endOfDay(event.value.endDate);
	if (selectedImage.value) data.coverImage = selectedImage.value;

	await updateDoc(eventRef, data);
	updated.value = true;
}

async function deleteEvent() {
	await deleteDoc(doc(db, "events", id as string));
	await navigateTo("/admin");
}

async function onImageChange(event: any) {
	console.log(`Uploading ${event.target.files[0].name}.`);
	const reader = new FileReader();
	reader.onload = async () => {
		loading.value = true;
		const base64Image = reader.result?.toString().split(",")[1]; // Extract Base64 data after comma
		selectedImage.value = (
			await httpsCallable(
				functions,
				"uploadEventCover"
			)({
				imageBase64: base64Image,
				name: event.target.files[0].name,
			})
		).data;
		loading.value = false;
		console.log(`Uploaded ${event.target.files[0].name}.`);
	};
	reader.readAsDataURL(event.target.files[0]);
}

const event = ref({
	title: serverEvent.value?.title,
	id: serverEvent.value?.id,
	startDate: serverEvent.value?.startDate,
	endDate: serverEvent.value?.endDate,
	coverImage: serverEvent.value?.coverImage,
	description: serverEvent.value?.description,
});
</script>
<style scoped>
input[type="text"] {
	width: 100%;
	padding: 1rem;
	border-radius: 0.375rem;
	border: 2px solid #3f3f46;
	margin-top: 0.5rem;
}

input[type="text"]:focus {
	outline: 1px solid #64748b;
}

input[type="text"] {
	line-height: 1.25;
}

#image:hover #hide,
#image:hover #show {
	display: block;
}

#image:hover #hide:hover,
#image:hover #show:hover {
	transform: scale(1.1);
	transition: transform 200ms ease-in-out;
}

input,
textarea {
	@apply dark:bg-zinc-900 w-full px-4 py-4 rounded-md font-light text-base border-solid border-2 dark:border-zinc-700 mt-2 focus:ring-1 dark:ring-slate-500 focus:outline-none dark:focus:bg-zinc-900 leading-tight;
	@apply dark:lg:bg-zinc-900 dark:lg:border-zinc-700 dark:lg:focus:bg-zinc-900;
}
</style>
