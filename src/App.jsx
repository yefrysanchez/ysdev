import "./App.css";
import CartMenu from "./components/CartMenu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {


  return (
    <div className="font-Montserrat">
     <Navbar />
     <Home />
     <CartMenu />
    </div>
  );
}

export default App;
