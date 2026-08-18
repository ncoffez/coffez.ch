import { adminDB } from "../firestore";

// server/middleware/add-html-class.js
export default defineEventHandler(async (event) => {
	// Robustesse : si Firestore est injoignable (dev local sans clés, panne
	// réseau, quota), on rend la page avec le thème par défaut au lieu de
	// renvoyer une erreur 500 sur TOUT le site.
	let theme;
	try {
		theme = (await adminDB.doc("settings/settings").get()).data();
	} catch (e) {
		console.warn("[setTheme] Firestore injoignable, thème par défaut utilisé.");
		return;
	}
	if (!theme?.color) return;
	const originalRender = event.node.res.end;
	event.node.res.end = function (data, ...args) {
		if (typeof data === "string") {
			data = data.replace("<html", `<html class="${theme.color}"`);
		}
		return originalRender.call(this, data, ...args);
	};
});
