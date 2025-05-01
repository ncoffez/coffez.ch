<template>
	<ClientOnly>
		<div class="masonry-container relative" ref="masonryContainer">
			<div
				class="image-item absolute rounded-md overflow-clip"
				v-for="(image, index) in images"
				:key="image"
				:id="image === favorite ? 'favorite' : 'image'"
				@click="admin ? '' : openLightBox(index)">
				<div
					id="actions"
					v-if="admin"
					class="w-full h-full inset-0 absolute bg-slate-700 bg-opacity-40 flex-row gap-4 items-center justify-center hidden p-4 z-10">
					<IconsHeart
						v-if="image !== favorite"
						@click="$emit('imageFavorited', image)"
						:class="image === favorite ? 'favorite' : ''"
						class="text-4xl text-white hover:text-primary-500 hover:scale-105"></IconsHeart>
					<IconsBaselineFavorite v-else class="text-4xl text-primary-500 hover:scale-105"></IconsBaselineFavorite>

					<IconsTrash
						@click="$emit('imageDeleted', image)"
						id="delete"
						class="text-4xl text-white hover:text-primary-500 hover:scale-105"></IconsTrash>
				</div>
				<img
					:class="getMediaType(image).split('/').shift() === 'video' ? 'hidden' : ''"
					:src="image"
					:alt="String(index)"
					class="object-cover w-full h-full"
					:id="image.split('.').pop() + String(index)"
					@load="onImageLoad(index)"
					@error="onImageError(index)" />
				<video
					:class="getMediaType(image).split('/').shift() === 'video' ? '' : 'hidden'"
					:src="image"
					:alt="String(index)"
					autoplay="true"
					muted="true"
					loop="true"
					playsinline="true"
					class="object-cover w-full h-full events-none"
					:id="image.split('.').pop() + String(index)"
					@load="onImageLoad(index)"
					@error="onImageError(index)" />
			</div>
			<ClientOnly>
				<UiLightBox
					v-if="lightboxIsOpen"
					:media="lightbox.media"
					:index="lightbox.index"
					@close="lightboxIsOpen = false"
					@open="lightboxIsOpen = true"
					description="Currently a standard description, will change."
					type="jpeg" />
			</ClientOnly>
		</div>
	</ClientOnly>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, nextTick, type PropType, onUnmounted } from "vue";

const props = defineProps({
	images: {
		type: Array as PropType<string[]>,
		required: true,
	},
	favorite: {
		type: String,
		required: false,
		default: null,
	},
	admin: {
		type: Boolean,
		required: false,
		default: false,
	},
});

defineEmits(["imageDeleted", "imageFavorited"]);

const masonryContainer = ref(null);
const masonry: any = ref(null);
const loadedImages = ref(new Set());
const resizeObserver: any = ref(null);
const lightboxIsOpen = ref(false);
const lightbox = ref({ media: props.images, index: 0 });

function openLightBox(index: number) {
	lightbox.value.index = index;
	lightboxIsOpen.value = true;
}

onMounted(async () => {
	await initMasonry();
	setupResizeObserver();
});

onUnmounted(() => {
	if (resizeObserver.value) {
		resizeObserver.value.disconnect();
	}
	if (masonry.value) {
		masonry.value.destroy();
	}
});

watch(
	() => props.images,
	async (_newImages, _oldImages) => {
		loadedImages.value.clear();
		if (masonry.value) {
			masonry.value.destroy();
			masonry.value = null;
		}
		await nextTick();
		await initMasonry();
	},
	{ deep: true }
);

function onImageLoad(index: number) {
	loadedImages.value.add(index);
	recalculateLayout();
}

function onImageError(index: number) {
	loadedImages.value.add(index);
	recalculateLayout();
}

function recalculateLayout() {
	if (loadedImages.value.size === props.images.length) {
		nextTick(() => {
			if (masonry.value) {
				masonry.value.layout();
			} else {
				initMasonry();
			}
		});
	}
}

async function initMasonry() {
	if (!import.meta.client || !masonryContainer.value) return;

	const MiniMasonry = await import("minimasonry");
	const MiniMasonryConstructor = MiniMasonry.default;

	await nextTick();
	masonry.value = new MiniMasonryConstructor({
		container: masonryContainer.value,
		baseWidth: 270,
		gutter: 20,
		ultimateGutter: 20,
		surroundingGutter: false,
		wedge: true,
	});
}

function setupResizeObserver() {
	if (typeof ResizeObserver === "undefined" || !masonryContainer.value) return;

	resizeObserver.value = new ResizeObserver(
		debounce(() => {
			if (masonry.value) {
				masonry.value.layout();
			}
		}, 100)
	);

	resizeObserver.value.observe(masonryContainer.value);
}

function debounce(func: any, wait: number) {
	let timeout: any;
	return function executedFunction(...args: any) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}
</script>

<style scoped>
.image-item {
	width: 270px;
	margin-bottom: 20px;
}

.image-item:hover #actions {
	@apply flex;
}

#favorite #actions:not(:hover) {
	@apply flex bg-opacity-0;
}

#favorite #actions:not(:hover) #delete {
	display: none;
}

.icon {
	@apply hover:text-rose-500 hover:scale-105 transition-all duration-200 ease-in-out;
}

.favorite {
	@apply text-rose-500;
}
</style>
