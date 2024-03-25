<template>
  <div id="coming-soon">
    <img id="text" src="/live_coming-soon_text.svg" alt="">
  </div>
</template>
<script lang='ts' setup>

</script>

<style lang='sass' scoped>
#text
  width: 66%
  height: 66%
  animation: pulsate 25s infinite reverse linear
  

#coming-soon
  display: grid
  place-items: center
  width: min(70vw, 70vh)
  height: min(70vw, 70vh)
  border-radius: 50%
  background-image: linear-gradient(225deg, #2b3140, #14171e, #14171e )
  animation: rotate 25s infinite linear

@keyframes rotate
  from
    rotate: 0deg

  to
    rotate: 360deg

@keyframes pulsate
  from
    rotate: 0deg
    scale: 1

  25%
    scale: .95
  75%
    scale: 1.05
  
  to
    rotate: 360deg
    scale: 1

</style>
