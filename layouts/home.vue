<template>
	<div class="min-h-screen flex flex-col">
		<nav class="flex bg-white dark:bg-stone-500/5 h-15 shadow-md py-2 w-full md:px-12 px-6">
			<NuxtLink to="/"><CoffezLogo /></NuxtLink>
			<div id="spacer" class="flex-grow"></div>
			<UiCircleButton to="/live/6hChwjRhY0e9tpFzV1Zo"><IconsCreditcard class="text-xl" /></UiCircleButton>
			<UiLanguageSwitcher />
			<UiThemePicker />
		</nav>
		<div class="mx-4 py-6 md:mx-12 overscroll-x-none flex-grow overflow-x-hidden" ref="container">
			<main class="py-4 gap-24 flex flex-col items-center">
				<NuxtPage></NuxtPage>
			</main>
		</div>
		<Footer />
	</div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
