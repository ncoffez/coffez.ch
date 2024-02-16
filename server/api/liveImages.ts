import { db } from "../firestore";

export default defineEventHandler(async (event) => {
  // Existing functionality (consider moving to separate function)
  const docRef = db.collection("portraits").limit(10);
  const doc = await docRef.get();

  event.node.res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Real-time updates with SSE
  const imageChangeListener = db.collection("portraits").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added" || change.type === "modified") {
        const data = change.doc.data();
        event.node.res.write(`data: ${JSON.stringify(data)}\n\n`); // Send SSE data
      }
    });
  });

  // Close listener on client disconnect
  event.node.req.on("close", () => imageChangeListener());
});
