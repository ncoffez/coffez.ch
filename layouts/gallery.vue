<template>
	<div id="full-screen" class="inset-0 z-0">
		<header class="py-8 flex justify-between max-w-screen-xl place-content-center mx-auto">
			<img
				src="/img/Coffez.ch.png"
				alt="Coffez.ch"
				class="w-48 h-12 mx-auto object-contain invert cursor-pointer hover:scale-105 transition-transform duration-100"
				@click="router.push('/')" />
		</header>
		<NuxtPage></NuxtPage>
	</div>
</template>
<script lang="ts" setup>
const router = useRouter();
</script>
<style scoped>
a {
	@apply hover:text-rose-300 hover:font-normal underline-offset-2 text-xl font-light;
}

.router-link-active {
	@apply underline;
}
</style>
