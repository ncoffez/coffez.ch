<template>
	<div class="flex flex-col w-96 max-w-lg">
		<div
			class="flex flex-col gap-2 w-full max-w-lg p-5 mx-auto mt-2 border-2 border-dashed dark:bg-zinc-900 border-zinc-700 hover:border-zinc-500 rounded-xl">
			<div class="flex flex-wrap gap-1 py-2">
				<IconsCloudUpload v-if="loadedImages.length === 0" class="w-12 h-12 dark:text-zinc-400 text-zinc-600" />
				<img v-for="loadedImage of loadedImages" :src="loadedImage" class="w-20 h-20 object-cover" alt="" v-else />
			</div>
			<div class="leading-tight tracking-wide mt-2">
				<h2 class="font-medium dark:text-zinc-200">{{ containerType }} image</h2>
				<p class="text-xs dark:text-zinc-400 text-zinc-600">
					Click to upload {{ maximum == 1 ? "a file" : `up to ${maximum} files` }} ---
					<i>accepts {{ accept }}</i>
				</p>
			</div>

			<div class="flex gap-2">
				<button class="my-2 w-full relative">
					Choose {{ maximum === 1 ? "image" : "images" }}
					<label for="dropzone-file" class="cursor-pointer absolute inset-0 w-full h-full z-10">
						<input
							id="dropzone-file"
							type="file"
							:accept="accept"
							class="hidden"
							:multiple="maximum !== 1"
							@change="onImageChange($event)" />
					</label>
				</button>
				<button
					:disabled="loadedImages.length <= 0"
					@click="loadedImages = []"
					class="bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-700 hover:dark:bg-zinc-800 px-2 py-1 w-fit my-2">
					Clear
				</button>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
const emit = defineEmits(["mediaChanged"]);
const props = defineProps({
	containerType: {
		type: String,
		validator: (name: string) => ["Event", "Gallery"].includes(name),
		default: "Event",
	},
	maximum: {
		type: Number,
		required: false,
		default: 0,
	},
	/**
	 * Specifies allowed file types for the file input.
	 * @type {string}
	 * @default "image/*,video/mp4"
	 * @example "image/png,image/jpeg"
	 * @remarks Accepts MIME types or file extensions (e.g., "image/*" for all images, "video/mp4" for MP4 videos).
	 */
	accept: {
		type: String,
		default: "image/*, video/mp4",
		required: true,
	},
});

const loadedImages = defineModel<string[]>({ default: [] });
watch(
	loadedImages,
	(imgs) => {
		if (props.maximum <= 0) return;
		if (imgs.length > props.maximum) loadedImages.value = imgs.slice(-props.maximum);
	},
	{ deep: true, immediate: false }
);

async function onImageChange(event: any) {
	const images = (event.target as HTMLInputElement).files;
	if (!images) return;

	for (const image of images) {
		const reader = new FileReader();
		reader.onloadend = () => {
			loadedImages.value.push(reader.result as string);
		};
		reader.readAsDataURL(image);
	}
}
</script>
<style scoped></style>
