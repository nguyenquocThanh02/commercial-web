"use client";
import React, {useState} from "react";
import {useTranslations} from "use-intl";

import ShopIcon from "../icon/shop.icon";

import iconDelivery from "@/assets/svg/icon-delivery.svg";
import iconService from "@/assets/svg/Icon-service.svg";
import iconGuarantee from "@/assets/svg/Icon-guarantee.svg";
const TrustMetricComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const t = useTranslations("About.TrustMetric");
  const trustMetrics = [
    {
      icon: iconDelivery,
      amount: "10.5k",
      details: t("detail1"),
    },
    {
      icon: iconService,
      amount: "20k",
      details: t("detail2"),
    },
    {
      icon: iconGuarantee,
      amount: "33k",
      details: t("detail3"),
    },
    {
      icon: iconGuarantee,
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
              <ShopIcon strokeColor={hoveredIndex === index ? "black" : "white"} />
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
