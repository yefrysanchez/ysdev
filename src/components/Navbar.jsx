import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { setIsCartOpen } from "../state/cartSlice";



const Navbar = () => {
 
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();

  return (
    <header className="flex shadow-md items-center w-full h-[60px] bg-white fixed top-0 left-0 z-50">
      <nav className=" w-full md:w-4/5 mx-auto flex justify-between items-center px-4 lg:px-0">
        <div className="group hover:bg-black duration-300 bg-slate-100 rounded-lg cursor-pointer">
          <Link to="/">
            <h1 className="text-4xl tracking-tighter group-hover:text-white font-bold px-5 py-1 ">
              YS
            </h1>
          </Link>
        </div>
        <ul className="flex gap-4">
          <li className="group hover:bg-black duration-300 bg-slate-100 rounded-full py-1 px-2 cursor-pointer">
            <i className="group-hover:text-white fa-solid fa-magnifying-glass"></i>
          </li>
          <Link to="/login">
            <li className="group hover:bg-black duration-300 bg-slate-100 rounded-full py-1 px-2 cursor-pointer">
              <i className="group-hover:text-white fa-solid fa-user"></i>
            </li>
          </Link>
          <li onClick={()=> dispatch(setIsCartOpen())} className="group hover:bg-black duration-300 relative bg-slate-100 rounded-full py-1 px-2 cursor-pointer">
            <i className="group-hover:text-white fa-solid fa-cart-shopping"></i>
            <div className="absolute h-4 w-4 rounded-full right-[-6px] top-[-6px] bg-red-500 flex justify-center items-center font-bold text-white text-xs">
              <span>{cart.length}</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
