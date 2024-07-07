<template>
  <ClientOnly>
    <section id="events" class="w-full">
      <div class="flex gap-6 overflow-x-scroll">
        <UiEventCard v-for="event of events" :key="event.id" :id="event.id" :title="event.title"
          :startDate="event.startDate" :coverImage="event.coverImage" :endDate="event.endDate"
          :description="event.description" />
      </div>
    </section>
  </ClientOnly>
</template>
<script lang='ts' setup>

interface Event {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  coverImage?: string;
  description?: string;
}

const { data: events } = await useFetch<Event[]>('/api/getEvent/list', { method: 'post', body: "5" });

</script>
<style lang='sass' scoped></style>
