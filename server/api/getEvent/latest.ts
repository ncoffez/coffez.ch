import { adminDB } from "~/server/firestore";

export default defineEventHandler(async (event) => {
  const latestEvent = await adminDB.collection("events").orderBy('startDate', 'desc').limit(1).get();
  const eventId: string = latestEvent.docs[0]?.id;

  console.log(eventId);

  return eventId;
})