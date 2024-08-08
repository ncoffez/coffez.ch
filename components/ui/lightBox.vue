<template>
  <Teleport to="#teleports">
    <div id="lightbox"
      class="grid sm:grid-cols-[10rem,1fr,10rem] grid-rows-1 absolute w-screen h-screen inset-0 place-items-center p-4 sm:p-8 xl:py-8 xl:px-4 gap-8 z-20">
      <img id="previous" :src="media[previousIndex]" v-if="isImage(media[previousIndex])"
        @click.stop="currentIndex = previousIndex" />
      <video id="previous" :src="media[previousIndex]" v-if="isVideo(media[previousIndex])" :autoplay="false"
        :muted="true" :loop="true" :playsinline="true" :controls="false" @click.stop="currentIndex = previousIndex">
        <source :src="media[previousIndex]" :type="getMediaType(media[previousIndex])" />
      </video>
      <img id="current" :src="media[currentIndex]" @click.stop="currentIndex = nextIndex"
        v-if="isImage(media[currentIndex])" />
      <video id="current" :src="media[currentIndex]" @click.stop="currentIndex = nextIndex" :autoplay="true"
        :muted="false" :loop="true" :playsinline="true" :controls="true" v-if="isVideo(media[currentIndex])">
        <source :src="media[currentIndex]" :type="getMediaType(media[currentIndex])" />
      </video>
      <img id="next" :src="media[nextIndex]" v-if="isImage(media[nextIndex])" @click.stop="currentIndex = nextIndex" />
      <video id="next" :src="media[nextIndex]" v-if="isVideo(media[nextIndex])" :autoplay="false" :muted="true"
        :controls="false" @click.stop="currentIndex = nextIndex">
        <source :src="media[nextIndex]" :type="getMediaType(media[nextIndex])" @click.stop="currentIndex = nextIndex" />
      </video>
      <div id="background" class="w-full h-full backdrop-blur-md bg-neutral-900 bg-opacity-90 fixed -z-10 inset-0"
        @click="$emit('close')"></div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
const props = defineProps(["media", "description", "type", "index"]);
const $emit = defineEmits(["close", "open"]);
const currentIndex = ref(props.index);

const previousIndex = computed(() => {
  if (currentIndex.value === 0) return props.media.length - 1;
  return currentIndex.value - 1;
});

const nextIndex = computed(() => {
  if (currentIndex.value === props.media.length - 1) return 0;
  return currentIndex.value + 1;
});
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50; // minimum distance required for a swipe

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") $emit("close");
  if (e.key === "ArrowLeft") currentIndex.value = previousIndex.value;
  if (e.key === "ArrowRight") currentIndex.value = nextIndex.value;
  if (e.key === " ") currentIndex.value = nextIndex.value;
};

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].clientX;
  handleSwipe();
};

const handleSwipe = () => {
  const distance = touchStartX.value - touchEndX.value;
  if (Math.abs(distance) < minSwipeDistance) return;

  if (distance > 0) {
    // Swipe left
    currentIndex.value = nextIndex.value;
  } else {
    // Swipe right
    currentIndex.value = previousIndex.value;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("touchstart", handleTouchStart);
  document.addEventListener("touchend", handleTouchEnd);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("touchstart", handleTouchStart);
  document.removeEventListener("touchend", handleTouchEnd);
});
</script>
<style lang="sass" scoped>
#current
  @apply max-w-full w-fit max-h-full h-fit object-contain rounded-lg bg-slate-50

#next, #previous
  @apply grayscale hidden sm:block h-full w-full object-cover brightness-[.2] rounded-sm
</style>
