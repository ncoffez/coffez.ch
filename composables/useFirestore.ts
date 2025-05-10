import { useFirestore as vueUseFirestore } from "@vueuse/firebase";
import { doc, Firestore } from "firebase/firestore";

export function useFirestore(docPath: string) {
	const { $db } = useNuxtApp();
	const document = vueUseFirestore(doc($db as Firestore, docPath));
	return document;
}
