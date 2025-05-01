import { db } from "./firestore"; 

export async function getEventList(request: any) { 
  const { limit } = request.data;
  console.log(`Requested getEventList with limit ${limit}`);
  const latestEvent = await db.collection("events").orderBy('startDate', 'desc').limit(limit).get();
  let events: any[] = [];

  latestEvent.docs.forEach((doc) => {
    let event: any = {
      title: doc.data().title,
      startDate: doc.data().startDate.toDate().toISOString(),
      endDate: doc.data().endDate.toDate().toISOString(),
      id: doc.id,
      coverImage: doc.data().coverImage,
      description: doc.data().description
    }
    events.push(event);
  });

  return events;
}
