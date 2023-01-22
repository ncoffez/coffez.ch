<template>
<section id="footer">
  <div class="left"></div>
  <div id="copyright">Copyright © Coffez.ch {{ new Date().getFullYear() }} </div>
  <div class="legal-notice">
    <div id="legal-notice">Impressum</div>
    <div id="confidentiality">Datenschutz</div>
  </div>
</section>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
#footer
  padding: 3em 0 1em 0
  height: unset
  display: grid
  flex-direction: row
  place-content: center
  text-align: center
  grid-template-columns: 1fr 1fr 1fr


h1
  text-align: center
  margin: 0
  padding: 0

.legal-notice
  text-align: end

#copyright
  place-self: center
</style>