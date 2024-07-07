import { Timestamp } from "firebase/firestore";

export default function dateFromTimestamp(timestamp: Timestamp): Date {
  return timestamp.toDate();
}