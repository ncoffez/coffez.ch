import { DocumentSnapshot, FirestoreEvent } from "firebase-functions/v2/firestore";
import admin from "./firestore";


export async function addEventCover(event: FirestoreEvent<DocumentSnapshot | any>) {
  const newPortrait = event.data.after.data();

  let behavior = 'latest' // can be 'first' or 'latest'

  const { urlFirebaseReduced } = newPortrait;
  if (!urlFirebaseReduced) return "This portrait does not yet have a urlFirebaseReduced.";

  const currentEvent = await admin.firestore().collection("events").orderBy('startDate', 'desc').limit(1).get();
  if (behavior === 'first' && currentEvent.docs[0].data().coverImage) return "Cover image is already set. Behavior is set to 'latest'.";
  if (behavior === 'latest') await admin.firestore().collection("events").doc(currentEvent.docs[0].id).update({ coverImage: urlFirebaseReduced });
  return "Cover image has been set.";
}