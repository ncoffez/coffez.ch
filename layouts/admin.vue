<template>
  <div class="nav pb-8 mx-8">
    <ul class="flex flex-row gap-4 p-4">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin">Admin</NuxtLink>
      </li>
    </ul>
  </div>
  <NuxtPage></NuxtPage>
</template>
<script lang='ts' setup>
</script>
<style lang='sass' scoped>
a
  @apply text-rose-400 hover:text-rose-300 underline-offset-2

.router-link-active
  @apply underline
</style>
