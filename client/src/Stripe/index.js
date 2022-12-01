import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MA0JJA6JLprqSfEVmSQNdhfLDRKUiSFM80ExAXTHYM4wrINoIcFXtdLuVVMukT947zFINvYnCA6QPNzBXNEMxvV00PiQs1aKn"
);

export default stripePromise;
