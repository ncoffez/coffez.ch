<template>
	<div class="px-16 pb-12 mx-auto w-full h-full">
		<div class="md:flex-row flex flex-col gap-8 md:gap-16 place-items-center">
			<UiEventCard
				:title="event.title"
				:startDate="event.startDate"
				:coverImage="selectedImage || event.coverImage"
				:endDate="event.endDate"
				:description="event.description"
				:disabled="true"
				class="my-auto"></UiEventCard>
			<div class="flex flex-col w-full max-w-lg gap-4">
				<div class="flex flex-col w-full max-w-lg">
					<p class="leading-relaxed py-6 dark:text-zinc-400 font-bold">{{ event.id }}</p>
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
				<UiImageDropZone @imageChanged="onImageChange" />
				<div id="actions" class="flex gap-4 grid-cols(1fr,2fr)">
					<div class="flex flex-col w-full max-w-lg flex-grow">
						<button @click="createEvent()" class="cursor-pointer">Save</button>
					</div>
					<div class="flex flex-col w-32 flex-shrink">
						<button @click="resetEvent()" class="cursor-pointer bg-zinc-700 hover:bg-zinc-500">Reset</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Create new event" });

const { $db, $functions } = useNuxtApp();
const db = await $db();
const functions = await $functions();

const event = ref(new DrawingEvent());
const selectedImage: Ref<string | null> = ref(null);
const start = computed({
	get: () => event.value.startDate.slice(0, 10),
	set: (value) => (event.value.startDate = value),
});
const end = computed({
	get: () => event.value.endDate?.slice(0, 10),
	set: (value) => (event.value.endDate = value),
});

const resetEvent = () => Object.assign(event.value, new DrawingEvent());
async function createEvent() {
	let data: any = {};
	data.title = event.value.title;
	data.description = event.value.description;
	data.startDate = new Date(event.value.startDate);
	if (event.value.endDate) data.endDate = new Date(event.value.endDate);
	if (selectedImage.value) data.coverImage = selectedImage.value;

	const { id } = await addDoc(collection(db, "events"), data);
	await navigateTo(`/admin/event/${id}`);
}

async function onImageChange(event: any) {
	const reader = new FileReader();
	reader.onload = async () => {
		const base64Image = reader.result?.toString().split(",")[1]; // Extract Base64 data after comma
		selectedImage.value = (
			await httpsCallable(
				functions,
				"uploadEventCover"
			)({
				imageBase64: base64Image,
				name: event.target.files[0].name,
			})
		).data as string;
	};
	reader.readAsDataURL(event.target.files[0]);
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
