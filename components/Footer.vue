<template>
  <footer class="text-center flex w-full pt-8 pb-12 mt-8 dark">
    <div class="grid w-full">
      <div id="copyright" class="my-4">Copyright © Coffez.ch {{ new Date().getFullYear() }}</div>
      <div id="legal-mentions">
        <div>
          <a href="https://github.com/ncoffez/coffez.ch/blob/master/impressum.MD" target="_blank">{{
            $t("footer.legal")
          }}</a>
        </div>
        <div>
          <a href="https://github.com/ncoffez/coffez.ch/blob/master/privacy.MD" target="_blank">{{
            $t("footer.privacy")
          }}</a>
        </div>
        <div v-if="user" class="pt-6">Logged in as {{ user?.displayName }}</div>
        <div>
          <div class="link" @click.prevent="logoutFromFirebase()" v-if="user">Log out</div>
          <div class="link" @click.prevent="loginToFirebase()" v-else>Login</div>
        </div>
        <div v-if="user">
          <NuxtLink to="/admin">Settings</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { logoutFromFirebase, loginToFirebase } from "#imports";
const user = await useCurrentUser();
</script>
<style scoped>
a,
.link {
  @apply text-primary-600 hover:text-primary-700  underline underline-offset-2 cursor-pointer;
  @apply dark:text-primary-500 dark:hover:text-primary-600;
}
</style>
