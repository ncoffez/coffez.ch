<template>
  <article id="contact" class="grid">
    <form v-show="message.state !== 'sent'" @submit.prevent="submit()">
      <h1>Uns kontaktieren</h1>
      <label for="name">Name</label>
      <input type="name" name="name" v-model="message.name" autocomplete="name" />
      <label for="email">Mail</label>
      <input type="email" name="email" v-model="message.email" autocomplete="email" />
      <label for="phone">Telefon</label>
      <input type="phone" name="phone" v-model="message.phone" autocomplete="tel" />
      <label for="message">Nachricht</label>
      <textarea id="textarea" required name="message" v-model="message.message" />

      <button type="submit" :aria-busy="message.state === 'sending'" :disabled="message.state !== 'ready'">
        {{ message.state === "sent" ? "Gesendet" : "Senden" }}
      </button>
      <small v-if="message.error">Die Nachricht konnte nicht gesendet werden. {{ message.error }}</small>
    </form>
    <div id="message-sent" v-show="message.state === 'sent'">
      <h1>Erfolgreich gesendet</h1>
      <p>Besten Dank für deine Meldung. Du wirst in Kürze kontaktiert.</p>
    </div>
    <div class="form-image" alt="Foto des Matterhorns von Fabrice Villard"></div>
  </article>
</template>

<script setup lang="ts">
import { Message } from '../composables/message'

const message = ref(new Message());

const submit = async () => {
  message.value.state = "sending";
  console.log(JSON.stringify(message.value));
  try {
    const response = await useFetch('/api/sendMailConfirmation', { method: 'post', body: JSON.stringify(message.value) });
    message.value = new Message("sent");
  } catch (e) {
    console.log(`Mailversand fehlgeschlagen`, e);
    message.value.state = "ready";
    message.value.error = String(e);
  }
};
</script>

<style lang="sass" scoped>
.form-image
  width: 100%
  height: 100%
  background-image: url('/img/matterhorn_medium.webp'), url('/img/matterhorn_medium.jpeg')
  background-size: cover

#contact
  padding: 0
  overflow: hidden
  border-radius: .5em
  margin-block: 1em

form
  padding: 1em
  margin: 0

@media (max-width: 991px)
  .form-image
    display: none

#message-sent
  padding: 1em
  height: 100%
  display: grid

  p
    display: block
    text-align: center
</style>
