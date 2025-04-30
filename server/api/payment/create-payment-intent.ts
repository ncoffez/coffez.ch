import { useServerStripe } from "#stripe/server";

export default defineEventHandler(async (event) => {
  // https://stripe.com/docs/api/payment_intents/create

  const { amount, description } = await readBody(event);
  const stripe = await useServerStripe(event);
  const orderAmount = amount || 420;
  let paymentIntent;

  try {
    paymentIntent = await stripe.paymentIntents.create({
      currency: "chf",
      amount: orderAmount,
      description: description,
      automatic_payment_methods: { enabled: true },
    });
    return {
      clientSecret: paymentIntent.client_secret,
      error: null,
    };
  } catch (e) {
    return {
      clientSecret: null,
      error: e,
    };
  }
});
