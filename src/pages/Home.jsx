import React from "react";
import MainCarousel from "../components/MainCarousel";
import ShoppingList from "../components/ShoppingList";
import Subscribe from "../components/Subscribe";


const Home = () => {
  return (
    <div className="pt-[60px]">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
