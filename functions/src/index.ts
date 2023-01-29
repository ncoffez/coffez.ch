import * as functions from "firebase-functions";
// import sendmail from "./sendmail";
import sendpostmark from "./sendpostmark";

exports.sendmail = functions.https.onCall(sendpostmark);
