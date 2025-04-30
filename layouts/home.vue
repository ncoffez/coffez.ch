<template>
  <nav
    class="flex bg-white dark:bg-stone-500/5 h-15 shadow-md py-2 w-full md:px-12 px-6">
    <CoffezLogo />
    <div id="spacer" class="w-full"></div>
    <UiMakeAPayment />
    <UiLanguageSwitcher />
    <UiThemePicker />
  </nav>
  <div class="mx-4 py-6 md:mx-12 overscroll-x-none overflow-x-hidden" ref="container">
    <main class="py-4 gap-24 flex flex-col items-center">
      <NuxtPage></NuxtPage>
    </main>
  </div>
  <Footer />
</template>
<script lang="ts" setup></script>
<style scoped></style>
