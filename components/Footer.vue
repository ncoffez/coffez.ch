<template>
<footer class="container">
  <div class="grid">
    <div></div>
    <div class="center-align">Copyright © Coffez.ch {{ new Date().getFullYear() }} </div>
    <div class="right-align">
      <a href="https://github.com/ncoffez/coffez.ch/blob/master/impressum.MD" target="_blank">{{$t('footer.legal')}}</a><br>
      <a href="https://github.com/ncoffez/coffez.ch/blob/master/privacy.MD" target="_blank">{{$t('footer.privacy')}}</a>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
footer
  margin-block: 2em
.right-align
  text-align: end

.center-align
  text-align: center
</style>