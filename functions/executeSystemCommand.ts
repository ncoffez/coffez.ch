import admin from "./firestore"; // Import Firestore admin

export const executeSystemCommand = async (req: any, res: any) => {
  let command = "";
  try {
    // Extract the command parameter from the request
    command = req.query.command || req.body.command;

    if (!["reboot", "network", "remote"].includes(command)) {
      res.status(400).send("Invalid command. Command must be either 'reboot', 'network', or 'remote'.");
      return;
    }

    // Reference to the specific document that will contain the command
    const docRef = admin.firestore().collection("systemCommands").doc("commands");

    // Fetch the current document data to avoid overwriting other commands
    const currentData = (await docRef.get()).data() || {};

    // Set the command flag to true, while keeping other command values
    await docRef.set({ ...currentData, [command]: true });

    // Respond based on the command
    let responseMessage = "";
    switch (command) {
      case 'reboot':
        responseMessage = "Reboot request has been sent successfully!";
        break;
      case 'network':
        responseMessage = "Network stats have been requested.";
        break;
      case 'remote':
        responseMessage = "Remote access has been requested.";
        break;
    }

    res.status(200).send(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).send(`An error occurred while sending the ${command} request.`);
  }
};
