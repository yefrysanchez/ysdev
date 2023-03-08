import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();

const stripe = new Stripe(
  "sk_test_51MilnCJaoef1BX1CozAuYDUOfS5ZvhzuuePHGvpEteRx16v3CayYW8w0v7vNDSITBU1FBENRNVBzE6NbZe8ArlQ700Na5MndKt"
);

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "desc",
      payment_method: id,
      confirm: true,
    });

    res.send({ message: "Chipeo Realizado" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

app.listen(3000, () => {
  console.log("init server on server 3000");
});
