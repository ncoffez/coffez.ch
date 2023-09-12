import de from "~/locales/de.js";
import en from "~/locales/en.js";
import fr from "~/locales/fr.js";

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    locale: 'de',
    messages: {
      de, fr, en
    },
  };
});
