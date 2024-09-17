import React from "react";
import Carousel from "./components/carousal";
import { CRYPTO_ICONS, FOREX_ICONS } from "sts/utils/constants";


function Introduction() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center my-32">
      <div className="max-w-screen-md text-neutral-100 flex flex-col items-center justify-center text-center gap-4 mb-12">
        <div className="font-bold text-6xl md:text-7xl mb-10">
          <h1>Why Trust Us?</h1>
        </div>
        <h6 className="text-lg md:text-2xl">
          Our analysis are backed by extensive research, in-depth market knowledge, and
          years of experience. Whether you're day trading or investing long-term, our
          signals are designed to give you that extra edge.
        </h6>
      </div>
      <Carousel icons={CRYPTO_ICONS} direction="right" />
      <Carousel icons={FOREX_ICONS} direction="left" />
    </section>
  );
}

export default Introduction;
