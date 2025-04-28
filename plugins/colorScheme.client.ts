// plugins/colorScheme.client.ts
import { useLocalStorage, usePreferredDark } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
  type ThemeOption = "dark" | "light" | "colorful" | "system" | null;
  const systemTheme = usePreferredDark();
  const storedTheme = useLocalStorage("theme", "system");

  const computedTheme = computed(() => {
    if (["light", "dark", "colorful"].includes(storedTheme.value)) return storedTheme.value;
    return systemTheme.value ? "dark" : "light";
  });

  useHead({
    htmlAttrs: {
      class: computedTheme,
    },
  });

  return {
    provide: {
      colorScheme: {
        setTheme: (selectedTheme: ThemeOption) => (storedTheme.value = selectedTheme),
      },
    },
  };
});
