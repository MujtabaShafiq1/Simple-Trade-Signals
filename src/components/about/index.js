import React from "react";
import { FaChartSimple as ChartIcon } from "react-icons/fa6";
import { Button } from "../base/button";

const About = () => {
  return (
    <section className="max-w-screen-xl border-none flex items-center justify-between p-12 my-32 mx-auto bg-secondary-100 rounded-3xl">
      <div className="w-1/2 text-neutral-50 space-y-6">
        <h1 className="font-bold text-6xl md:text-7xl mb-10">
          Unlock Your Trading Potential
        </h1>
        <h6 className="font-normal text-lg md:text-2xl">
          Join us today to receive expert analysis, actionable signals, and tailored
          strategies designed to optimize your trading performance. Take control of your
          financial future with data you can trust.
        </h6>
      </div>
      <div className="w-1/2">
        <ChartIcon className="w-full h-96 text-neutral-50" />
      </div>
    </section>
  );
};

export default About;
