<template>
  <section class="w-full max-w-screen-xl overflow-x-scroll mx-auto px-4 pb-16">
    <h1 class="text-3xl font-bold mx-2 my-4 text-slate-100">Events</h1>
    <Events admin>
      <NuxtLink id="create-new-event"
        class="w-64 h-full my-4 bg-zinc-800 overflow-clip rounded-xl hover:scale-105 transition duration-300 ease-in-out">
        <div class="w-64">
          <div class="md:shrink-0">
            <div class="h-48 w-full object-cover bg-zinc-400 font-2xl text-white place-items-center grid">
              <Icon name="ic:outline-add" class="w-2/3 h-2/3 text-zinc-300" />
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-white">Create new event</h3>
            <p>Start a new event and create a gallery of caricatures.</p>
            <button class="bg-pink-800 hover:bg-pink-700 text-white" @click="router.push('/admin/event/new')">Create new
              event</button>
          </div>
        </div>
      </NuxtLink>
    </Events>
  </section>
</template>
<script lang='ts' setup>
definePageMeta({ middleware: 'user-is-admin', layout: 'admin' })
const router = useRouter();

</script>
<style lang='sass' scoped>
</style>
