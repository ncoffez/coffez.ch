import admin from "./firestore";
import { FieldValue } from "firebase-admin/firestore";

export async function createNewGallery(req: any, res: any) {
  const { command, text } = req.body;

  const currentEvent = await useCurrentEvent();

  if (command === "/new") {
    if (currentEvent.ref) await currentEvent.ref.update({ endDate: FieldValue.serverTimestamp() });
    const newEvent = await admin.firestore().collection("events").add({
      startDate: FieldValue.serverTimestamp(),
      title: text || "",
    });
    return res.status(200).send(`Created new event ${newEvent.id} with title ${text}.`);

  } else if (command === "/title") {
    if (!text) throw new Error(`Need title to update current event with method ${command}.`);
    if (!currentEvent.id || !currentEvent.ref || !currentEvent.data) throw new Error(`No current event found.`);

    await currentEvent.ref.update({ title: text });
    return res.status(200).send(`Updated title of event ${currentEvent.id}, ${currentEvent.data.title} => ${text}`);
  } else {
    return res.status(400).send("Invalid command. Command must be either '/new' or '/title'.");
  }
}


const useCurrentEvent = async () => {
  const currentEvent = await admin.firestore().collection('events').orderBy('startDate', 'desc').limit(1).get();
  const exists = currentEvent.docs[0]?.exists;
  if (!exists) return { id: null, ref: null, data: null };
  const id = currentEvent.docs[0].id;
  const ref = admin.firestore().collection("events").doc(id);
  return { id, ref, exists, data: currentEvent.docs[0].data() };
}

// body: {
//   api_app_id: "A04MQPXMQQG"
//   channel_id: "C05LK82ALGL"
//   channel_name: "imprimantes_debug"
//   command: "/new"
//   is_enterprise_install: "false"
//   response_url: "https://hooks.slack.com/commands/TKSQ0B87N/6652697776774/KadLxlr7LU96xYLEXGmk5y7a"
//   team_domain: "coffezch"
//   team_id: "TKSQ0B87N"
//   text: "title1"
//   token: "2akqACDf4YB9tRjuDdgOJemB"
//   trigger_id: "6644773874583.672816382260.62e9664e597d5aeb03afc97023f8ea47"
//   user_id: "UKT8UFGBF"
//   user_name: "ncoffez"
//   }
