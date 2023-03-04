import React from "react";
import { Carousel } from "react-responsive-carousel";
import CaroImg from "../components/CaroImg";
import imgs from "../assets/img1.jpg";
import MainCarousel from "../components/MainCarousel";
import ShoppingList from "../components/ShoppingList";

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <ShoppingList />
    </div>
  );
};

export default Home;
