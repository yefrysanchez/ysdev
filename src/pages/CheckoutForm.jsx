import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/checkout",
          {
            id,
            amount: 10000,
          }
        );
        console.log(data);
        element.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-[400px] shadow-md border m-auto rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <div className="h-[300px] overflow-hidden border-">
        <p>Item name</p>
        <p>Quantity: 1</p>
        <p>$99.99</p>
        <img
          className="h-full w-full object-contain"
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-mens-shoes-5QFp5Z.png"
          alt="alt"
        />
      </div>
      <div>
        <h3 className="font-bold my-4">Total: $100</h3>
      </div>
      <CardElement className="bg-black/10 p-4 rounded-lg " />
      <button
        disabled={!stripe}
        type="submit"
        className="bg-black text-white w-full py-4 rounded-lg mt-4 font-bold lg:hover:opacity-80 duration-300"
      >
        {loading ? (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute text-white !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          "Proceed To Pay"
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
