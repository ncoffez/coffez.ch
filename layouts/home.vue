<template>
  <div class="min-h-screen flex flex-col overscroll-x-none overflow-x-hidden">
    <nav class="flex bg-white dark:bg-stone-500/5 h-15 shadow-md py-2 w-full md:px-12 px-6">
      <CoffezLogo @click="router.push('/')" />
      <div id="spacer" class="w-full"></div>
      <UiMakeAPayment />
      <UiLanguageSwitcher />
      <UiThemePicker />
    </nav>
    <div class="mx-4 py-6 md:mx-12 flex-grow" ref="container">
      <main class="py-4 gap-24 flex flex-col">
        <NuxtPage></NuxtPage>
      </main>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
</script>
<style scoped></style>
