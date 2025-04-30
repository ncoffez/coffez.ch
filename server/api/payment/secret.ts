export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const client_secret = config.STRIPE_TEST_SECRET_KEY;
  if (client_secret) return client_secret;
    else throw new Error(`STRIPE_TEST_SECRET_KEY is not available in current env.`);
});
