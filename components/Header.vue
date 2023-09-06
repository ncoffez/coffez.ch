<template>
<section>
  <div class="grid">
    <div>
        <h1>Dein Anlass wird zur <span class="colored-text">Party</span></h1>
        <p>Buche mit Coffez.ch eine einzigartige Dienstleistung und versichere dass deine Veranstaltung zum Erfolg wird.
          <br>Mit seinen Karikaturen bringt <b>Pascal Coffez</b>
          deine Gäste aus ihrer Komfortzone und sichert eine angenehme und lockere Atmosphäre in jeder Situation.
        </p>
      <button @click="scrollTo('contact')">Uns kontaktieren</button>
    </div>
    <div class="img-box">
      <picture>
        <source srcset="/img/PascalCoffez.webp" type="image/webp">
        <source srcset="/img/PascalCoffez.jpg" type="image/jpeg">
        <img src="/img/PascalCoffez.jpg" alt="">
      </picture>
    </div>
  </div>
  <Brands />
</section>
</template>

<script setup>
import { scrollTo } from '~~/methods/scrollTo';
</script>

<style lang="sass" scoped>
.colored-text
  background: -webkit-linear-gradient(45deg, #8e24aa, var(--primary))
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent


h1
  font-size: 4em
  line-height: 1em
  margin-block: 1em .5em
  font-weight: 900

.img-box
  padding: 5em
  img
    aspect-ratio: 1
    border-radius: 40% 10%

@media (max-width: 991px)
  .img-box
    display: none

@media (max-width: 500px)
  h1
    margin-top: 1rem


@media (prefers-color-scheme: light)
  .colored-text
    background: -webkit-linear-gradient(45deg, #5e35b1, var(--primary))
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

</style>