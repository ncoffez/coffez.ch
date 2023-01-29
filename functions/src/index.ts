import * as functions from "firebase-functions";
import sendpostmark from "./sendpostmark";

exports.sendmail = functions.https.onCall(sendpostmark);
