<template>
<section id="contact">
  <form class="form" @submit.prevent="submit()">
    <h1>Uns kontaktieren</h1>

    <div class="input-field" id="name">
      <label for="name">Name</label>
      <input type="name" name="name" v-model="formData.name">
    </div>

    <div class="input-field" id="email">
      <label for="email">Mail</label>
      <input type="email" name="email" v-model="formData.email">
    </div>

    <div class="input-field" id="phone">
      <label for="phone">Telefon</label>
      <input type="phone" name="phone" v-model="formData.phone">
    </div>

    <div class="input-field" id="message">
      <label for="message">Nachricht</label>
      <textarea type="text" name="message" v-model="formData.message" />
    </div>
    <button type="submit">Senden</button>
  </form>
  <div class="infos" alt="Foto des Matterhorns von Fabrice Villard">
  </div>
</section>
</template>

<script setup lang="ts">
import { httpsCallable } from 'firebase/functions';
import { functions } from '~~/plugins/firebase';


const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const submit = async () => {
  const message = {
    to: formData.value.email,
    message: formData.value.message,
    phone: formData.value.phone,
    name: formData.value.name
  }
  try {
    const res = await httpsCallable(functions, 'sendMail')(message)
    if (res) console.log(res);
    formData.value = { name: '', email: '', phone: '', message: '' }
  } catch (e) { console.log(`Mailversand fehlgeschlagen`, e) }
};
</script>

<style lang="sass" scoped>

#contact
  width: 100%
  display: grid
  grid-template-columns: 1fr 1fr  
  height: clamp(650px, 40vh, 800px)
  border-radius: 2em
  overflow: hidden
  background: var(--lighter)
.infos
  background-image: url('/img/matterhorn.jpeg')
  background-size: cover
  background-position: center

.form
  display: flex
  flex-direction: column
  place-items: center
  padding: 2em
  width: 100%
  gap: 1em
  place-content: center

.input-field
  width: 100%

label
  color: var(--text-muted)

@media screen and (max-width: 900px) //tablet
  .infos
    display: none

  #contact
    all: unset

  button
    margin-top: 1.5em


</style>