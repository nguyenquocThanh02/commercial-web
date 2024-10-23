import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

import {Button} from "../ui/button";

import CountdownTimeSaleComponent from "./countdownTimeSale.component";

import loudSpeakerImg from "@/assets/img/loundSpeaker.png";

const PromoProductComponent = () => {
  const t = useTranslations("Home.PromoProduct");

  return (
    <div className="group relative flex h-[500px] w-full items-center justify-between bg-Text2">
      <div className="ml-[56px]">
        <div className="flex max-w-[443px] flex-col gap-8">
          <p className="font-semibold text-Button1">{t("feature")}</p>
          <h2 className="font-inter-font text-5xl font-semibold leading-[60px] text-Text">
            {t("title")}
          </h2>
          <CountdownTimeSaleComponent timeEnd="2024-11-25T10:00:00Z" />
        </div>
        <Button
          className="mt-10 h-[56px] w-[171px] bg-Button1 font-medium text-Secondary1"
          variant={"ghost"}
        >
          {t("buy-now")}
        </Button>
      </div>
      <div className="promo-bg-blur mr-11 flex">
        <Image
          alt="loudspeaker img"
          className="auto"
          height={420}
          src={loudSpeakerImg}
          width={600}
        />
      </div>
    </div>
  );
};

export default PromoProductComponent;
