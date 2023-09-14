import { ofetch } from 'ofetch'

async function notifySlack(data: any, plain_text = false) {
  let body = `{
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Nouvelle demande de contact sur <coffez.ch>."
        }
      },
      {
        "type": "section",
        "fields": [
          {
            "type": "plain_text",
            "text": ":phone: ${data.phone}",
            "emoji": true
          },
          {
            "type": "plain_text",
            "text": ":email: ${data.to}",
            "emoji": true
          }
        ]
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": ">*${data.name}* \n>${data.message}"
        }
      }
    ]
  }`;

  if (plain_text) {
    body = `{
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": ":warning: ${data}",
          "emoji": true
        }
      }
    ]
  }`;
  }

  try {
    const response = await ofetch(process.env.SLACK_COMMANDES!, {
      method: "post",
      body: body,
      headers: { "Content-Type": "application/json" },
    });
    const data = response;
    return data;
  } catch (e) {
    console.log(`Fetch failed. ${e}`);
    return e;
  }
}

export default notifySlack;
