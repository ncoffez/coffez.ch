<template>
	<div class="flex flex-col sm:flex-row gap-10">
		<UiGenericCard
			class="w-72"
			title="Create a new event"
			description="Start a new event and create a gallery of caricatures."
			to="/admin/event/new"
			image="/img/analoge_zeichnung.webp" />
		<UiGenericCard
			class="w-72"
			title="Create a new gallery"
			description="Create a new gallery to showcase your artwork."
			image="/img/gallery-placeholder.jpg"
			to="/admin/gallery/new">
		</UiGenericCard>
	</div>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Create" });
</script>
<style scoped></style>
