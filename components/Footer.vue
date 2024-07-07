<template>
<footer class="container">
	<div class="grid">
		<LanguageSwitcher id="language-switcher" />
		<div id="copyright">Copyright © Coffez.ch {{ new Date().getFullYear() }}</div>
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
