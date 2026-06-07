import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics, logEvent as logAnalyticsEvent, isSupported } from "firebase/analytics";

export default defineNuxtPlugin(async (nuxtApp) => {
	try {
		const config = useRuntimeConfig();
		const rawFirebaseConfig = config.public.FIREBASE_FRONTEND_KEY || config.public.FIREBASE_WEBAPP_CONFIG;

		if (!rawFirebaseConfig) {
			console.error(
				"Firebase configuration not found. Set FIREBASE_FRONTEND_KEY locally or rely on FIREBASE_WEBAPP_CONFIG in App Hosting."
			);
			throw new Error("Firebase frontend config not configured");
		}

		const firebaseConfig = JSON.parse(rawFirebaseConfig);

		const { initializeApp } = await import("firebase/app");
		const app = initializeApp(firebaseConfig);

		const db = getFirestore(app);
		const auth = getAuth(app);
		const functions = getFunctions(app, "europe-west6");
		let logEvent = (_event: string) => {};
		if (await isSupported()) {
			const analytics = getAnalytics(app);
			logEvent = (event: string) => logAnalyticsEvent(analytics, event);
		}

		console.log("Firebase initialized successfully");

		return {
			provide: {
				db,
				auth,
				functions,
				logEvent,
			},
		};
	} catch (error) {
		console.error("Firebase plugin initialization error:", error);
		throw error;
	}
});
