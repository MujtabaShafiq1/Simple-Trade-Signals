import React from "react";
import { NAV_OPTIONS, WHAT_WE_OFFER } from "sts/utils/constants";

const Offer = () => {
  return (
    <section id={NAV_OPTIONS.Services} className="max-w-screen-2xl bg-gradient-linear text-neutral-50 flex flex-col items-center justify-center text-center gap-4 py-20 min-w-full">
      <div className="font-bold text-5xl md:text-7xl mb-10">
        <h1>What We Offer</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {WHAT_WE_OFFER.map(({ Icon, heading, description }, index) => (
          <div
            key={index}
            className="bg-neutral-50 text-neutral-900 flex flex-col items-center border-2 border-primary-200 justify-center w-[320px] h-[320px] p-6 rounded-xl shadow-lg">
            <Icon className="text-primary-300 text-6xl mb-4" />
            <span className="font-bold text-2xl mb-4 text-center">{heading}</span>
            <p className="font-light text-md text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
