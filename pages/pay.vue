<!-- pages/pay.vue -->
<template>
  <div>
    <h1 class="text-3xl font-bold">Make a payment to Coffez.ch</h1>
    <div id="express-checkout-element" class="h-fit w-fit my-4 p-4"></div>
    <UiDebugVariable name="Stripe" :variable="stripe" />
  </div>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "blank-page" });
const { stripe } = useClientStripe();

watch(stripe, (newValue) => createCheckout());

function createCheckout() {
  const appearance = {};
  const options = {};
  const elements = stripe.value.elements({
    mode: "payment",
    amount: 420,
    currency: "chf",
    appearance,
  });
  const expressCheckoutElement = elements.create("expressCheckout", options);
  expressCheckoutElement.on("confirm", async (event) => {
    const { error } = await stripe.value.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/success", // Redirect URL after payment
      },
    });
    if (error) {
      console.error("Payment confirmation failed:", error.message);
    }
  });
  expressCheckoutElement.mount("#express-checkout-element");
}
</script>
<style scoped></style>
