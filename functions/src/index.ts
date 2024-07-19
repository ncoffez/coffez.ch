import { onCall, onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { getEventList } from "./getEventList";
import sendpostmark from "./sendpostmark";
import { setGlobalOptions } from "firebase-functions/v2";
import { getSlackPush } from "./getSlackPush";
import { reduceImage } from "./reduceImage";
import { createNewGallery } from "./createNewGallery";
import { getAppleShortcut } from "./getAppleShortcut";
import { uploadEventCover } from "./uploadEventCover";

setGlobalOptions({ maxInstances: 3, region: "europe-west6" });

exports.sendmail = onRequest(sendpostmark);
exports.reduceImage = onDocumentCreated("/portraits/{id}", reduceImage);
exports.getSlackPush = onRequest(getSlackPush);
exports.getEventList = onCall(getEventList);
exports.newGallery = onRequest(createNewGallery);
exports.getAppleShortcut = onRequest(getAppleShortcut);
exports.uploadEventCover = onCall({ memory: "1GiB", timeoutSeconds: 300 }, uploadEventCover);