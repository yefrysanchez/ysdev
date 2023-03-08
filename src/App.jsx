import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import CartMenu from "./components/CartMenu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Checkout } from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC);

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="font-Montserrat">
      <Navbar />
      <CartMenu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="item/:itemId" element={<ItemDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<Confirmation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
