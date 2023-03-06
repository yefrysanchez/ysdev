import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment, removeFromCart, setIsCartOpen } from "../state/cartSlice";

const CartMenu = () => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0)

  
  return (
    <div
      className={`${
        isCartOpen ? "block" : "hidden"
      } bg-black/50 fixed z-50 w-full h-full left-0 top-0 overflow-auto`}
    >
      <div className="fixed bg-white right-0 bottom-0 h-full w-full md:max-w-lg">
        <div className="p-8 overflow-auto h-full">
          <div className="flex justify-between items-center mb-4">
            <h3>SHOPPING CART ({cart.length})</h3>
            <div
              onClick={() => dispatch(setIsCartOpen())}
              className="text-3xl cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          {/* Cart List */}
          {cart.map((item) => (
            <div key={item._id} className="max-h-[80%] overflow-auto">
              <div>
                <div className="flex justify-between items-center py-4">
                  <div className="flex-[1_1_40%] w-[123px] h-[164px] mr-4 rounded-lg overflow-hidden">
                    <img
                      className="object-contain h-full w-full "
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-[1_1_60%]">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-xs w-40 ">{item.desc}</p>
                      </div>
                      <div onClick={() => dispatch(removeFromCart({_id: item._id}))} className="text-xl cursor-pointer">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                    </div>
                    <div className="mx-4 flex justify-between pr-4">
                      <div className="flex content-center  ">
                        <div onClick={() => dispatch(decrement())} className="border cursor-pointer px-1">
                          <i className="fa-solid fa-minus"></i>
                        </div>
                        <span className="mx-2">{count}</span>
                        <div onClick={() => dispatch(increment())} className="border cursor-pointer px-1">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold">${item.price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Total */}

          <div className="mt-4">
            <div className="flex justify-end gap-8">
              <h3 className="font-bold">SUBTOTAL:</h3>
              <h3 className="font-bold">${totalPrice.toFixed(2)}</h3>
            </div>
            <button className="bg-black text-white w-full py-4 rounded-lg mt-4 font-bold lg:hover:opacity-80 duration-300">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
