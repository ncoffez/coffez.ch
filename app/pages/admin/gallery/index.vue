<template>
	<section class="items-center md:px-0 w-full">
		<Gallery :admin="true" class="w-fit"></Gallery>
	</section>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Galleries" });
</script>
<style scoped></style>
