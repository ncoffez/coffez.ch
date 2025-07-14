<template>
	<div class="w-full h-full mb-12">
		<div class="md:flex-row flex flex-col gap-8 md:gap-x-16 items-start">
			<div class="flex flex-col w-full container max-w-xl gap-4">
				<label for="title"
					>{{ $t("admin.event.new.title") }}
					<input type="text" id="title" v-model="event.title" />
				</label>
				<label for="date"
					>Date
					<input type="date" id="date" v-model="date" />
				</label>
				<div class="flex flex-row gap-2 w-full items-center py-2">
					<label for="city" class="grow">City</label>
					<UiSelect v-model="city" :options="['Bern', 'Lausanne', 'Vevey']"></UiSelect>
				</div>
				<UiImageDropZone v-model="images" :maximum="1" accept="image/*" />
				<div id="actions" class="flex gap-4 grid-cols(1fr,2fr)">
					<div class="flex flex-col w-full flex-grow">
						<button @click="createEvent()" class="cursor-pointer">{{ $t("admin.event.new.save") }}</button>
					</div>
					<div class="flex flex-col w-fit flex-shrink">
						<button
							@click="resetEvent()"
							class="cursor-pointer bg-zinc-700 dark:bg-zinc-700 hover:dark:bg-zinc-800 hover:bg-zinc-500">
							{{ $t("admin.event.new.reset") }}
						</button>
					</div>
				</div>
			</div>
			<UiEventCard
				:title="event.title"
				:startDate="event.date"
				:endDate="event.date"
				:coverImage="images.at(-1) || event.coverImage"
				:description="event.description"
				:disabled="true"></UiEventCard>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";

definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "New Street event" });
const images = ref<string[]>([]);
const city = ref("Lausanne");

const { $db } = useNuxtApp();

const event = ref(new StreetEvent(city.value));
const date = computed({
	get: () => event.value.date.slice(0, 10),
	set: (value) => (event.value.date = value),
});

watch(city, (newCity) => (event.value = new StreetEvent(city.value, event.value)));

const resetEvent = () => Object.assign(event.value, new StreetEvent(city.value));
async function createEvent() {
	let data: any = {};
	data.title = event.value.title;
	data.description = event.value.description;
	data.startDate = new Date(event.value.date);
	data.endDate = new Date(event.value.date);
	data.coverImage = images.value.at(-1) || "/img/street-event.jpeg";

	const { id } = await addDoc(collection($db, "events"), data);
	await navigateTo(`/admin/event/${id}`);
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
