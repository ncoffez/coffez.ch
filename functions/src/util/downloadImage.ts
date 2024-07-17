import axios from "axios";
import { logger } from "firebase-functions/v2";

export async function downloadImage(url: string, sourceApplication: "slack" | "Apple Shortcuts" = "Apple Shortcuts"): Promise<{ imageBuffer: Buffer, contentType: string }> {
  logger.log(`Function downloadImage launched with URL ${url}.`);
  if (!url) throw "URL is missing.";
  let response;

  if (sourceApplication === "slack") {
    response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
      },
    });
  } else if (sourceApplication === "Apple Shortcuts") {
    response = await axios.get(url, {
      responseType: "arraybuffer",
    });
  } else {
    throw `Source application ${sourceApplication} is not recognized.`;
  }
  const contentType = response.headers["content-type"];
  console.log({ headers: response.headers })
  return { imageBuffer: response.data, contentType };
}