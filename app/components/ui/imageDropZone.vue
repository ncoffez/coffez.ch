<template>
	<div id="file-dropzone" class="flex flex-col w-64 max-w-lg py-2">
		<label
			for="dropzone-file"
			class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center border-2 border-dashed cursor-pointer dark:bg-zinc-900 border-zinc-700 hover:border-zinc-500 hover:scale-105 duration-200 rounded-xl">
			<IconsCloudUpload class="w-8 h-8 dark:text-zinc-400 text-zinc-600" />
			<h2 class="mt-1 font-medium tracking-wide dark:text-zinc-200">{{ containerType }} image</h2>
			<p class="mt-2 text-xs tracking-wide dark:text-zinc-400 text-zinc-600">
				Upload or drag & drop your file as PNG, JPG or MP4
			</p>
			<input
				id="dropzone-file"
				type="file"
				accept="image/png, image/jpeg, video/mp4"
				class="hidden"
				multiple="true"
				@change="$emit('mediaChanged', $event)" />
		</label>
	</div>
</template>
<script lang="ts" setup>
defineEmits(["mediaChanged"]);
defineProps({
	containerType: {
		type: String,
		validator: (name: string) => ["Event", "Gallery"].includes(name),
		default: "Event",
	},
});
</script>
<style scoped></style>
