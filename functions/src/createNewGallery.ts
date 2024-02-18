import { logger } from "firebase-functions/v2";
import admin from "./firestore";
import { FieldValue } from "firebase-admin/firestore";

export async function createNewGallery(req: any, res: any) {
  const { command, text, response_url, user_name } = req.body;

  logger.debug(
    `User ${user_name} triggered the command ${command} ${
      text ? "with the attribute '" + text + "'" : "Without attributes"
    }.`
  );

  logger.log({ response_url });
  const docRef = admin.firestore().collection("settings").doc("gallery");

  if (text) {
    const resultTitle = await docRef.update({ title: text });
    logger.debug(`Updated title: ${text},`, resultTitle);
  }

  if (command === "/new") {
    const resultDate = await docRef.update({ startDate: FieldValue.serverTimestamp() });
    logger.debug(`Updated startDate,`, resultDate);
  }

  res.status(200).send("Updated values in database successfully.");
  return;
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
