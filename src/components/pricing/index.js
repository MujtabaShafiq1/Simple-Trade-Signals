import React from "react";
import { NAV_OPTIONS, SUBSCRIPTION_PLANS } from "sts/utils/constants";
import { FaCheck } from "react-icons/fa6";

function Pricing() {
  return (
    <section id={NAV_OPTIONS.Pricing} className="max-w-screen-xl mx-auto my-8">
      <div className="text-center font-bold text-6xl md:text-7xl mb-10">
        <span className="text-neutral-100">Pricing</span>
        <span className="text-primary-100">&nbsp;Plans</span>
      </div>
      <div className="flex justify-center gap-8">
        {Object.keys(SUBSCRIPTION_PLANS).map((key, index) => (
          <div
            key={key}
            className={
              "py-8 px-6 flex flex-col gap-8 border-y border-x max-w-72 border-[#2F2F2F] rounded-3xl shadow-sm scale-100 hover:scale-[1.01] transition-all duration-300 text-black bg-white"
            }>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg leading-[30px] font-semibold">{key}</h3>

              <div className="min-h-[76px]">
                <p>{SUBSCRIPTION_PLANS[key].description}</p>
              </div>

              <div className="font-semibold">
                <span className="text-[34px] leading-10 ">$XY</span>
                <span className="text-base leading-[26px]">/month</span>
              </div>
            </div>

            {SUBSCRIPTION_PLANS[key].options.length > 0 && (
              <div className="flex flex-col gap-2">
                {SUBSCRIPTION_PLANS[key].options.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div>
                      <FaCheck />
                    </div>
                    <h3 className="text-base leading-[26px]">{item}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
