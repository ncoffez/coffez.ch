<template>
	<div class="" v-if="settings">
		<span class="inline-flex gap-2 items-center px-4 w-full py-4 bg-yellow-200 dark:bg-yellow-800"
			><IconsMessageCircleWarning class="inline text-xl" />{{ $t("admin.settings.warning") }}</span
		>
		<div class="div">
			<h2>{{ $t("admin.settings.theme") }}</h2>
			<UiSettingItem :title="$t('admin.settings.primaryColor')" class="max-w-lg"
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
const { t } = useI18n();

definePageMeta({ middleware: "user-is-admin", layout: "admin", name: "Settings" });
const settings: any = useFirestore("settings/settings");
const { $db } = useNuxtApp();

const colors = ref<TailwindColors[]>(TAILWIND_COLORS);
const changeColor = async (newColor: TailwindColors) => {
	const docRef = doc($db, "settings/settings");
	const documentClasses = document.documentElement.classList;
	await updateDoc(docRef, { color: newColor });

	TAILWIND_COLORS.forEach((color) => documentClasses.remove(color.toLowerCase()));
	documentClasses.add(newColor);
	console.log(t("admin.settings.colorChange.success"));
	return t("admin.settings.colorChange.success");
};
</script>
<style scoped>
h2 {
	@apply text-2xl mt-8 mb-2;
}
</style>
