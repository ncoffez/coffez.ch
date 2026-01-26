<template>
	<section id="events" class="px-4 w-full overflow-x-scroll content-center py-4" v-if="events">
		<div :class="wrap ? 'flex-wrap' : 'flex-nowrap'" class="flex gap-x-6 gap-y-2 mx-12 px-2 w-fit justify-center">
			<slot name="first-card"></slot>
			<UiEventCard
				v-for="(event, index) of events"
				:key="event.id"
				:index="index"
				:id="event.id"
				:title="event.title"
				:startDate="event.startDate"
				:coverImage="event.coverImage"
				:endDate="event.endDate"
				:description="event.description"
				:admin="admin">
				<template v-slot:actions>
					<slot name="actions"></slot>
				</template>
			</UiEventCard>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { httpsCallable } from "firebase/functions";
const { $functions } = useNuxtApp();
defineProps({
	admin: {
		type: Boolean,
		required: false,
		default: false,
	},
	wrap: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const { data: events } = await useLazyAsyncData<DrawingEvent[]>("events", async () => {
	const eventList = httpsCallable($functions, "getEventList");
	let { data } = await eventList({ limit: 8 });
	return data as DrawingEvent[];
});
</script>
<style scoped></style>
