import * as functions from "firebase-functions";
import admin from "./firestore"; // Import Firestore admin

export const rebootRaspberryPi = async (req: functions.Request, res: functions.Response) => {
  try {
    // Reference to the specific document that will contain the reboot command
    const docRef = admin.firestore().collection("systemCommands").doc("rebootRequest");

    // Set the reboot flag to true
    await docRef.set({ reboot: true });

    res.status(200).send("Reboot request has been sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while sending the reboot request.");
  }
};
