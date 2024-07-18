<template>
  <section id="events" class="w-full max-w-screen-xl overflow-x-scroll " v-if="events">
    <div class="flex gap-6 w-fit">
      <UiEventCard v-for="event of events" :key="event.id" :id="event.id" :title="event.title"
        :startDate="event.startDate" :coverImage="event.coverImage" :endDate="event.endDate"
        :description="event.description" />
    </div>
  </section>
</template>
<script lang='ts' setup>
import type { Event } from '#imports';
import { httpsCallable } from 'firebase/functions';
const { $functions } = useNuxtApp();

const { data: events } = await useLazyAsyncData<Event[]>('events', async () => {
  const eventList = httpsCallable($functions, "getEventList");
  let { data } = await eventList({ limit: 8 });
  return data as Event[];
});

</script>
<style lang='sass' scoped></style>
