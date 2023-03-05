import React from "react";

const Footer = () => {
  return (
    <div className="py-10 text-white bg-black">
      <div className="w-4/5 m-auto flex justify-between flex-wrap gap-x-[30px] ">
        <div className="md:w-1/3 lg:w-1/5">
          <h1 className="text-4xl tracking-tighter font-bold py-1 ">YS</h1>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            sapiente quas tenetur nemo aperiam facilis rem consequuntur non
            provident officiis.
          </p>
        </div>
        <div className="mt-8">
          <h4 className="font-bold mb-7">About</h4>
          <p className="mb-4 hover:underline hover:cursor-pointer">Careers</p>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Our Stores
          </p>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Terms & Conditions
          </p>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div className="mt-8">
          <h4 className="font-bold mb-7">Orders</h4>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Help Center
          </p>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Track your Order
          </p>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Order Status
          </p>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Returns & Refunds
          </p>
        </div>
        <div className="mt-8">
          <h4 className="font-bold mb-7">About</h4>
          <p className="mb-4 hover:underline hover:cursor-pointer">
            Contact Us
          </p>
          <p className="mb-4 ">New York, New York</p>
          <p className="mb-4 ">Email: Yefrymsp@gmail.com</p>
          <p className="mb-4 ">Portfolio: https://yefrysanchez.dev/</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
