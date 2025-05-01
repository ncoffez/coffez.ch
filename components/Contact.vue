<template>
	<section
		id="contact"
		class="w-full lg:grid lg:grid-cols-2 lg:gap-x-4 max-w-screen-lg overflow-clip rounded-3xl dark:lg:bg-zinc-900 dark:lg:border-zinc-800 lg:border-2 lg:shadow-xl">
		<form class="flex flex-col gap-y-4 lg:p-8" v-show="message.state !== 'sent'" @submit.prevent="submit()">
			<h1 class="text-3xl font-bold my-4 dark:text-slate-100">{{ $t("contact.title") }}</h1>
			<label for="name"
				>{{ $t("contact.name") }}
				<input type="name" name="name" id="name" v-model="message.name" autocomplete="name" />
			</label>
			<label for="email"
				>{{ $t("contact.mail") }}
				<input type="email" name="email" id="email" v-model="message.email" autocomplete="email" />
			</label>
			<label for="phone"
				>{{ $t("contact.phone") }}
				<input type="phone" name="phone" id="phone" v-model="message.phone" autocomplete="tel" />
			</label>
			<label for="message"
				>{{ $t("contact.message") }}
				<textarea class="h-36" required name="message" id="message" v-model="message.message"></textarea>
			</label>

			<button type="submit" :aria-busy="message.state === 'sending'" :disabled="message.state !== 'ready'">
				{{ message.state === "sent" ? $t("contact.sent") : $t("contact.send") }}
			</button>
			<small v-if="message.error">{{ $t("contact.error") }} {{ message.error }}</small>
		</form>
		<div id="message-sent" v-show="message.state === 'sent'">
			<h1>{{ $t("contact.success.title") }}</h1>
			<p>{{ $t("contact.success.subtitle") }}</p>
		</div>
		<img
			src="/img/matterhorn_medium.jpeg"
			alt="Foto des Matterhorns von Fabrice Villard"
			class="hidden lg:block object-cover w-full h-full" />
	</section>
</template>

<script setup lang="ts">
import { Message } from "../composables/message";
const { $analytics } = useNuxtApp();
const analytics = await $analytics;

const message = ref(new Message());

const submit = async () => {
	message.value.state = "sending";
	console.log(JSON.stringify(message.value));
	try {
		const response = await useFetch("/api/sendMailConfirmation", {
			method: "post",
			body: JSON.stringify(message.value),
		});
		message.value = new Message("sent");
		analytics("Contact form used.");
	} catch (e) {
		analytics(`Contact form failed. ${e}`);
		console.log(`Mailversand fehlgeschlagen`, e);
		message.value.state = "ready";
		message.value.error = String(e);
	}
};
</script>

<style scoped>
label {
	@apply block tracking-wide dark:text-gray-300 text-sm font-medium;
}
</style>
