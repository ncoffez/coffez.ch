<template>
	<Events admin :wrap="true"></Events>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Events" });
</script>
<style scoped></style>
