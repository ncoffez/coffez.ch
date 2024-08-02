<template>
  <NuxtLink :to="link"
    class="w-64 h-64 my-4 bg-zinc-800 hover:scale-105 duration-300 ease-in-out cursor-pointer overflow-clip rounded-full mx-auto"
    id="gallery-cover">
    <div class="basis-full">
      <div class="md:shrink-0 relative">
        <img class="h-64 w-64 object-cover object-center" :src="coverImage">
        <div id="title"
          class="absolute bottom-0 z-2 w-full h-16 place-items-center flex flex-col content-around place-content-center bg-zinc-900 bg-opacity-60 transition-all duration-300 ease-in-out">
          <div class="text-white text-md font-bold uppercase tracking-wide block">{{ title }}</div>
          <div id="description"
            class="text-zinc-400 text-sm font-light tracking-wide hidden w-2/3 max-w-prose text-center">{{ description
            }}</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script lang='ts' setup>
const props = defineProps(['id', 'title', 'description', 'coverImage', 'admin', 'disabled'])

const link = computed(() => {
  if (props.disabled) return '';
  if (props.admin) return `/admin/gallery/${props.id}`;
  return `/gallery/${props.id}`;
})

</script>
<style lang='sass' scoped>
#gallery-cover:hover #title
  @apply h-full bg-opacity-90

#gallery-cover:hover #description
  @apply grid

</style>
