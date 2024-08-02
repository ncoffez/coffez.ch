<template>
  <header class="py-8 flex justify-between max-w-screen-xl place-content-center mx-auto">
    <img src="/img/Coffez.ch.png" alt="Coffez.ch" class="w-64 mx-4 h-fit invert">
    <div class="flex flex-row gap-4 p-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
    </div>
  </header>
  <NuxtPage></NuxtPage>
</template>
<script lang='ts' setup>
</script>
<style lang='sass' scoped>
a
  @apply hover:text-rose-300 hover:font-normal underline-offset-2 text-xl font-light

.router-link-active
  @apply underline
</style>