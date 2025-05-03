<template>
	<NuxtLink
		:to="to"
		class="w-64 h-full my-4 dark:bg-zinc-800 overflow-clip bg-white shadow-lg rounded-xl hover:scale-105 transition duration-100 ease-in-out">
		<div class="w-full flex flex-col gap-2">
			<div class="md:shrink-0 overflow-clip flex-grow aspect-[4/3]">
				<img v-if="image" :src="image" class="object-cover w-full h-full" alt="" />
				<slot name="image"></slot>
			</div>
			<div class="px-6 py-4 flex gap-2 flex-col">
				<h3 class="text-lg font-semibold dark:text-white">{{ title }}</h3>
				<p class="text-sm pb-2">{{ description }}</p>
				<button v-if="action" class="w-full">{{ action }}</button>
				<slot name="action"></slot>
			</div>
		</div>
	</NuxtLink>
</template>
<script lang="ts" setup>
const router = useRouter();
const props = defineProps({
	to: {
		type: String,
		required: false,
	},
	image: {
		type: String,
		required: false,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	action: {
		type: String,
		required: false,
	},
});
</script>
