<template>
<footer class="text-center flex w-full">
	<div class="grid w-full">
		<LanguageSwitcher id="language-switcher" />
		<div id="copyright" class="my-4">Copyright © Coffez.ch {{ new Date().getFullYear() }}</div>
		<div id="legal-mentions">
			<div>
				<a href="https://github.com/ncoffez/coffez.ch/blob/master/impressum.MD" target="_blank">{{ $t('footer.legal')
				}}</a>
			</div>
			<div>
				<a href="https://github.com/ncoffez/coffez.ch/blob/master/privacy.MD" target="_blank">{{ $t('footer.privacy')
				}}</a>
			</div>
		</div>
	</div>
</footer>
</template>

<script setup lang="ts"></script>
<style lang="sass" scoped>
	a
		@apply text-rose-400 hover:text-rose-300 underline underline-offset-2
</style>
