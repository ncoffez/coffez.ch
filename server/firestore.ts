import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const config = useRuntimeConfig();

if (!admin.apps.length) {
	if (config.FIREBASE_ADMIN_KEY) {
		admin.initializeApp({
			credential: admin.credential.cert(JSON.parse(config.FIREBASE_ADMIN_KEY)),
		});
	} else {
		// In Firebase App Hosting, FIREBASE_CONFIG and application default credentials
		// are provided automatically to the runtime.
		admin.initializeApp();
	}
}

export const adminDB = getFirestore();
export const bucket = getStorage().bucket("coffez-ch.appspot.com");
