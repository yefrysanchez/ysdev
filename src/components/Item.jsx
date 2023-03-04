import React from "react";

const Item = () => {
  return (
    <div>
      <div className="group relative w-[300px] h-[400px] rounded-lg overflow-hidden">
        <img
          className="w-full h-full group-hover:scale-105 duration-300 object-cover cursor-pointer"
          src="https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format"
          alt=""
        />
        <div className="absolute bottom-[10%] left-0 w-full px-[5%]">
          <div className="flex justify-between ">
            {/* Amount */}

            <div className="hidden duration-300 group-hover:flex items-center w-full justify-around text-xl rounded-lg">
              <div className="cursor-pointer bg-black text-white py-1 px-2 rounded-lg">
                <i className="fa-solid fa-minus"></i>
              </div>
              <span className=" bg-black text-white py-1 px-2 rounded-lg">
                1
              </span>
              <div className="cursor-pointer bg-black text-white py-1 px-2 rounded-lg">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <button className="hidden group-hover:block bg-black text-white w-full py-2 rounded-lg mt-4 font-bold lg:hover:opacity-80 duration-300">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="mt-1">
        <p>Category</p>
        <h3 className="font-bold">Item Name</h3>
        <p>$199.99</p>
      </div>
    </div>
  );
};

export default Item;
