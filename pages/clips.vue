<template>
  <div class="clips-page">
    <h1>Vidéos de l'événement</h1>

    <p v-if="pending">Chargement des vidéos…</p>
    <p v-else-if="!clips.length">Aucune vidéo pour le moment.</p>

    <div v-else class="clips-grid">
      <div v-for="clip in clips" :key="clip.id" class="clip-card">
        <video :src="clip.videoUrl" controls playsinline class="clip-video"></video>
        <a :href="clip.videoUrl" :download="clip.originalName || 'video.mov'" class="clip-download">
          Télécharger
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: clips, pending } = await useFetch('/api/getClips', { default: () => [] });
</script>

<style scoped>
.clips-page { padding: 2rem; max-width: 1200px; margin: 0 auto; }
.clips-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
.clip-card { background: #111; border-radius: 12px; overflow: hidden; }
.clip-video { width: 100%; display: block; background: #000; }
.clip-download { display: block; text-align: center; padding: 0.75rem; color: #fff; text-decoration: none; background: #222; }
.clip-download:hover { background: #333; }
</style>
