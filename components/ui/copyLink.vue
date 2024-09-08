<template>
  <div v-if="!copied" @click="copyLink(path)"
    class="bg-zinc-800 outline outline-zinc-500 text-zinc-200 hover:text-zinc-800 hover:bg-zinc-300 font-medium text-xs inline-flex mx-4 flex-row gap-1 px-3 py-1 rounded-md cursor-pointer">
    <Icon name="ic:outline-content-copy" class="w-3 h-3 my-auto"></Icon>
    Download link
  </div>
  <div class="bg-rose-800 text-zinc-200 font-medium text-xs inline-flex mx-4 flex-row gap-1 px-3 py-1 rounded-md"
    v-else>
    <Icon name="ic:outline-check" class="w-3 h-3 my-auto"></Icon>
    Copied
  </div>
</template>


<script lang='ts' setup>
const props = defineProps(['url'])
const copied = ref(false);
const path = computed(() => new URL(props.url, window.location.origin).toString())

function copyLink(link: string) {
  navigator.clipboard.writeText(link);
  console.log(link);
  copied.value = true;
}

watch(copied, (newValue) => {
  if (!newValue) return;
  setTimeout(() => {
    copied.value = false;
  }, 3000)
})
</script>
<style lang='sass' scoped>
</style>
