<template>
<article id="contact" class="grid">
  <form v-show="formData.state !== 'sent'" @submit.prevent="submit()">
    <h1>Uns kontaktieren</h1>
    <label for="name">Name</label>
    <input type="name" name="name" v-model="formData.name" autocomplete="name">
    <label for="email">Mail</label>
    <input type="email" name="email" v-model="formData.email" autocomplete="email">
    <label for="phone">Telefon</label>
    <input type="phone" name="phone" v-model="formData.phone" autocomplete="tel">
    <label for="message">Nachricht</label>
    <textarea id="textarea" required name="message" v-model="formData.message" />

    <button type="submit" :aria-busy="formData.state === 'sending'" :disabled="formData.state !== 'ready'">
      {{ formData.state === 'sent' ? "Gesendet" : "Senden" }}</button>
    <small v-if="formData.error">Die Nachricht konnte nicht gesendet werden. {{ formData.error }}</small>
  </form>
  <div id="message-sent" v-show="formData.state === 'sent'">
    <h1>Erfolgreich gesendet</h1>
    <p>Besten Dank für deine Meldung. Du wirst in Kürze kontaktiert.</p>
  </div>
  <div class="form-image" alt="Foto des Matterhorns von Fabrice Villard"></div>
</article>
</template>

<script setup lang="ts">
import { httpsCallable } from 'firebase/functions';
import { functions } from '@/firebase'


const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  state: 'ready',
  error: ''
})

const submit = async () => {
  formData.value.state = "sending";
  const message = {
    to: formData.value.email,
    message: formData.value.message,
    phone: formData.value.phone,
    name: formData.value.name
  }
  console.log(JSON.stringify(message))
  try {
    const res = await httpsCallable(functions, 'sendmail')(Object.assign({}, message))
    if (res) console.log(res.data);
    formData.value = { name: '', email: '', phone: '', message: '', state: "sent", error: '' }
  } catch (e) {
    console.log(`Mailversand fehlgeschlagen`, e);
    formData.value.state = 'ready'
    formData.value.error = String(e)
  }
};
</script>

<style lang="sass" scoped>
.form-image
  width: 100%
  height: 100%
  background-image: url('/img/matterhorn_medium.jpeg')
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