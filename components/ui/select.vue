<template>
	<select v-model="selected" name="dropdown">
		<option v-for="option of options" :value="option">{{ capitalize(option) }}</option>
	</select>
</template>
<script lang="ts" setup>
const selected = defineModel<string>();
const props = defineProps<{
	options?: string[];
}>();
watch(selected, (newVal) => {
	console.log(newVal);
});

const capitalize = (term: string) => term.charAt(0).toUpperCase() + term.slice(1);
</script>
<style scoped>
select {
	@apply px-3 py-1;
}
</style>
