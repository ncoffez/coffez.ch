<template>
	<div class="flex flex-col sm:flex-row gap-10">
		<UiGenericCard
			class="w-72"
			:title="$t('admin.create.event.title')"
			:description="$t('admin.create.event.description')"
			to="/admin/event/new"
			image="/img/analoge_zeichnung.webp" />
		<UiGenericCard
			class="w-72"
			:title="$t('admin.create.gallery.title')"
			:description="$t('admin.create.gallery.description')"
			image="/img/gallery-placeholder.jpg"
			to="/admin/gallery/new">
		</UiGenericCard>
	</div>
</template>
<script lang="ts" setup>
definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Create" });
</script>
<style scoped></style>
