import { Timestamp } from "firebase/firestore";

export default function dateFromTimestamp(timestamp: Timestamp | undefined): Date | null {
  if (!timestamp) console.warn(`Invalid timestamp format: ${JSON.stringify(timestamp)}`);
  return new Timestamp(timestamp!.seconds, timestamp!.nanoseconds).toDate();
}