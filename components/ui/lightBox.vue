<template>
  <div id="lightbox" class="grid sm:grid-cols-[1fr,5fr,1fr] fixed inset-0 place-items-center p-4 sm:p-8 xl:py-8 xl:px-4 gap-8">
    <img id="previous" :src="media[previousIndex]" @click.stop="currentIndex = previousIndex" />
    <img id="current" :src="media[currentIndex]" @click.stop="currentIndex = nextIndex" class="object-contain rounded-md" />
    <img id="next" :src="media[nextIndex]" @click.stop="currentIndex = nextIndex" />
    <div id="background" class="w-full h-full backdrop-blur-md bg-neutral-900 bg-opacity-90 fixed z-0 inset-0"
      @click="$emit('close')">
    </div>
  </div>
</template>
<script lang='ts' setup>

const props = defineProps(['media', 'description', 'type', 'index'])
const $emit = defineEmits(['close'])
const currentIndex = ref(props.index)

const previousIndex = computed(() => {
  if (currentIndex.value === 0) return props.media.length - 1
  return currentIndex.value - 1
})

const nextIndex = computed(() => {
  if (currentIndex.value === props.media.length - 1) return 0
  return currentIndex.value + 1
})
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50 // minimum distance required for a swipe

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') $emit('close')
  if (e.key === 'ArrowLeft') currentIndex.value = previousIndex.value
  if (e.key === 'ArrowRight') currentIndex.value = nextIndex.value
  if (e.key === ' ') currentIndex.value = nextIndex.value
}

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].clientX
  handleSwipe()
}

const handleSwipe = () => {
  const distance = touchStartX.value - touchEndX.value
  if (Math.abs(distance) < minSwipeDistance) return

  if (distance > 0) {
    // Swipe left
    currentIndex.value = nextIndex.value
  } else {
    // Swipe right
    currentIndex.value = previousIndex.value
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})

</script>
<style lang='sass' scoped>
img
  @apply grid w-fit object-center z-10 max-h-[calc(100vh-4rem)]

  &:not(#current)
    @apply grayscale hidden sm:block h-full w-full object-cover brightness-50
</style>
