import { db } from "./firestore";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { Request, Response } from "express";

/**
 * This function allows to store the current device's location to database for event tracking.
 */
export async function updateCurrentLocation(req: Request, res: Response) {
	if (req.method !== "POST") {
		res.status(405).send("Method Not Allowed, need POST");
		return;
	}

	interface Location {
		longitude: number;
		latitude: number;
		date?: Timestamp;
	}
	const location: Location = req.body;
	const settingsRef = db.collection("settings");

	// Validate required fields
	const requiredFields: (keyof Location)[] = ["longitude", "latitude"];
	for (const field of requiredFields) {
		if (!location[field]) {
			res.status(400).send(`Missing required field: ${field}`);
			return;
		}
	}

	try {
		await settingsRef.doc("location").set({
			date: FieldValue.serverTimestamp(),
			...location,
		});
		res.status(200).send("Location was updated successfully.");
		return;
	} catch (e: any) {
		res.status(500).send(`Error processing request: ${(e as Error).message}`);
		return;
	}
}
