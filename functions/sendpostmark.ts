
import { ServerClient } from "postmark";
import notifySlack from "./notifySlack";
import { Request, Response } from 'express';
import { logger } from "firebase-functions/v2";

// Function to validate the request body
function validateRequestBody(body: any): boolean {
  return body && body.to && body.name && body.message && body.phone;
}

// Function to construct the email template
function constructEmailTemplate(body: any) {
  return {
    From: process.env.EMAIL_FROM || "info@coffez.ch", // Use an environment variable for the 'From' address
    To: body.to,
    TemplateAlias: "contact-form",
    TemplateModel: {
      product_url: "https://coffez.ch",
      product_name: "Coffez.ch",
      userName: body.name,
      message: body.message,
      userPhone: body.phone,
      company_name: "Coffez.ch",
      company_address: process.env.COMPANY_ADDRESS || "Kasthoferstrasse 50, 3006 Bern", // Use an environment variable for the company address
    },
  };
}

async function sendpostmark(req: Request, res: Response) {
  // Check if POSTMARK_TOKEN environment variable is defined
  if (!process.env.POSTMARK_TOKEN || process.env.POSTMARK_TOKEN === '') {
    logger.error("Missing POSTMARK_TOKEN environment variable");
    res.status(500).send("Internal Server Error: Missing POSTMARK_TOKEN environment variable");
    return;
  }

  const client = new ServerClient(process.env.POSTMARK_TOKEN);

  // Validate the request body
  if (!validateRequestBody(req.body)) {
    logger.error("Bad Request: Missing required fields in request body");
    res.status(400).send("Bad Request: Missing required fields in request body");
    return;
  }

  // Construct the email template
  const emailWithTemplate = constructEmailTemplate(req.body);
  logger.info(emailWithTemplate);

  try {
    await client.sendEmailWithTemplate(emailWithTemplate);
  } catch (postmarkError) {
    logger.error(`Postmark notification failed. ${postmarkError}`);
    res.status(500).send("Internal Server Error: Failed to send email with Postmark");
    return;
  }

  try {
    await notifySlack(req.body);
  } catch (slackError) {
    logger.error(`Slack notification failed. ${slackError}`);
    res.status(500).send("Internal Server Error: Failed to send Slack notification");
    return;
  }

  res.status(200).send("Success: Notifications sent");
}

export default sendpostmark;
