import { useFirestore as vueUseFirestore } from "@vueuse/firebase";
import { doc, Query, type DocumentData } from "firebase/firestore";

export function useFirestore(docPath: string | Query<DocumentData, DocumentData>) {
	const { $db } = useNuxtApp();
	if (typeof docPath === "string") {
		return vueUseFirestore(doc($db, docPath));
	}
	if (typeof docPath === "object") {
		return vueUseFirestore(docPath);
	}
}
