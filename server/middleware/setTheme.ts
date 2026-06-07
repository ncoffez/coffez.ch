import { adminDB } from "../firestore";

// server/middleware/add-html-class.js
export default defineEventHandler(async (event) => {
	const theme = (await adminDB.doc("settings/settings").get()).data();
	if (!theme?.color) return;
	const originalRender = event.node.res.end;
	event.node.res.end = function (data, ...args) {
		if (typeof data === "string") {
			data = data.replace("<html", `<html class="${theme.color}"`);
		}
		return originalRender.call(this, data, ...args);
	};
});
