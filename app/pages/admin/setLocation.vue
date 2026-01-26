<template>
	<UiGetDeviceLocation />
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Set event location" });
</script>
<style scoped></style>
