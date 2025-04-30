<template>
  <div class="h-fit w-fit my-auto p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600/30 relative">
    <NuxtLink :to class="w-full h-full">
      <IconsLucideCreditCard class="text-xl" />
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
defineProps(["to"]);
</script>
<style scoped></style>
