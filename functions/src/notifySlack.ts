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

  const fetch = require("node-fetch");
  const botWebhook =
    "https://hooks.slack.com/services/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";
  try {
    const response = await fetch(botWebhook, {
      method: "post",
      body: body,
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(`Fetch failed. ${e}`);
    return e;
  }
}

export default notifySlack;
