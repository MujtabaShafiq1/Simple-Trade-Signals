import React from "react";
import { NAV_OPTIONS, SUBSCRIPTION_PLANS } from "sts/utils/constants";
import { FaCheck } from "react-icons/fa6";

function Pricing() {
  return (
    <section
      id={NAV_OPTIONS.Pricing}
      className="max-w-screen-2xl bg-gradient-linear text-neutral-50 flex flex-col items-center justify-center text-center gap-4 mx-auto mb-32 py-12 min-w-full">
      <div className="text-center font-bold text-5xl md:text-7xl mb-10">
        <span className="text-neutral-50">Pricing Plans</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {Object.entries(SUBSCRIPTION_PLANS).map(([key, value], index) => (
          <div
            key={key}
            style={{ background: value.color }}
            className={`p-6 flex flex-col flex-wrap gap-8 border max-w-72 border-secondary-300 rounded-3xl shadow-sm scale-100 hover:scale-[1.01] transition-all duration-300 text-black bg-neutral-50`}>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium text-primary-300">{key}</h3>

              <div className="min-h-[76px]">
                <p>{value.description}</p>
              </div>

              <div className="font-semibold text-primary-300">
                <span className="text-5xl">$5</span>
                <span className="text-base">/month</span>
              </div>
            </div>

            {value.options.length > 0 && (
              <div className="flex flex-col gap-2">
                {value.options.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div>
                      <FaCheck className="text-secondary-300"/>
                    </div>
                    <h3 className="text-base">{item}</h3>
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
