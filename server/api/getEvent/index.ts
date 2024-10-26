import { Timestamp } from "firebase-admin/firestore";
import { adminDB } from "~/server/firestore";

export default defineEventHandler(async (event) => {
  const { date } = await readBody(event);

  const imageTimestamp = Timestamp.fromDate(new Date(date));
  const eventDoc = await adminDB
    .collection("events")
    .where("startDate", "<=", imageTimestamp)
    .where("endDate", ">=", imageTimestamp)
    .get();
  const foundEvent = eventDoc.empty ? null : eventDoc.docs[0].data();
  return { id: eventDoc.docs[0].id, ...foundEvent };
})








