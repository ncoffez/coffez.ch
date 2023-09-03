import { executeSystemCommand } from './executeSystemCommand';
import * as functions from "firebase-functions";
import sendpostmark from "./sendpostmark";
import { getSlackPush } from "./getSlackPush";
import { reduceImage } from "./reduceImage";

exports.sendmail = functions.https.onRequest(sendpostmark);
exports.reduceImage = functions.firestore.document("/portraits/{id}").onCreate(reduceImage);
exports.getSlackPush = functions.https.onRequest(getSlackPush);
exports.executeSystemCommand = functions.https.onRequest(executeSystemCommand); 
