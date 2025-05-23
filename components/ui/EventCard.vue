<template>
	<NuxtLink
		:to="link"
		class="w-64 h-full my-4 dark:bg-zinc-800 bg-white shadow-lg overflow-clip rounded-xl hover:scale-105 active:scale-100 transition duration-300 ease-in-out cursor-pointer">
		<div class="w-64">
			<div class="md:shrink-0">
				<img
					class="h-48 w-full object-cover"
					:src="coverImage || '/img/analoge_zeichnung.webp'"
					alt="Pascal Coffez drawing at the Rhine Falls" />
			</div>
			<div class="p-6">
				<div class="uppercase tracking-wide text-sm font-semibold pb-2">
					<span
						id="duration"
						v-if="duration && !isWithinInterval(new Date(), { start: new Date(startDate), end: new Date(endDate) })"
						class="inline-block py-.5 text-xs mr-2 text-white rounded-full px-2"
						>{{ duration }} {{ duration > 1 ? $t("cards.days") : $t("cards.day") }}</span
					>
					<span v-else class="inline-block py-.5 text-xs mr-2 rounded-full px-2 text-white" id="duration">Live</span>
					<span id="date">{{ new Date(startDate).toLocaleDateString("de-CH") }}</span>
				</div>
				<div class="block mt-1 text-lg leading-tight font-semibold dark:text-white hover:underline">
					{{ title }}
				</div>
				<p class="mt-2 text-sm">{{ description }}</p>
				<div class="flex gap-2">
					<slot name="actions"> </slot>
				</div>
			</div>
		</div>
	</NuxtLink>
</template>
<script lang="ts" setup>
import { differenceInCalendarDays } from "date-fns";
import { isWithinInterval } from "date-fns";
const props = defineProps(["title", "startDate", "endDate", "coverImage", "description", "id", "admin", "disabled"]);

const link = computed(() => {
	if (props.disabled) return "";
	if (props.admin) return `/admin/event/${props.id}`;
	return `/live/${props.id}`;
});

const duration = computed(() => {
	if (!props.endDate) return 0;
	return differenceInCalendarDays(new Date(props.endDate), new Date(props.startDate)) + 1;
});

const description = computed(() => {
	if (!props.description)
		return `Pascal Coffez captures the unique personalities and spirit of the occasion. This artistic touch added a memorable element to this event.`;
	if (props.description?.length > 150) return props.description.substring(0, 150) + "...";
	return props.description;
});

const title = computed(() => {
	if (props.title?.length > 40) return props.title.substring(0, 40) + "...";
	return props.title;
});
</script>
<style scoped>
#duration {
	@apply bg-primary-700 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700;
}

#date {
	@apply text-primary-800 dark:text-primary-600 hover:text-primary-900 dark:hover:text-primary-700;
}
</style>
