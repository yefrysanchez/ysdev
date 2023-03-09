import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { emptyCart } from "../state/cartSlice";

const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const [loading, setLoading] = useState(false);
  const [cardNotice, setCardNotice] = useState();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);

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
          "https://ysdev-server.onrender.com/api/checkout",
          {
            id,
            amount: (totalPrice * 100).toFixed(0),
          }
        );
        setCardNotice(data.message);
        element.getElement(CardElement).clear();
        if (data.message === "Successful payment") {
          setLoading(false);
          dispatch(emptyCart());
          navigate("/checkout/success");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-[600px] max-h-2/3  shadow-md border m-auto rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <div className="h-1/2  overflow-auto">
        {cart &&
          cart.map((item) => (
            <div
              key={item._id}
              className="h-[150px] mt-4 overflow-hidden border p-4 rounded-lg flex items-center gap-1"
            >
              <div className="w-1/2 h-full">
                <img
                  className="h-full w-full object-contain"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="w-1/2">
                <p>{item.name}</p>
                <p>Quantity: {item.count}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
      </div>

      <div>
        <h3 className="font-bold my-4">
          Total: ${totalPrice.toFixed(2)}
        </h3>
      </div>
      {cardNotice ? (
        <p className="text-red-500">{cardNotice}</p>
      ) : (
        <div>
          <p>Please do not use a real card</p>
          <p>Test Card#: 4242 4242 4242 4242</p>
        </div>
      )}
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
