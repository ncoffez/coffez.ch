import slack from "./slack";
import admin from "./firestore";
import { logger } from "firebase-functions/v2";

export async function getSlackPush(req: any, res: any) {
  const { type, event } = req.body;

  if (type === "url_verification") {
    logger.debug("Received url_verification package.");
    res.send(req.body.challenge);
    return;
  }

  if (type !== "event_callback") {
    logger.debug("Bad Request: Invalid type");
    res.status(400).send("Bad Request: Invalid type");
    return;
  }

  if (event.type !== "file_shared") {
    logger.debug("Bad Request: Invalid event type");
    res.status(400).send("Bad Request: Invalid event type");
    return;
  }

  if (["U04LY5A392R"].includes(event.user_id)) {
    logger.debug("Automated message: Will not treat requests from Coffez Bot.");
    res.status(400).send("Automated message: Will not treat requests from App Coffez Bot.");
    return;
  }

  if (!["C05JJB9DRDY", "C05LK82ALGL"].includes(event.channel_id)) {
    logger.debug("No action performed, Will only handle media in channels #imprimantes and #imprimantes_debug.");
    res
      .status(400)
      .send("No action performed, Will only handle media in channels #imprimantes and #imprimantes_debug.");
    return;
  }

  // respond early to prevent multiple Push triggers.

  const { file } = await slack.files.info({ file: event.file_id });

  if (!file?.mimetype?.startsWith("image/")) {
    res.status(415).send("Unsupported Media Type: Expecting an image file");
    return;
  }
  logger.debug({ "file.id": file.id, file, event });

  const document = {
    originalName: file.name,
    createdDate: admin.firestore.Timestamp.fromMillis((file.timestamp as number) * 1000 || 0),
    sourceApplication: "slack",
    channel: event.channel_id ? event.channel_id : "#imprimantes",
    sourceType: file.filetype || "undefined",
    sourceHeight: file.original_h || 0,
    sourceWidth: file.original_w || 0,
    imageUrl: file.url_private || "",
    urlSlack: file.permalink || "",
    size: sizeToSizes(file?.size || 0),
    thread: file.shares?.public?.C05JJB9DRDY[0].ts || file.shares?.private?.C05LK82ALGL[0].ts,
  };

  function sizeToSizes(size: number): string {
    if (size >= 1024 ** 2) return `${Math.round((size * 10) / 1024 ** 2) / 10} MB`;
    if (size >= 1024) return `${Math.round(size / 1024)} KB`;
    return `${size} bytes`;
  }

  const alreadyPublished = await admin.firestore().collection("portraits").where("thread", "==", document.thread).get();
  if (alreadyPublished.empty) {
    await admin.firestore().collection("portraits").add(document);
  }
  res.sendStatus(200);
}
