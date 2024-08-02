<template>
  <NuxtLink id="create-new-event"
    class="w-64 h-full my-4 bg-zinc-800 overflow-clip rounded-xl hover:scale-105 transition duration-300 ease-in-out">
    <div class="w-64">
      <div class="md:shrink-0">
        <div class="h-48 w-full object-cover bg-zinc-400 font-2xl text-white place-items-center grid">
          <Icon id="add-icon" name="ic:outline-add" class="w-2/3 h-2/3 text-zinc-300" />
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-semibold text-white">Create new event</h3>
        <p>Start a new event and create a gallery of caricatures.</p>
        <button class="bg-pink-800 hover:bg-pink-700 text-white mb-0"
          @click="router.push('/admin/event/new')">New</button>
      </div>
    </div>
  </NuxtLink>
</template>
<script lang='ts' setup>
const router = useRouter();

</script>
<style lang='sass' scoped>
#create-new-event:hover #add-icon
  @apply rotate-90 text-white

#add-icon
  @apply transition-transform duration-100 ease-out
</style>
