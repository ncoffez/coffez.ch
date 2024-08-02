<template>
  <ClientOnly>
    <div class="masonry-container relative" ref="masonryContainer">
      <div class="image-item absolute" v-for="(image, index) in images" :key="image">
        <img :src="image" :alt="String(index)" class="object-cover w-full h-full" :id="String(index)"
          @load="onImageLoad(index)" @error="onImageError(index)" />
      </div>
    </div>
  </ClientOnly>
</template>

<script lang='ts' setup>
import { ref, onMounted, watch, nextTick, type PropType, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true,
  }
})

const masonryContainer = ref(null)
const masonry: any = ref(null)
const loadedImages = ref(new Set())
const resizeObserver: any = ref(null)

onMounted(async () => {
  await initMasonry()
  setupResizeObserver()
})

onUnmounted(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
  }
  if (masonry.value) {
    masonry.value.destroy()
  }
})

watch(() => props.images, async (newImages, oldImages) => {
  loadedImages.value.clear()
  if (masonry.value) {
    masonry.value.destroy()
    masonry.value = null
  }
  await nextTick()
  await initMasonry()
}, { deep: true })

function onImageLoad(index: number) {
  loadedImages.value.add(index)
  recalculateLayout()
}

function onImageError(index: number) {
  loadedImages.value.add(index)
  recalculateLayout()
}

function recalculateLayout() {
  if (loadedImages.value.size === props.images.length) {
    nextTick(() => {
      if (masonry.value) {
        masonry.value.layout()
      } else {
        initMasonry()
      }
    })
  }
}

async function initMasonry() {
  if (!import.meta.client || !masonryContainer.value) return

  const MiniMasonry = await import('minimasonry')
  const MiniMasonryConstructor = MiniMasonry.default

  await nextTick()
  masonry.value = new MiniMasonryConstructor({
    container: masonryContainer.value,
    baseWidth: 270,
    gutter: 20,
    ultimateGutter: 20,
    surroundingGutter: false,
    wedge: true,
  })
}

function setupResizeObserver() {
  if (typeof ResizeObserver === 'undefined' || !masonryContainer.value) return

  resizeObserver.value = new ResizeObserver(debounce(() => {
    if (masonry.value) {
      masonry.value.layout()
    }
  }, 100))

  resizeObserver.value.observe(masonryContainer.value)
}

function debounce(func: any, wait: number) {
  let timeout: any
  return function executedFunction(...args: any) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
</script>

<style scoped>
.image-item {
  width: 270px;
  /* Match baseWidth from MiniMasonry options */
  margin-bottom: 20px;
  /* Match gutter from MiniMasonry options */
}
</style>