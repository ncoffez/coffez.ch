import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics, logEvent as logAnalyticsEvent, isSupported } from "firebase/analytics";

export default defineNuxtPlugin(async (nuxtApp) => {
	try {
		const config = useRuntimeConfig();
		const rawFirebaseConfig = config.public.FIREBASE_FRONTEND_KEY || config.public.FIREBASE_WEBAPP_CONFIG;

		if (!rawFirebaseConfig) {
			// Dev local sans clés : on démarre quand même, en mode dégradé.
			// En production (App Hosting) FIREBASE_WEBAPP_CONFIG est toujours
			// fourni, donc ce chemin n'est jamais emprunté en ligne.
			console.warn(
				"[firebase] Configuration absente — démarrage en mode dégradé (pas d'auth, pas d'analytics). " +
					"Définir FIREBASE_FRONTEND_KEY dans .env.local pour activer Firebase en local."
			);
			return {
				provide: {
					db: null,
					auth: null,
					functions: null,
					logEvent: (_event: string) => {},
				},
			};
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
		// Ne jamais faire tomber toute l'application à cause de Firebase :
		// on journalise et on repart en mode dégradé.
		console.error("Firebase plugin initialization error:", error);
		return {
			provide: {
				db: null,
				auth: null,
				functions: null,
				logEvent: (_event: string) => {},
			},
		};
	}
});
