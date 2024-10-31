import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

import aboutImg from "@/assets/img/aboutImg.png";

const AboutUsComponent = () => {
  const t = useTranslations();

  return (
    <div className="relative my-20 w-full xl:mb-[280px] xl:mt-[240px]">
      <div className="l-container mt-20 flex flex-col items-center justify-center xl:flex-row xl:justify-between">
        <div className="max-w-[525px]">
          <h1 className="text-center text-[54px] font-semibold leading-[64px] xl:text-left">
            {t("About.Header.title")}
          </h1>
          <div className="mt-10 space-y-6 text-center xl:text-left">
            <p className="leading-[26px]">{t("About.Header.content1")}</p>
            <p className="leading-[26px]">{t("About.Header.content2")}</p>
          </div>
        </div>
        <div className="mt-5 flex-shrink xl:absolute xl:right-0 xl:mt-0 xl:flex">
          <Image
            priority
            alt="slider auth"
            className="rounded-lg xl:rounded-none"
            height={609}
            src={aboutImg}
            width={705}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
