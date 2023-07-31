import axios, { AxiosResponse } from "axios";

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  const url = "https://us-central1-coffez-ch.cloudfunctions.net/sendmail";
  try {
    const response: AxiosResponse = await axios.post(url, data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
})

