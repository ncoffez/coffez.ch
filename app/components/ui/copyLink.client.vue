<template>
		<div
			v-if="!copied"
			@click="copyLink(path)"
			class="bg-zinc-800 outline outline-zinc-500 text-zinc-200 hover:text-zinc-800 hover:bg-zinc-300 font-medium text-xs inline-flex flex-row gap-1 px-3 py-1 m-1 sm:my-0 w-fit rounded-md cursor-pointer">
			<IconsCopy class="w-3 h-3 my-auto"></IconsCopy>
			Download link
		</div>
		<div
			class="bg-rose-800 text-zinc-200 font-medium text-xs inline-flex mx-4 flex-row gap-1 px-3 py-1 rounded-md"
			v-else>
			<IconsCheck class="w-3 h-3 my-auto"></IconsCheck>
			Copied
		</div>
</template>

<script lang="ts" setup>
const props = defineProps(["url", "title", "text"]);
const copied = ref(false);
const path = computed(() => new URL(props.url, window.location.origin).toString());

function copyLink(link: string) {
	if (navigator.canShare()) {
		navigator.share({
			title: props.title,
			text: props.text,
			url: path.value,
		});
	} else {
		navigator.clipboard.writeText(link);
		console.log(link);
		copied.value = true;
	}
}

watch(copied, (newValue) => {
	if (!newValue) return;
	setTimeout(() => {
		copied.value = false;
	}, 3000);
});
</script>
<style scoped></style>
