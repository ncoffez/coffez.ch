// plugins/colorScheme.client.ts
import { usePreferredDark } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
	type ThemeOption = "dark" | "light" | null;
	const systemTheme = usePreferredDark();

	// Initialize theme from localStorage or system preference
	const theme = useState<ThemeOption>("theme", () => {
		const savedTheme = localStorage.getItem("theme") as ThemeOption;
		return savedTheme || (systemTheme.value ? "dark" : "light");
	});

	// Sync system theme changes
	watch(systemTheme, (newTheme) => {
		theme.value = newTheme ? "dark" : "light";
	});

	// Persist theme changes to localStorage
	watch(theme, (newTheme) => {
		localStorage.setItem("theme", theme.value || "system");
	});

	useHead({
		htmlAttrs: {
			class: computed(() => theme.value),
		},
	});
});
