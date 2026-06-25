// plugins/colorScheme.client.ts
// Thème verrouillé en sombre (fond noir) — demande Pascal, juin 2026.
// Le fond noir est désormais fixé au rendu serveur via nuxt.config
// (app.head.htmlAttrs.class = "dark"), sans flash blanc au chargement.
// Ce plugin ne force plus de bascule clair/sombre.
export default defineNuxtPlugin(() => {});
