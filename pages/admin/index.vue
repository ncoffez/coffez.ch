<template>
  <div class="max-w-screen-xl overflow-x-scroll mx-auto px-4 pb-16 gap-16 flex flex-col">
    <section class="w-full">
      <h1 class="text-3xl font-bold mx-2 my-4 text-slate-100">Events</h1>
      <Events admin>
        <template v-slot:first-card>
          <UiCreateNewEvent />
        </template>
      </Events>
    </section>
    <section class="w-full">
      <Gallery :admin="true">
        <template v-slot:first-card>
          <UiCreateNewGallery />
        </template>
      </Gallery>
    </section>
  </div>
</template>
<script lang='ts' setup>
definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })

</script>
<style scoped></style>
