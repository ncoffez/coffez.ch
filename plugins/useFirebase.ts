import { useAuth } from "@vueuse/firebase";

export default defineNuxtPlugin(async (nuxtApp) => {
	const config = useRuntimeConfig();
	const firebaseConfig = JSON.parse(config.public.FIREBASE_FRONTEND_KEY);

	const { initializeApp } = await import("firebase/app");
	const app = initializeApp(firebaseConfig);

	const getDb = async () => {
		const { getFirestore } = await import("firebase/firestore");
		return getFirestore(app);
	};

	const getAuthInstance = async () => {
		const { getAuth } = await import("firebase/auth");
		const auth = getAuth(app);
		const { isAuthenticated, user } = useAuth(auth);
		return { isAuthenticated, user, auth };
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
			db: getDb,
			auth: getAuthInstance,
			functions: getFunctionsInstance,
			analytics: logAnalyticsEvent,
		},
	};
});
