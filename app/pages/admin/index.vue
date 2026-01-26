<template>
	<h1 class="text-4xl">Welcome {{ user?.displayName?.split(" ").shift() }}!</h1>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Administration" });
const user = await useCurrentUser();
</script>
<style scoped></style>
