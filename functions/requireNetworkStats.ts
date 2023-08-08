import * as functions from "firebase-functions";
import admin from "./firestore"; // Import Firestore admin

export const requireNetworkStats = async (req: functions.Request, res: functions.Response) => {
  try {
    // Reference to the specific document that will contain the reboot command
    const docRef = admin.firestore().collection("systemCommands").doc("networkStatsRequest");

    // Set the reboot flag to true
    await docRef.set({ requestNetworkStats: true });

    res.status(200).send("Network stats have been requested.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while sending the network-stats request.");
  }
};
