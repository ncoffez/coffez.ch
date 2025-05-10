<template>
	<div class="" v-if="settings">
		<span class="inline-flex gap-2 items-center px-4 w-full py-4 bg-yellow-200 dark:bg-yellow-800"
			><IconsMessageCircleWarning class="inline text-xl" />These settings apply to all users of the site. Please change
			carefully.</span
		>
		<div class="div">
			<h2>Theme</h2>
			<UiSettingItem title="Primary color"
				><select
					name="primary"
					id="primary"
					title="primary"
					class="bg-inherit min-w-28 text-end pe-2 outline-none"
					v-model="settings.color"
					@change="changeColor(settings.color)">
					<option v-for="color of colors" :value="color.toLowerCase()">{{ color }}</option>
				</select></UiSettingItem
			>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { doc, updateDoc } from "firebase/firestore";
import { TAILWIND_COLORS, type TailwindColors } from "~/composables/useTailwindColors";

definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Settings" });
const settings = useFirestore("settings/settings");
const { $db } = useNuxtApp();

const colors = ref<TailwindColors[]>(TAILWIND_COLORS);
const changeColor = async (newColor: TailwindColors) => {
	const docRef = doc($db, "settings/settings");
	const documentClasses = document.documentElement.classList;
	await updateDoc(docRef, { color: newColor });

	TAILWIND_COLORS.forEach((color) => documentClasses.remove(color.toLowerCase()));
	documentClasses.add(newColor);
	return "Updated theme successfully";
};
</script>
<style scoped>
h2 {
	@apply text-2xl mt-8 mb-2;
}
</style>
