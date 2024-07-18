<template>
  <div class="container w-full overflow-x-scroll mx-auto">
    <div class="flex flex-row gap-4 px-2 w-fit h-full">
      <UiEventCard v-for="event of events" :key="event.id" :id="event.id" :title="event.title"
        :startDate="event.startDate" :coverImage="event.coverImage" :endDate="event.endDate"
        :description="event.description" admin="true" class="h-full" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import type { Event } from '#imports';
import { httpsCallable } from 'firebase/functions';
const { $functions } = useNuxtApp();

const router = useRouter();
definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { data: events } = await useLazyAsyncData<Event[]>('events', async () => {
  const eventList = httpsCallable($functions, "getEventList");
  let { data } = await eventList({ limit: 8 });
  return data as Event[];
});
</script>
<style lang='sass' scoped>
</style>
