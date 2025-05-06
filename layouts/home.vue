<template>
	<nav class="flex bg-white dark:bg-stone-500/5 h-15 shadow-md py-2 w-full md:px-12 px-6">
		<CoffezLogo />
		<div id="spacer" class="w-full"></div>
		<UiLanguageSwitcher />
		<UiThemePicker />
	</nav>
	<main class="gap-24 flex flex-col items-center py-6 w-full overscroll-x-none overflow-x-hidden px-2">
		<NuxtPage></NuxtPage>
	</main>
	<Footer />
</template>
