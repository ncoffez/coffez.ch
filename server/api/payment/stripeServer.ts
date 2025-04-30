import { defineEventHandler } from "h3";
import { useServerStripe } from "#stripe/server";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const stripe = await useServerStripe(event);
  console.info("Stripe instance:", stripe);

  return {
    client_secret: config.STRIPE_TEST_PRIVATE_KEY,
  };
});
