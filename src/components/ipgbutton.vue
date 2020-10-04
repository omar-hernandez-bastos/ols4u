<template>
  <v-btn
    @click="handleClick"
    dark
    rounded
    x-large
    color="primary"
    class="text-capitalize"
    >{{ $t("landing.btn") }}</v-btn
  >
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_live_AAU805pV8DnypI1xpGa9Uklv00xDi4bBgK");
export default {
  components: {},
  data: () => ({
    loading: false,
    error: null
  }),
  methods: {
    async handleClick() {
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await stripePromise;
      this.error = await stripe.redirectToCheckout({
        lineItems: [
          // Replace with the ID of your price
          { price: "price_1HJ0oLDLgW2xlJamsLqwshew", quantity: 1 }
        ],
        mode: "payment",
        successUrl: "https://ols4u.com/#/success",
        cancelUrl: "https://ols4u.com/#/rejected"
      });
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
    }
  }
};
</script>
