import * as functions from "firebase-functions";
import sendpostmark from "./sendpostmark";
import {reduceImage} from './reduceImage';

exports.sendmail = functions.https.onCall(sendpostmark);
exports.reduceImage = functions.firestore.document('/portraits/{id}').onCreate(reduceImage);
