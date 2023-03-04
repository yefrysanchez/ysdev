import React from "react";

const CaroImg = ({ img }) => {
  return (
    <div className="relative">
      <img
        className="w-full h-[500px] lg:h-[700px] object-cover"
        src={img}
        alt="banner img"
      />
      <div className="text-white lg:scale-150 p-5 bg-black/40 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
        <p className="font-thin">NEW ITEMS</p>
        <h1 className="text-2xl font-bold">TECH SALES</h1>
        <p className="font-bold text-xs underline text-sky-300">
          Discover More
        </p>
      </div>
    </div>
  );
};

export default CaroImg;
