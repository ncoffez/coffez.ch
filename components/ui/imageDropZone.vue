<template>
  <div id="file-dropzone" class="flex flex-col w-64 max-w-lg py-2">
    <label for="dropzone-file"
      class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center border-2 border-dashed cursor-pointer bg-zinc-900 border-zinc-700 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-8 h-8 text-zinc-400">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
      <h2 class="mt-1 font-medium tracking-wide text-zinc-200">Event image</h2>
      <p class="mt-2 text-xs tracking-wide text-zinc-400">Upload or drag & drop your file as PNG or JPG </p>
      <input id="dropzone-file" type="file" accept="image/png, image/jpeg, video/mp4" class="hidden" multiple="true"
        @change="$emit('mediaChanged', $event)" />
    </label>
  </div>
</template>
<script lang='ts' setup>
defineEmits(['mediaChanged'])

</script>
<style scoped></style>
