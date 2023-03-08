import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Formik } from "formik";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC);

export const Checkout = () => {
  return (
    <div className="pt-[80px] w-5/4 mx-auto min-h-screen mb-8">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
