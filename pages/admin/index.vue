<template>
	<section class="md:p-6 flex flex-col">
		<hgroup>
			<h1 class="text-4xl tracking-tight mb-4">Actions</h1>
		</hgroup>
		<div id="actions" class="py-6">
			<UiGetDeviceLocation />
		</div>
	</section>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Administration" });
</script>
<style scoped></style>
