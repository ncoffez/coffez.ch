import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { } from "firebase-functions/v2/storage";
import sendpostmark from "./sendpostmark";
import { setGlobalOptions } from "firebase-functions/v2";
import { getSlackPush } from "./getSlackPush";
import { reduceImage } from "./reduceImage";
import { createNewGallery } from "./createNewGallery";
import { getAppleShortcut } from "./getAppleShortcut";
import { addEventCover } from "./addEventCover";

setGlobalOptions({ maxInstances: 3, region: "europe-west6" });

exports.sendmail = onRequest(sendpostmark);
exports.reduceImage = onDocumentCreated("/portraits/{id}", reduceImage);
exports.getSlackPush = onRequest(getSlackPush);
exports.newGallery = onRequest(createNewGallery);
exports.getAppleShortcut = onRequest(getAppleShortcut);
exports.addEventCover = onDocumentUpdated("/portraits/{id}", addEventCover);