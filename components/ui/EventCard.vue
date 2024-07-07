<template>
  <div class="w-64 h-fit my-4 bg-zinc-800 overflow-clip rounded-xl hover:scale-105 transition duration-300 ease-in-out">
    <div class="w-64">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover" :src="coverImage || '/img/analoge_zeichnung.webp'"
          alt="Pascal Coffez drawing at the Rhine Falls">
      </div>
      <div class="p-6">
        <div class="uppercase tracking-wide text-sm text-indigo-300 font-semibold">
          <span v-if="duration"
            class="inline-block py-.5 bg-indigo-400 text-xs mr-2 text-white rounded-full px-2 hover:bg-red-500">{{
              duration }} {{ duration > 1 ? 'days' : 'day' }}</span>
          <span v-else
            class="inline-block py-.5 text-xs bg-red-700 mr-2 text-white rounded-full px-2 hover:bg-red-600">Live</span>
          {{ new Date(startDate).toLocaleDateString('de-CH') }}
        </div>
        <NuxtLink :to="'/live/' + id" class="block mt-1 text-lg leading-tight font-semibold text-white hover:underline">
          {{ title }}</NuxtLink>
        <p class="mt-2 text-slate-300 text-sm">{{ description || defaultDescription }}</p>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { differenceInCalendarDays } from 'date-fns';
const props = defineProps(['title', 'startDate', 'endDate', 'coverImage', 'description', 'id'])
const duration = computed(() => {
  if (!props.endDate) return 0;
  return differenceInCalendarDays(props.endDate, props.startDate) + 1
})

const defaultDescription = computed(() => {
  return `
Digital caricatures were drawn over ${duration.value} ${duration.value === 1 ? 'day' : 'days'}, capturing the unique personalities and spirit of the occasion. This artistic touch added a memorable element to this special event.`
})

</script>
<style lang='sass' scoped>
</style>
