// components/Carousel.js
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ icons, direction = "right" }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      icons.map(({ Icon, color }, index) => (
        <div
          key={index}
          className="flex justify-center items-center h-40 w-11/12 bg-primary-100 bg-opacity-15 text-4xl text-neutral-50 rounded-lg">
          <Icon
            onDragStart={(e) => e.preventDefault()}
            className={`text-6xl`}
            style={{ color }}
          />
        </div>
      ))
    );
  }, [icons]);

  const carouselProps = {
    autoPlay: true,
    autoPlayInterval: 1000,
    infinite: true,
    disableButtonsControls: true,
    disableDotsControls: true,
    responsive: {
      0: { items: 2 },
      768: { items: 4 },
      1024: { items: 6 },
    },
  };

  return (
    <AliceCarousel
      {...carouselProps}
      items={items}
      mouseTracking
      autoPlayDirection={direction === "right" ? "rtl" : "ltr"}
    />
  );
};

export default Carousel;
