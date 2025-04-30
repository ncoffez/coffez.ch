<!-- pages/pay.vue -->
<template>
  <div>
    <h1 class="text-3xl font-bold">Make a Payment to Coffez.ch</h1>
    <UiPayWithStripe :amount="360" />
  </div>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "home" });
</script>
<style scoped></style>
