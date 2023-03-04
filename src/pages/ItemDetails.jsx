import React from "react";
import Item from '../components/Item'

const ItemDetails = () => {
  return (
    <div className="mt-[80px] w-4/5 mx-auto ">
      <div className="flex flex-col lg:flex-row gap-x-10">
        {/* IMAGE */}
        <div className=" flex-[1_1_40%] mb-10">
          <img
            className="w-full h-full object-contain"
            src="https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2022/11/so-many-rubber-duck-debugging-possibilities.jpeg"
            alt=""
          />
        </div>

        {/* ACTION */}
        <div className="flex-[1_1_50%] mb-10">
          <div className="flex justify-between">
            <p>HOME/ITEM</p>
            <p>PREV NEXT</p>
          </div>

          <div className="mt-10 mb-6">
            <h3 className="font-bold text-2xl">Item Name</h3>
            <p>$199.99</p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              corporis expedita molestias quia quibusdam. Error omnis ipsum
              consectetur magni. Nulla ipsum eaque iste saepe est.
            </p>
          </div>

          {/* COUNT AND BUTTON */}

          <div className="flex items-center justify-end min-h-[50px]">
            <div className="flex items-center mr-5 p-1">
              <div className="cursor-pointer mr-1 bg-black text-white py-1 px-2 rounded-lg">
                <i className="fa-solid fa-minus"></i>
              </div>
              <span className=" bg-black mr-1 text-white py-1 px-2 rounded-lg">
                1
              </span>
              <div className="cursor-pointer bg-black text-white py-1 px-2 rounded-lg">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <button className=" bg-black md:w-[250px] text-white w-full py-2 rounded-lg font-bold lg:hover:opacity-80 duration-300">
              ADD TO CART
            </button>
          </div>
          <div>
            <div className="flex mt-5 mb-1 cursor-pointer w-fit">
              <div>
                <i className="fa-solid fa-heart"></i>
              </div>
              <p className="ml-1 ">ADD TO WISHLIST</p>
            </div>
            <p>Category</p>
          </div>
        </div>
      </div>

      {/* REVIEWS AND DESC */}

      <div className="mx-5">
        <ul
          className="mb-5 flex list-none  pl-0 "
          id="pills-tab"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#pills-home"
              className="my-2 block rounded bg-neutral-100 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
              id="pills-home-tab"
              data-te-toggle="pill"
              data-te-target="#pills-home"
              data-te-nav-active
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              DESCRIPTION
            </a>
          </li>
          <li role="presentation">
            <a
              href="#pills-profile"
              className="my-2 block rounded bg-neutral-100 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4"
              id="pills-profile-tab"
              data-te-toggle="pill"
              data-te-target="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              REVIEWS
            </a>
          </li>
        </ul>
        <div className="mb-6">
          <div
            className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            data-te-tab-active
          >
            DESCRIPTION
          </div>
          <div
            className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            REVIEWS
          </div>
        </div>
      </div>

      {/* RELATED ITEMS */}

      <div className="mt-12 pt-4 w-full border-t-[1px]">
        <h3 className="font-bold text-2xl">Related Products</h3>
        <div className="mt-5 flex flex-wrap justify-center gap-x-[1.33%] md:justify-between">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
