<template>
  <nav class="navbar">
    <<img src="/img/coffez-logo.png" alt="COFFEZ" class="logo">
  </nav>
</template>

<script setup>
// Navigation simple avec logo
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  padding: 12px 24px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .navbar {
    height: 60px;
    padding: 8px 16px;
  }
  .logo {
    height: 40px;
  }
}
</style>
