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
import { uploadGalleryImage } from "./uploadGalleryImage";
import { uploadGalleryVideo } from "./uploadGalleryVideo";
import { updateCurrentLocation } from "./updateCurrentLocation";

setGlobalOptions({ maxInstances: 3, region: "europe-west6" });

exports.sendmail = onRequest(sendpostmark);
exports.reduceImage = onDocumentCreated("/portraits/{id}", reduceImage);
exports.getSlackPush = onRequest(getSlackPush);
exports.getEventList = onCall(getEventList);
exports.updateCurrentLocation = onCall(updateCurrentLocation);
exports.newGallery = onRequest(createNewGallery);
exports.getAppleShortcut = onRequest(getAppleShortcut);
exports.uploadEventCover = onCall({ memory: "1GiB", timeoutSeconds: 300 }, uploadEventCover);
exports.uploadGalleryImage = onCall({ memory: "1GiB", timeoutSeconds: 300 }, uploadGalleryImage);
exports.uploadGalleryVideo = onCall({ memory: "1GiB", timeoutSeconds: 300 }, uploadGalleryVideo);
