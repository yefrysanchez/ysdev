import React from "react";
import { Carousel } from "react-responsive-carousel";

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <div onClick={onClickHandler}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <div onClick={onClickHandler}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}
    >
      <CaroImg img={img4} isNonMobile={isNonMobile} />
      <CaroImg img={img2} isNonMobile={isNonMobile} />
      <CaroImg img={img3} isNonMobile={isNonMobile} />
      <CaroImg img={img1} isNonMobile={isNonMobile} />
      <CaroImg img={img5} isNonMobile={isNonMobile} />
    </Carousel>
  );
};

export default MainCarousel;
