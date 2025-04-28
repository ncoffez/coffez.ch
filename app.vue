<template>
  <div id="full-screen" class="w-fit h-fit max-h-screen max-w-screen relative"></div>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout></NuxtLayout>
  </div>
</template>

<script setup>
onMounted(() => {
  document.querySelectorAll("button").forEach((button, index) => {
    const classIndex = (index % 4) + 1; // Cycle through 1, 2, 3, 4
    button.classList.add(`button-${classIndex}`);
  });
});
</script>

<style scoped></style>
