"use client";
import React from "react";
import Image from "next/image";
import {useTranslations} from "use-intl";

import SectionTitle from "./sectionTitle.component";
import DescriptionPromoFrameComponent from "./descriptionPromoFrame.component";

import ps5Img from "@/assets/img/ps5Img.png";
import womenCollectionImg from "@/assets/img/womenCollectImg.png";
import speakersImg from "@/assets/img/speakersImg.png";
import perfumeImg from "@/assets/img/perfumeImg.png";

const NewArrivalComponent = () => {
  const t = useTranslations("Home.NewArrival");

  return (
    <div className="">
      <div>
        <SectionTitle feature={t("feature")} title={t("tittle")} />
      </div>
      <div className="item-center mt-[60px] flex flex-col justify-between gap-[30px] text-Text lg:flex-row">
        <div className="relative flex h-[600px] flex-1 items-end justify-center rounded bg-Text2">
          <Image alt="ps5 img" height={511} src={ps5Img} width={511} />
          <DescriptionPromoFrameComponent
            description={t("Frame1.description")}
            title={t("Frame1.title")}
          />
        </div>
        <div className="flex flex-1 flex-col items-baseline justify-between gap-[30px] lg:gap-0">
          <div className="relative flex h-[284px] w-full items-end justify-end rounded bg-Text2">
            <Image alt="women collection img" height={286} src={womenCollectionImg} width={432} />
            <DescriptionPromoFrameComponent
              description={t("Frame2.description")}
              title={t("Frame2.title")}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-[30px] lg:flex-row">
            <div className="relative flex h-[284px] w-full items-center justify-center rounded bg-Text2 lg:flex-1">
              <Image alt="speaker img" height={221} src={speakersImg} width={190} />
              <DescriptionPromoFrameComponent
                description={t("Frame3.description")}
                title={t("Frame3.title")}
              />
            </div>
            <div className="relative flex h-[284px] w-full items-center justify-center rounded bg-Text2 lg:flex-1">
              <Image alt="perfume img" height={222} src={perfumeImg} width={210} />
              <DescriptionPromoFrameComponent
                description={t("Frame4.description")}
                title={t("Frame4.title")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalComponent;
