import { WebClient } from "@slack/web-api";

const slack = new WebClient(process.env.slackToken);
export default slack;