<template>
	<Header></Header>
	<Brands />
	<Presentation />
	<section class="w-full max-w-screen-lg mx-auto px-6 pt-16 pb-2 text-center">
		<h2 class="text-3xl md:text-4xl font-bold dark:text-slate-100 text-stone-900">{{ $t('galleriesTitle') }}</h2>
	</section>
	<LazyGallery />
	<LazyCards />
	<Contact />
</template>

<script setup>
definePageMeta({ layout: "home" });
</script>
