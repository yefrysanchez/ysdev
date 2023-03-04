import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartMenu from "./components/CartMenu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

function App() {


  return (
    <div className="font-Montserrat">
     <Navbar />
     <CartMenu />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="item/:itemId" element={<ItemDetails />}/>
      <Route path="/checkout"/>
     </Routes>
     
    </div>
  );
}

export default App;
