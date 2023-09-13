import axios, { AxiosResponse } from "axios";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const url = "https://sendmail-huczelrjxq-oa.a.run.app";
  
  const payload = {
    to: data.email,
    name: data.name,
    message: data.message,
    phone: data.phone
  };

  try {
    const response: AxiosResponse = await axios.post(url, payload);
    return {
      status: response.status,
      data: response.data
    }; // Return only the necessary data
  } catch (error) {
    console.error(error);
    throw {
      message: (error as any).message,
    }; // Handle error object
  }
});
