import { Timestamp } from "firebase-admin/firestore";

export default function dateFromTimestamp(timestamp: Timestamp): Date {
  return timestamp.toDate();
}