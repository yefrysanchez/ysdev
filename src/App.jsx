import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="font-Montserrat">
      <Navbar />
      <CartMenu />
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
