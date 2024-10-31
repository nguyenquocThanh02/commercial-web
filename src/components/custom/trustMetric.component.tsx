"use client";
import React, {useState} from "react";
import {useTranslations} from "use-intl";

import ShopIcon from "../icon/shop.icon";
const TrustMetricComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const t = useTranslations("About.TrustMetric");
  const trustMetrics = [
    {
      icon: <ShopIcon strokeColor="white" />,
      amount: "10.5k",
      details: t("detail1"),
    },
    {
      icon: <ShopIcon strokeColor="white" />,
      amount: "20k",
      details: t("detail2"),
    },
    {
      icon: <ShopIcon strokeColor="white" />,
      amount: "33k",
      details: t("detail3"),
    },
    {
      icon: <ShopIcon strokeColor="white" />,
      amount: "28.8k",
      details: t("detail4"),
    },
  ];

  return (
    <div className="l-container my-[140px] flex flex-col items-center justify-center gap-[30px] md:flex-row md:items-start">
      {trustMetrics.map((item, index) => (
        <div
          key={index}
          className="group flex h-[230px] w-[270px] flex-col items-center justify-center gap-6 rounded border border-Text2/30 transition-all duration-300 hover:border-none hover:bg-Secondary2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <div className="flex h-20 w-20 rounded-full border-[11px] border-BorderIcon/30 group-hover:border-Text/30">
            <div className="m-auto rounded-full bg-Text2 px-[12px] py-[13px] group-hover:bg-Text">
              {React.cloneElement(item.icon, {
                strokeColor: hoveredIndex === index ? "black" : "white",
              })}
            </div>
          </div>
          <div>
            <h3 className="text-center text-[32px] font-bold leading-[30px] transition-all duration-300 group-hover:text-Text">
              {item.amount}
            </h3>
            <p className="mt-3 text-center text-sm leading-6 transition-all duration-300 group-hover:text-Text">
              {item.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustMetricComponent;
