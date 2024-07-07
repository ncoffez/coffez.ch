import { adminDB } from "~/server/firestore";

export default defineEventHandler(async (event) => {
  const limit = await readBody(event);
  const latestEvent = await adminDB.collection("events").orderBy('startDate', 'desc').limit(limit).get();
  let events: any[] = [];

  latestEvent.docs.forEach((doc) => {
    const event = {
      title: doc.data().title,
      startDate: doc.data().startDate.toDate(),
      endDate: doc.data().endDate?.toDate(),
      id: doc.id,
      coverImage: doc.data().coverImage,
      description: doc.data().description
    }
    events.push(event);
  });

  return events;
})