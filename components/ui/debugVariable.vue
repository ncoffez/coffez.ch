<template>
  <div class="my-2 font-semibold" @click="debug = !debug">
    <span class=" flex items-center gap-1">
        <IconsLucideChevronDown v-if="debug" class="" /><IconsLucideChevronRight v-else class="" />
        {{ variable ? name : "Loading..." }}
    </span>

    <pre :class="`${debug ? 'h-full' : 'hidden'}`" class="py-2 px-6 text-sm font-light italic">
          {{ variable }}
      </pre
    >
  </div>
</template>
<script lang="ts" setup>
defineProps({
  variable: {
    required: true,
  },
  name: {
    required: true,
    type: String,
  },
});
const debug = ref(false);
</script>
<style scoped></style>
