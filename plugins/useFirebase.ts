import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(async (nuxtApp) => {
	const config = useRuntimeConfig();
	const firebaseConfig = JSON.parse(config.public.FIREBASE_FRONTEND_KEY);

	const { initializeApp } = await import("firebase/app");
	const app = initializeApp(firebaseConfig);

	const db = getFirestore(app);

	const getAuthInstance = async () => {
		const { getAuth } = await import("firebase/auth");
		return getAuth(app);
	};

	const getFunctionsInstance = async () => {
		const { getFunctions } = await import("firebase/functions");
		return getFunctions(app, "europe-west6");
	};

	const logAnalyticsEvent = async (event: string) => {
		const { getAnalytics, logEvent } = await import("firebase/analytics");
		const analytics = getAnalytics();
		return logEvent(analytics, event);
	};

	return {
		provide: {
			db,
			auth: getAuthInstance,
			functions: getFunctionsInstance,
			analytics: logAnalyticsEvent,
		},
	};
});
