import { db } from "./firestore";
import { FieldValue } from "firebase-admin/firestore";

export async function updateCurrentLocation(request: any) {
	if (!request?.data?.location) {
		return { error: "Invalid or missing location data" };
	}

	const { location } = request.data;
	const settingsRef = db.collection("settings");

	try {
		await settingsRef.doc("location").set({
			date: FieldValue.serverTimestamp(),
			...location,
		});
		return { success: true };
	} catch (e: any) {
		return { error: `Error processing request: ${(e as Error).message}` };
	}
}
