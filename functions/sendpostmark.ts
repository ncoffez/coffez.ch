import { ServerClient } from "postmark";
import notifySlack from "./notifySlack";
import { HttpStatusCode } from "axios";

async function sendpostmark(data: any, context: any) {
  if (!process.env.POSTMARK_TOKEN) {
    throw new Error("Missing POSTMARK_TOKEN environment variable");
  }
  const client = new ServerClient(process.env.POSTMARK_TOKEN);
  let error: any = {};

  try {
    await client.sendEmailWithTemplate({
      From: "info@coffez.ch",
      To: data.to,
      TemplateAlias: "contact-form",
      TemplateModel: {
        product_url: "https://coffez.ch",
        product_name: "Coffez.ch",
        userName: data.name,
        message: data.message,
        userPhone: data.phone,
        company_name: "Coffez.ch",
        company_address: "Kasthoferstrasse 50, 3006 Bern",
      },
    });
  } catch (postmarkError) {
    error.postmark = `Postmark notification failed. ${postmarkError}`;
  }

  try {
    await notifySlack(data);
  } catch (slackError) {
    error.slack = `Slack notification failed. ${slackError}`;
  }
  if (error.slack || error.postmark) throw { slack: error.slack, postmark: error.postmark };
  return HttpStatusCode.Ok
}

export default sendpostmark;
