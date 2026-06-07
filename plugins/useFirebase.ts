import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics, logEvent as logAnalyticsEvent, isSupported } from "firebase/analytics";

export default defineNuxtPlugin(async (nuxtApp) => {
	try {
		const config = useRuntimeConfig();

		if (!config.public.FIREBASE_FRONTEND_KEY) {
			console.error('Firebase configuration not found. Make sure FIREBASE_FRONTEND_KEY is set in your environment variables.')
			throw new Error('FIREBASE_FRONTEND_KEY not configured')
		}

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

		console.log('Firebase initialized successfully')

		return {
			provide: {
				db,
				auth,
				functions,
				logEvent,
			},
		};
	} catch (error) {
		console.error('Firebase plugin initialization error:', error)
		throw error
	}
});
