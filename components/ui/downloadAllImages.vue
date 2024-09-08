<template>
  <button class="text-xs" @click="downloadImages()">
    <slot></slot>
  </button>
</template>
<script lang='ts' setup>
import JSZip from 'jszip';
import { saveAs } from 'file-saver'
import { formatDate } from 'date-fns';
import { Timestamp } from 'firebase/firestore';


const props = defineProps(['images', 'title'])
const zip = new JSZip();

async function downloadImages() {
  for (const image of props.images) {
    const response = await fetch(image.urlFirebaseOriginal);
    const blob = await response.blob();
    zip.file(formatDate(dateFromTimestamp(image.createdDate), 'yyMMdd_HHmm') + image.originalName, blob, { date: dateFromTimestamp(image.createdDate) });
  }
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, `${props.title.replaceAll(' ', '_')}.zip`);
  });
}

</script>
<style lang='sass' scoped></style>
