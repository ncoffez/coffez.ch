<template>
  <div id="coming-soon">
    <div id="background"></div>
    <img id="text" src="/live_coming-soon_text.svg" alt="">
  </div>
</template>
<script lang='ts' setup>

</script>

<style scoped>
#text {
  width: 66%;
  height: 66%;
  animation: pulsate 65s infinite ease;
}

#coming-soon {
  display: grid;
  place-items: center;
  width: min(70vw, 70vh);
  height: min(70vw, 70vh);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

#background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(225deg, #2b3140, #14171e, #14171e);
  animation: rotate 25s infinite ease;
}

@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes pulsate {
  from {
    scale: .95;
  }

  50% {
    scale: 1.05;
  }

  to {
    scale: .95;
  }
}
</style>
