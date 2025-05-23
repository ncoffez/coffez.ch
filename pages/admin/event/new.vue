<template>
	<div class="w-full h-full mb-12">
		<div class="md:flex-row flex flex-col gap-8 md:gap-x-16 items-start">
			<div class="flex flex-col w-full container max-w-xl gap-4">
				<div class="flex flex-col w-full" v-if="event?.id">
					<p class="leading-relaxed py-6 dark:text-zinc-400 font-bold">{{ event.id }}</p>
				</div>
				<div class="flex flex-col w-full">
					<label for="title">{{ $t("admin.event.new.title") }}</label>
					<input type="text" id="title" v-model="event.title" />
				</div>
				<div class="flex flex-row gap-2 w-full">
					<div class="flex flex-col w-full">
						<label for="start">{{ $t("admin.event.new.startDate") }}</label>
						<input type="date" id="start" v-model="start" />
					</div>
					<div class="flex flex-col w-full">
						<label for="end">{{ $t("admin.event.new.endDate") }}</label>
						<input type="date" id="end" v-model="end" />
					</div>
				</div>
				<div class="flex flex-col w-full">
					<label for="description">{{ $t("admin.event.new.description") }}</label>
					<textarea id="description" class="h-32" v-model="event.description" />
				</div>
				<UiSettingItem title="Event type" class="w-full"><UiSliderSwitch /></UiSettingItem>
				<UiImageDropZone @imageChanged="onImageChange" />
				<div id="actions" class="flex gap-4 grid-cols(1fr,2fr)">
					<div class="flex flex-col w-full flex-grow">
						<button @click="createEvent()" class="cursor-pointer">{{ $t("admin.event.new.save") }}</button>
					</div>
					<div class="flex flex-col w-fit flex-shrink">
						<button @click="resetEvent()" class="cursor-pointer bg-zinc-700 hover:bg-zinc-500">{{ $t("admin.event.new.reset") }}</button>
					</div>
				</div>
			</div>
			<UiEventCard
				:title="event.title"
				:startDate="event.startDate"
				:coverImage="selectedImage || event.coverImage"
				:endDate="event.endDate"
				:description="event.description"
				:disabled="true"></UiEventCard>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";

definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Create new event" });

const { $db, $functions } = useNuxtApp();

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

	const { id } = await addDoc(collection($db, "events"), data);
	await navigateTo(`/admin/event/${id}`);
}

async function onImageChange(event: any) {
	const reader = new FileReader();
	reader.onload = async () => {
		const base64Image = reader.result?.toString().split(",")[1]; // Extract Base64 data after comma
		selectedImage.value = (
			await httpsCallable(
				$functions,
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
