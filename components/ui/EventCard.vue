<template>
  <div @click="router.push(admin ? `/admin/event/${id}` : `/live/${id}`)"
    class="w-64 h-full my-4 bg-zinc-800 overflow-clip rounded-xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
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
        <div class="block mt-1 text-lg leading-tight font-semibold text-white hover:underline">
          {{ title }}</div>
        <p class="mt-2 text-slate-300 text-sm">{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { differenceInCalendarDays } from 'date-fns';
const props = defineProps(['title', 'startDate', 'endDate', 'coverImage', 'description', 'id', 'admin'])
const router = useRouter();
const duration = computed(() => {
  if (!props.endDate) return 0;
  return differenceInCalendarDays(props.endDate, props.startDate) + 1
})

const description = computed(() => {
  if (!props.description) return `Pascal Coffez captures the unique personalities and spirit of the occasion. This artistic touch added a memorable element to this event.`;
  if (props.description?.length > 150) return props.description.substring(0, 150) + '...';
  return props.description;
})

const title = computed(() => {
  if (props.title?.length > 40) return props.title.substring(0, 40) + '...';
  return props.title;
})

</script>
<style lang='sass' scoped>
</style>
