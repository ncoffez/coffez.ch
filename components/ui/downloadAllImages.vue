<template>
  <button class="text-xs" @click="downloadImages()">
    <slot></slot>
  </button>
</template>
<script lang='ts' setup>
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { formatDate } from 'date-fns'

const props = defineProps(['images', 'title'])
const zip = new JSZip()

async function downloadImages() {
  for (const image of props.images) {
    const response = await fetch(image.urlFirebaseOriginalWithQR)
    const blob = await response.blob()
    const imageDate = image.createdDate ? new Date(image.createdDate) : new Date()
    const dateStr = formatDate(imageDate, 'yyMMdd_HHmm')
    const fileName = image.originalName || 'image.jpg'
    zip.file(`${dateStr}_${fileName}`, blob, { date: imageDate })
  }
  const content = await zip.generateAsync({ type: 'blob' })
  saveAs(content, `${props.title.replaceAll(' ', '_')}.zip`)
}
</script>
<style scoped></style>
