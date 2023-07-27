import { ServerClient } from "postmark";
import notifySlack from "./notifySlack";

async function sendpostmark(data: any, context: any) {
  const postmarkToken: string = process.env.postmarkToken || "";
  let client = new ServerClient(postmarkToken);

  try {
    const response = await client.sendEmailWithTemplate({
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
    console.log(
      `Sent message successfully. Server replied with "${JSON.stringify(
        response
      )}.`
    );

    const slack = await notifySlack(data);
    console.log({
      slackStatus: slack.status,
      slackStatusText: slack?.statusText,
    });
    return [
      response,
      {
        slackStatus: slack.status,
        slackStatusText: slack?.statusText,
      },
    ];
  } catch (e) {
    const msg = `sendpostmark.ts failed. Server replied with "${e}".`;
    console.error(msg);
    await notifySlack(msg, true);
    return msg;
  }
}

export default sendpostmark;
