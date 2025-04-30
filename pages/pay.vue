<!-- pages/pay.vue -->
<template>
  <div>
    <h1 class="text-3xl font-bold">Make a Payment to Coffez.ch</h1>
    <div id="express-checkout-element" class="h-fit w-fit my-4 p-4"></div>
    <UiDebugVariable name="Stripe" :variable="stripe" />
  </div>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "home" });
const { stripe } = useClientStripe();

watch(
  stripe,
  async () => {
    if (!stripe.value) return;
    // https://github.com/stripe-samples/accept-a-payment/blob/main/payment-element/client/vue-cva/src/components/SrCheckoutForm.vue
    const { clientSecret, error } = await $fetch<{ clientSecret: string; error?: string }>(
      "/api/payment/create-payment-intent"
    );
    if (error) {
      console.error(error);
      return;
    }

    const elements = stripe.value.elements({
      clientSecret: clientSecret as string,
    });
    const expressCheckoutElement = elements.create("expressCheckout");
    expressCheckoutElement.on("confirm", async (event) => {
      // call Stripe function to initiate payment confirmation
      const { error } = await stripe.value.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: "https://example.com",
        },
      });
    });
    expressCheckoutElement.mount("#express-checkout-element");
  },
  {
    immediate: true,
  }
);
</script>
<style scoped></style>
