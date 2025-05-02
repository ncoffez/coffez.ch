<template>
	<Gallery :admin="true"></Gallery>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Galleries" });
</script>
<style scoped></style>
