import React from "react";
import MainCarousel from "../components/MainCarousel";
import ShoppingList from "../components/ShoppingList";
import Subscribe from "../components/Subscribe";


const Home = () => {
  return (
    <div className="mt-[60px] min-h-screen">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
