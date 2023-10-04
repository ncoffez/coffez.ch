<template>
	<footer class="container">
		<div class="grid">
			<LanguageSwitcher id="language-switcher" />
			<div id="copyright">Copyright © Coffez.ch {{ new Date().getFullYear() }}</div>
			<div id="legal-mentions">
				<div>
					<a href="https://github.com/ncoffez/coffez.ch/blob/master/impressum.MD" target="_blank">{{ $t('footer.legal') }}</a>
				</div>
				<div>
					<a href="https://github.com/ncoffez/coffez.ch/blob/master/privacy.MD" target="_blank">{{ $t('footer.privacy') }}</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
footer
	margin-block: 2em 8em

.grid
	place-items: center
	padding-block: 1em
	&> *
		place-self: center end

#legal-mentions
	text-align: end

#copyright
	text-align: center

#language-switcher
	place-self: center start
	min-width: 60%
	margin-block: auto

@media screen and (max-width: 900px)
	.grid
		place-items: center
		gap: 1em

	#legal-mentions, #copyright, #language-switcher
		place-self: unset
		width: 100%
		text-align: center

</style>
