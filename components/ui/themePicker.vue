<template>
  <div
    class="h-fit w-fit my-auto p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600/30 text-xl"
    @click="theme = theme === 'light' ? 'dark' : 'light'">
    <IconsLucideMoon v-if="theme === 'light'" />
    <IconsLucideSun v-else />
  </div>
</template>
<script lang="ts" setup>
const theme = useState("theme");
</script>
<style scoped></style>
