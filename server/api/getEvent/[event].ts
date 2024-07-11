import { addDays, subDays } from "date-fns";
import { adminDB } from "~/server/firestore";

export default defineEventHandler(async (event) => {
  const eventId = getRouterParam(event, 'event')

  if (!eventId) return { title: 'Coffez.ch - Live', startDate: new Date(subDays(new Date(), 1)), endDate: new Date(addDays(new Date(), 5)) };
  const eventDoc = await adminDB.collection("events").doc(eventId).get();

  const { title, startDate, endDate, description, coverImage } = eventDoc.data() as any;
  let data: any = { title, startDate: startDate.toDate(), id: eventDoc.id, description, coverImage };
  if (endDate) data.endDate = endDate.toDate();
  return data;
})