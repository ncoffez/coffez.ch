<template>
  <div class="nav pb-2 mx-8">
    <ul class="flex flex-row gap-4 p-4 max-w-screen-xl mx-auto">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin">Admin</NuxtLink>
      </li>
      <li v-if="route.path.includes('gallery')">
        <NuxtLink :to="`/gallery/${route.params.id}`">Gallery</NuxtLink>
      </li>
      <li v-if="route.path.includes('event')">
        <NuxtLink :to="`/live/${route.params.id}`">Event</NuxtLink>
      </li>
    </ul>
  </div>
  <NuxtPage></NuxtPage>
</template>
<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

</script>
<style scoped>
a,
.link {
  @apply dark:text-primary-400 text-primary-600 hover:text-primary-700 dark:hover:text-primary-500  underline underline-offset-2;
}

.router-link-active {
  @apply underline;
}
</style>
