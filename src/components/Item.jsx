import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addToCart } from "../state/cartSlice";

const Item = () => {
  const count = useSelector((state) => state.cart.count);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [items, setItems] = useState();
  const url = `https://${
    import.meta.env.VITE_REACT_APP_API_ID
  }.api.sanity.io/v2021-10-21/data/query/${
    import.meta.env.VITE_REACT_APP_DATASET
  }?query=${import.meta.env.VITE_REACT_APP_QUERY}`;

  const fetchItems = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setItems(data.result);
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
            className="w-full h-full group-hover:scale-105 duration-300 object-contain cursor-pointer"
            src={item.image}
            alt={item.name}
          />
          <div className="absolute bottom-[10%] left-0 w-full px-[5%]">
            <div className="flex justify-between ">
              {/* Amount */}

              <div className="hidden duration-300 group-hover:flex items-center w-full justify-around text-xl rounded-lg">
                <div onClick={() => dispatch(decrement())} className="cursor-pointer bg-black text-white py-1 px-2 rounded-lg">
                  <i className="fa-solid fa-minus"></i>
                </div>
                <span className=" bg-black text-white py-1 px-2 rounded-lg">
                  {count}
                </span>
                <div
                  onClick={() => dispatch(increment())}
                  className="cursor-pointer bg-black text-white py-1 px-2 rounded-lg"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <button onClick={() => dispatch(addToCart({ item: { ...item, count } }))} className="hidden group-hover:block bg-black text-white w-full py-2 rounded-lg mt-4 font-bold lg:hover:opacity-80 duration-300">
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

  return <>{itemCard}</>;
};

export default Item;
