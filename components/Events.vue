<template>
  <section id="events" class="w-full max-w-screen-xl overflow-x-scroll  mx-auto" v-if="events">
    <div class="flex gap-6 px-2 w-fit">
      <slot></slot>
      <UiEventCard v-for="event of events" :key="event.id" :id="event.id" :title="event.title"
        :startDate="event.startDate" :coverImage="event.coverImage" :endDate="event.endDate"
        :description="event.description" :admin="admin" />
    </div>
  </section>
</template>
<script lang='ts' setup>
import { httpsCallable } from 'firebase/functions';
import { DrawingEvent } from '#imports';
const { $functions } = useNuxtApp();
defineProps({
  admin: {
    type: Boolean,
    required: false,
    default: false
  }
})

const { data: events } = await useLazyAsyncData<DrawingEvent[]>('events', async () => {
  const eventList = httpsCallable($functions, "getEventList");
  let { data } = await eventList({ limit: 8 });
  return data as DrawingEvent[];
});

</script>
<style lang='sass' scoped></style>
