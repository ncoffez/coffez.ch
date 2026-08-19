<template>
	<ClientOnly>
		<span v-if="user">
			<NuxtLink to="/admin" class="admin-foot-link">{{ $t("siteFooter.adminSpace") }}</NuxtLink>
			<span class="admin-foot-sep"> · </span>
			<span class="admin-foot-link" @click.prevent="logoutFromFirebase()">{{ $t("footer.logout") }}</span>
		</span>
		<span v-else class="admin-foot-link" @click.prevent="loginToFirebase()">{{ $t("siteFooter.login") }}</span>
	</ClientOnly>
</template>

<script setup lang="ts">
const user = await useCurrentUser();
</script>

<style scoped>
.admin-foot-link {
	color: inherit;
	text-decoration: underline;
	cursor: pointer;
}
.admin-foot-link:hover {
	color: #1abfbf;
}
.admin-foot-sep {
	opacity: 0.6;
}
</style>
