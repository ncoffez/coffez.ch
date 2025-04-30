<template>
  <div class="h-fit w-full my-8">
    <div id="express-checkout-element" class="w-full h-full"></div>
  </div>
</template>

<script lang="ts" setup>
const { stripe } = useClientStripe();
const props = defineProps({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

watch(
  stripe,
  async () => {
    if (!stripe.value) return;
    // https://github.com/stripe-samples/accept-a-payment/blob/main/payment-element/client/vue-cva/src/components/SrCheckoutForm.vue
    const { clientSecret, error } = await $fetch("/api/payment/create-payment-intent", {
      method: "POST",
      body: { ...props },
    });
    if (error) {
      throw new Error(`${error.value?.message}`);
    }

    const elements = stripe.value.elements({
      clientSecret: clientSecret,
    });
    const expressCheckoutElement = elements.create("expressCheckout");
    expressCheckoutElement.on("confirm", async (event) => {
      // call Stripe function to initiate payment confirmation
      const { error } = await stripe.value.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.href}?isPaid=true`,
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
