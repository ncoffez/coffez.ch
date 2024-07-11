<template>
  <div class="container w-full overflow-x-scroll mx-auto">
    <div class="flex flex-row gap-4 w-fit h-full">
      <UiEventCard v-for="event of events" :key="event.id" :id="event.id" :title="event.title"
        :startDate="event.startDate" :coverImage="event.coverImage" :endDate="event.endDate"
        :description="event.description" admin="true" class="h-full" />
    </div>
  </div>
</template>
<script lang='ts' setup>
const router = useRouter();
definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const { data: events } = await useAsyncData('events', async () => {
  const events = await $fetch<any[]>('/api/getEvent/list', { method: 'post', body: "20" });
  return events;
});
</script>
<style lang='sass' scoped>
a
  @apply text-rose-400 hover:text-rose-300 underline underline-offset-2

td
  @apply p-2 border-y-2  border-zinc-600 border-solid

tr:has(td)
  @apply hover:bg-zinc-800 cursor-pointer

th
  @apply p-2 border-b-4 border-zinc-600 border-solid
</style>
