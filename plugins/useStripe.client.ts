// // plugins/stripe.client.js
// export default defineNuxtPlugin((nuxtApp) => {
//   const { stripe } = useClientStripe();

//   watch(
//     stripe,
//     async () => {
//       if (stripe.value) {
//         const { data, error } = await useFetch("/api/payment/create-payment-intent");
//         const clientSecret = data?.value?.clientSecret!;
//         if (error) {
//           console.error(error);
//           return;
//         }

//         const elements = stripe.value.elements({
//           clientSecret: clientSecret,
//         });
//         const linkAuthenticationElement = elements.create("linkAuthentication");
//         linkAuthenticationElement.mount("#linkAuthenticationElement");
//       }
//     },
//     { immediate: true }
//   );

//   return {
//     provide: {
//       stripe,
//     },
//   };
// });
