import * as functions from "firebase-functions";
import { sendMail } from './sendMail'

exports.sendMail = functions.https.onCall(sendMail);