import React from "react";
import { NAV_OPTIONS, STATS } from "sts/utils/constants";

function Banner() {
  return (
    <>
      {/* Banner Section */}
      <section
        id={NAV_OPTIONS.Home}
        className="bg-gradient-linear text-neutral-50 flex flex-col items-center justify-center text-center gap-4 min-h-[90vh] min-w-full p-4">
        <div className="max-w-screen-md">
          <div className="flex flex-wrap justify-center mb-10">
            <h1 className="bricolage-font font-semibold text-5xl md:text-7xl">
              Welcome to Simple Trade Signals
            </h1>
          </div>
          <h6 className="text-lg md:text-2xl">
            At the forefront of financial markets, we specialize in delivering expert
            <span className="text-primary-300 font-bold">&nbsp;Forex&nbsp;</span>and
            <span className="text-primary-300 font-bold">&nbsp;PSX&nbsp;</span>analysis
            and signals. Whether you're a seasoned investor or just beginning your trading
            journey, our platform offers insights and actionable data to help you navigate
            market complexities with confidence and ease.
          </h6>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 w-11/12 bg-neutral-50 mx-auto max-w-screen-2xl rounded-xl shadow-lg">
        <div className="flex flex-wrap justify-center gap-8 py-4">
          {STATS.map(({ Icon, text, subText }) => (
            <div
              key={text}
              className="flex flex-col text-center items-center text-neutral-100 w-full sm:w-1/3 md:w-1/4 lg:w-1/6">
              <Icon className="text-primary-300 text-5xl mb-4" />
              <span className="font-bold text-xl mb-2">{text}</span>
              <p className="font-light text-lg">{subText}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Banner;
