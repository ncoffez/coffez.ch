<template>
  <section id="brands" class="w-full py-24 px-7 text-center bg-white dark:bg-[#0c0c0c] text-[#111111] dark:text-[#f5f3ee]">

    <!-- Eyebrow -->
    <div class="brands-eyebrow text-[#b08d3e] dark:text-[#c9a44c]">Trusted by</div>

    <!-- Formule en exergue -->
    <h2 class="brands-statement mx-auto">
      The most <em>demanding</em> brands<br>trust Coffez <em>live.</em>
    </h2>

    <!-- Filet or -->
    <div class="brands-rule bg-[#b08d3e] dark:bg-[#c9a44c]"></div>

    <!-- Les signatures -->
    <div class="brands-flow mx-auto">
      <template v-for="(name, i) of clients" :key="name">
        <span class="brands-name">{{ name }}</span><span v-if="i < clients.length - 1" class="brands-sep text-[#b08d3e] dark:text-[#c9a44c]">◆</span>
      </template>
    </div>

  </section>
</template>

<script setup lang="ts">
const clients = [
  "UBS",
  "Roche",
  "Sisley Paris",
  "Manor",
  "SRF",
  "McDonald's Suisse",
  "SRG SSR",
  "Matis Paris",
  "Thurgauer Kantonalbank",
  "KGV Zürich",
  "JobCloud",
  "Schaffhauser Nachrichten",
  "Sanacare",
  "IT Concepts",
  "Swiss Marketing",
  "Meier + Cie",
  "Cuore Weddings",
  "Eventmodus",
];
</script>

<style scoped>
.brands-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  margin-bottom: 36px;
}
.brands-statement {
  font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
  font-size: clamp(34px, 6.5vw, 72px);
  font-weight: 400;
  line-height: 1.15;
  max-width: 900px;
}
.brands-statement em {
  font-style: italic;
  color: #b08d3e;
}
:global(.dark) .brands-statement em {
  color: #c9a44c;
}
.brands-rule {
  width: 64px;
  height: 1px;
  margin: 64px auto 56px;
}
.brands-flow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Didot", "Bodoni 72", "Playfair Display", Georgia, serif;
  font-size: clamp(21px, 3.4vw, 36px);
  font-weight: 400;
  line-height: 1.8;
  max-width: 940px;
}
.brands-name { white-space: nowrap; }
.brands-sep {
  font-size: 0.45em;
  padding: 0 0.9em;
}
</style>
