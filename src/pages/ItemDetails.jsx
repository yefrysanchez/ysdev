import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FilteredItem from "../components/FilteredItem";
import { addToCart } from "../state/cartSlice";

const ItemDetails = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  const url = `https://${
    import.meta.env.VITE_REACT_APP_API_ID
  }.api.sanity.io/v2021-10-21/data/query/${
    import.meta.env.VITE_REACT_APP_DATASET
  }?query=${import.meta.env.VITE_REACT_APP_QUERY}`;

  const fetchItems = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setItems(data.result.find((item) => item.slug.current === itemId));
  };

  useEffect(() => {
    fetchItems();
  }, [itemId]);

  const count = 1

  return (
    <div className="pt-[80px] w-4/5 mx-auto ">
      <div className="flex flex-col lg:flex-row gap-x-10">
        {/* IMAGE */}
        <div className=" flex-[1_1_40%] mb-10">
          <img
            className="w-full h-full object-contain"
            src={items.image}
            alt={items.name}
          />
        </div>

        {/* ACTION */}
        <div className="flex-[1_1_50%] mb-10">
          <div className="flex justify-between">
            <p>HOME/ITEM</p>
            <p>PREV NEXT</p>
          </div>

          <div className="mt-10 mb-6">
            <h3 className="font-bold text-2xl">{items.name}</h3>
            <p>${items.price}</p>
            <p className="mt-5">{items.desc}</p>
          </div>

          {/* COUNT AND BUTTON */}

          <div className="flex items-center min-h-[50px]">
            {/* <div className="flex items-center mr-5 p-1">
              <div onClick={() => dispatch(decrement({ _id: items._id }))} className="cursor-pointer mr-1 bg-black text-white py-1 px-2 rounded-lg">
                <i className="fa-solid fa-minus"></i>
              </div>
              <span className=" bg-black mr-1 text-white py-1 px-2 rounded-lg">
                {items.count}
              </span>
              <div onClick={() => dispatch(increment({ _id: items._id }))} className="cursor-pointer bg-black text-white py-1 px-2 rounded-lg">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div> */}
            <button
              onClick={() => dispatch(addToCart({ item: { ...items, count } }))}
              className=" bg-black md:w-[250px] text-white w-full py-2 rounded-lg font-bold lg:hover:opacity-80 duration-300"
            >
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
            <p>{items.category}</p>
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
            {items.longDesc}
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
        <div className="mt-5 flex flex-wrap justify-center gap-x-[1.33%] lg:justify-start">
          <FilteredItem category={items.category} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
