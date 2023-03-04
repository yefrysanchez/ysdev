import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import CaroImg from "./CaroImg";

const MainCarousel = () => {


  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <div className="absolute cursor-pointer hover:opacity-70 duration-300 top-1/2 left-4 text-white bg-black rounded-full px-4 py-2 z-10" onClick={onClickHandler}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <div className="absolute cursor-pointer hover:opacity-70 duration-300 top-1/2 right-4 text-white bg-black rounded-full px-4 py-2 z-10" onClick={onClickHandler}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}
    >
      <CaroImg img={img4} />
      <CaroImg img={img2} />
      <CaroImg img={img3} />
      <CaroImg img={img1} />
      <CaroImg img={img5} />
    </Carousel>
  );
};

export default MainCarousel;
