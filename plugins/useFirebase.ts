import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics, logEvent as logAnalyticsEvent, isSupported } from "firebase/analytics";

export default defineNuxtPlugin(async (nuxtApp) => {
	const config = useRuntimeConfig();
	const firebaseConfig = JSON.parse(config.public.FIREBASE_FRONTEND_KEY);

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

	return {
		provide: {
			db,
			auth,
			functions,
			logEvent,
		},
	};
});
