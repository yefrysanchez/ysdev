import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, setItems } from "../state/cartSlice";

const Item = () => {
  let count = 1;
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://${
    import.meta.env.VITE_REACT_APP_API_ID
  }.api.sanity.io/v2021-10-21/data/query/${
    import.meta.env.VITE_REACT_APP_DATASET
  }?query=${import.meta.env.VITE_REACT_APP_QUERY}`;

  const fetchItems = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setItems(data.result));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, [url]);

  const itemCard =
    items &&
    items.map((item) => (
      <div key={item._id} className="m-4">
        <div className="group relative max-w-[300px] h-[400px] rounded-lg overflow-hidden">
          <img
            onClick={() => navigate(`/item/${item.slug.current}`)}
            className="w-full h-full group-hover:scale-105 duration-300 object-contain cursor-pointer"
            src={item.image}
            alt={item.name}
          />
          <div className="absolute bottom-[10%] left-0 w-full px-[5%]">
            <button
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              className="hidden z-50 group-hover:block bg-black text-white w-full py-2 rounded-lg mt-4 font-bold lg:hover:opacity-80 duration-300"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="mt-1">
          <p className="text-sm">{item.category}</p>
          <h3 className="font-bold">{item.name}</h3>
          <p>${item.price}</p>
        </div>
      </div>
    ));

  return (
    <>
      {isLoading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute text-white !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        itemCard
      )}
    </>
  );
};

export default Item;
