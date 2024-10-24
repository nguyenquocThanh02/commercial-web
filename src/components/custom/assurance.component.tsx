"use client";
import React from "react";
import {useTranslations} from "use-intl";

import AssuranceIconComponent from "./assuranceIcon.component";

import iconDelivery from "@/assets/svg/icon-delivery.svg";
import iconService from "@/assets/svg/Icon-service.svg";
import iconGuarantee from "@/assets/svg/Icon-guarantee.svg";
const AssuranceComponent = () => {
  const t = useTranslations("Home.Assurance");
  const arrayAssurances = [
    {
      icon: iconDelivery,
      name: t("Delivery.name"),
      details: t("Delivery.details"),
    },
    {
      icon: iconService,
      name: t("Service.name"),
      details: t("Service.details"),
    },
    {
      icon: iconGuarantee,
      name: t("Guarantee.name"),
      details: t("Guarantee.details"),
    },
  ];

  return (
    <div className="l-container my-[140px] flex flex-col items-center justify-center gap-[88px] md:flex-row">
      {arrayAssurances.map((item, index) => (
        <div key={index} className="flex w-[262px] flex-col items-center justify-center gap-6">
          <AssuranceIconComponent icon={item.icon} />
          <div>
            <h3 className="text-center text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-center text-sm">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssuranceComponent;
