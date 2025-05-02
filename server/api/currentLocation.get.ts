import { adminDB } from "~/server/firestore";

export default defineEventHandler(async (event) => {
	return new Promise((resolve, reject) => {
		adminDB.doc("settings/location").onSnapshot(
			(snapshot) => {
				if (snapshot.exists) {
					resolve(snapshot.data()); // Extract document data
				} else {
					reject(new Error("Document does not exist"));
				}
			},
			(error) => reject(error)
		);
	});
});
