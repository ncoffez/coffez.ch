<template>
  <section id="brands" class="flex flex-col gap-y-4 py-6">
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
      <div class="logo px-4 invert opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-in-out" v-for="logo of logos">
        <img :src="`/img/Logos/${logo}`" :alt="logo" srcset="">
      </div>
    </div>
    <footer aria-hidden="true" class="text-end text-sm text-stone-500 italic pt-3">* {{ $t('theseBrandsTrustUs') }}
    </footer>
  </section>
</template>

<script setup lang="ts">
const logos = [
  'itconcepts.svg',
  'iwc.svg',
  'manor.svg',
  'matis.svg',
  'ubs.svg',
  'zkb.svg',
];
</script>

<style lang="sass" scoped>
  </style>