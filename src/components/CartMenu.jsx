import React, { useState } from "react";

const CartMenu = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div
      className={`${
        isCartOpen ? "block" : "hidden"
      } bg-black/50 fixed z-50 w-full h-full left-0 top-0 overflow-auto`}
    >
      <div className="fixed bg-white right-0 bottom-0 h-full w-full md:max-w-lg">
        <div className="p-8 overflow-auto h-full">
          <div className="flex justify-between items-center mb-4">
            <h3>SHOPPING CART (0)</h3>
            <div className="text-3xl cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          {/* Cart List */}

          <div className="max-h-[80%] overflow-auto">
            <div>
              <div className="flex justify-between items-center py-4">
                <div className="flex-[1_1_40%] w-[123px] h-[164px] mr-4 rounded-lg overflow-hidden">
                  <img
                    className="object-cover h-full w-full "
                    src="https://media.wired.com/photos/5fb2cc575c9914713ead03de/3:2/w_2400,h_1600,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg"
                    alt="picture"
                  />
                </div>
                <div className="flex-[1_1_60%]">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold">Item Name</h3>
                      <p className="text-xs w-40 ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ad nam quidem officiis illo sit sapiente vel neque
                        veritatis cupiditate eaque.
                      </p>
                    </div>
                    <div className="text-xl cursor-pointer">
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div className="mx-4 flex justify-between pr-4">
                    <div className="flex content-center  ">
                      <div className="border cursor-pointer px-1">
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <span className="mx-2">1</span>
                      <div className="border cursor-pointer px-1">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">$500</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total */}

          <div className="mt-4">
            <div className="flex justify-end gap-8">
              <h3 className="font-bold">SUBTOTAL:</h3>
              <h3 className="font-bold">$500</h3>
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
