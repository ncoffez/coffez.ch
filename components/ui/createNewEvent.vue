<template>
  <NuxtLink id="create-new-event"
    class="w-64 h-full my-4 dark:bg-zinc-800 overflow-clip bg-white shadow-lg rounded-xl hover:scale-105 transition duration-300 ease-in-out">
    <div class="w-64">
      <div class="md:shrink-0">
        <div class="h-48 w-full object-cover dark:bg-zinc-400 font-2xl dark:text-white place-items-center grid">
          <Icon id="add-icon" name="ic:outline-add" class="w-2/3 h-2/3 dark:text-primary-300 text-primary-800" />
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-semibold dark:text-white">Create new event</h3>
        <p>Start a new event and create a gallery of caricatures.</p>
        <button class="dark:bg-primary-800 dark:hover:bg-primary-700 dark:text-white mb-0"
          @click="router.push('/admin/event/new')">New</button>
      </div>
    </div>
  </NuxtLink>
</template>
<script lang='ts' setup>
const router = useRouter();

</script>
<style scoped>
#create-new-event:hover #add-icon {
  @apply rotate-90 dark:text-white;
}

#add-icon {
  @apply transition-transform duration-100 ease-out;
}
</style>