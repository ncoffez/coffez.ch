<template>
	<section id="contact" class="w-full px-4">
		<form class="flex flex-col gap-y-4 md:flex-row" v-show="message.state !== 'sent'" @submit.prevent="submit()">
			<h1 class="text-3xl font-bold my-4 text-slate-100">{{ $t('contact.title') }}</h1>
			<label for="name">{{ $t('contact.name') }}
				<input type="name" name="name" id="name" v-model="message.name" autocomplete="name" />
			</label>
			<label for="email">{{ $t('contact.mail') }}
				<input type="email" name="email" id="email" v-model="message.email" autocomplete="email" />
			</label>
			<label for="phone">{{ $t('contact.phone') }}
				<input type="phone" name="phone" id="phone" v-model="message.phone" autocomplete="tel" />
			</label>
			<label for="message">{{ $t('contact.message') }}
				<textarea class="h-36" required name="message" id="message" v-model="message.message"></textarea>
			</label>

			<button type="submit" :aria-busy="message.state === 'sending'" :disabled="message.state !== 'ready'">
				{{ message.state === 'sent' ? $t('contact.sent') : $t('contact.send') }}
			</button>
			<small v-if="message.error">{{ $t('contact.error') }} {{ message.error }}</small>
		</form>
		<div id="message-sent" v-show="message.state === 'sent'">
			<h1>{{ $t('contact.success.title') }}</h1>
			<p>{{ $t('contact.success.subtitle') }}</p>
		</div>
		<div class="hidden md:block" alt="Foto des Matterhorns von Fabrice Villard"></div>
	</section>
</template>

<script setup lang="ts">
import { Message } from '../composables/message';

const message = ref(new Message());

const submit = async () => {
	message.value.state = 'sending';
	console.log(JSON.stringify(message.value));
	try {
		const response = await useFetch('/api/sendMailConfirmation', { method: 'post', body: JSON.stringify(message.value) });
		message.value = new Message('sent');
	} catch (e) {
		console.log(`Mailversand fehlgeschlagen`, e);
		message.value.state = 'ready';
		message.value.error = String(e);
	}
};
</script>

<style lang="sass" scoped>
input, textarea
	@apply bg-zinc-900 w-full px-4 py-4 rounded-md font-light text-base border-solid border-2 border-zinc-800 mt-2 focus:ring-1 ring-slate-400 focus:outline-none  focus:bg-zinc-900 leading-tight

label
	@apply block tracking-wide text-gray-300 text-sm font-medium
</style>
