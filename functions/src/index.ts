import { executeSystemCommand } from "./executeSystemCommand";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import sendpostmark from "./sendpostmark";
import { setGlobalOptions } from "firebase-functions/v2";
import { getSlackPush } from "./getSlackPush";
import { reduceImage } from "./reduceImage";

setGlobalOptions({ maxInstances: 3, region: "europe-west6" });

exports.sendmail = onRequest(sendpostmark);
exports.reduceImage = onDocumentCreated("/portraits/{id}", reduceImage);
exports.getSlackPush = onRequest(getSlackPush);
exports.executeSystemCommand = onRequest(executeSystemCommand);
