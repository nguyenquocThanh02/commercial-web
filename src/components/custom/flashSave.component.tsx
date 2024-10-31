"use client";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useTranslations} from "next-intl";
import {Swiper as SwiperType} from "swiper";

import ListProductSkeleton from "../skeleton/listProduct.skeleton";

import SectionTitle from "./sectionTitle.component";
import CountdownTimeSaleComponent from "./countdownTimeSale.component";
import ArrowButton from "./arrowButton.component";
import ProductCardComponent from "./productCard.component";

import {useQueryProduct} from "@/hooks/useQueryHooks";
import {typeProduct} from "@/types";
const FlashSaveComponent = () => {
  const {data, isLoading} = useQueryProduct.useProduct(8, 1);
  const t = useTranslations("Home.FlashSave");

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mt-[140px] overflow-hidden">
      <div className="l-container mb-[70px] flex w-full flex-col items-stretch justify-between gap-5 xl:flex-row xl:items-end">
        <div className="flex items-end justify-between xl:gap-[87px]">
          <SectionTitle feature={t("feature")} title={t("title")} />
          <CountdownTimeSaleComponent timeEnd="2024-11-25T10:00:00Z" variant="ghost" />
        </div>
        <div className="ml-auto mt-5 flex items-center gap-3">
          <ArrowButton direct="left" onClick={() => swiperRef.current?.slidePrev()} />
          <ArrowButton direct="right" onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
      <Swiper
        breakpoints={{
          440: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1140: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="l-container"
        scrollbar={{draggable: true}}
        slidesPerView={4}
        spaceBetween={30}
        style={{overflow: "visible"}}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data?.products &&
          data.products.map((item: typeProduct, index: number) => (
            <SwiperSlide key={index} className="flex w-full justify-center">
              <ProductCardComponent key={index} data={item} style="sale" />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="l-container">
        {isLoading && <ListProductSkeleton />}
        <hr className="mt-[70px] text-Text2/30" />
      </div>
    </section>
  );
};

export default FlashSaveComponent;
