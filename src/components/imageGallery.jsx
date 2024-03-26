import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed (in milliseconds)
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img alt={`imag-${index}`} src={image} />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselSlider;
