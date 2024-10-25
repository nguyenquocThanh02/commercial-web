"use client";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

import AddToWishlistComponent from "../form/addToWishListComponent";

import InputQuanlityComponent from "./inputQuanlity.component";

import {useQueryProduct} from "@/hooks/useQueryHooks";
import RatingComponent from "@/components/custom/rating.component";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {cn} from "@/libs/utils";
import PrimaryButton from "@/components/custom/primaryButton.ui";
import iconDeliveryBlack from "@/assets/svg/iconDeliveryBlack.svg";
import iconReturn from "@/assets/svg/Icon-return.svg";
import {typeColor} from "@/types";
const ProductDetailComponent: React.FC<{id: string}> = ({id}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [swiper, setSwiper] = useState<any>(null);
  const [amount, setAmount] = useState<number>(1);

  const t = useTranslations("DetailProduct.InfoProduct");
  const locale = useLocale();

  const {data, isLoading} = useQueryProduct.useDetailProduct(id);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSlideChange = (index: number) => {
    swiper.slideTo(index);
    console.log(swiper);
  };

  return (
    <section className="flex h-[600px] gap-[71px]">
      <div className="flex w-full max-w-[700px] gap-5">
        <div>
          <Swiper
            className="mySwiper"
            direction="vertical"
            freeMode={true}
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
          >
            {data.colors.map((item: typeColor, index: number) => (
              <SwiperSlide key={index} className="!flex rounded !bg-Secondary">
                <Image
                  alt=""
                  className="m-auto"
                  height={114}
                  objectFit="cover"
                  src={item.imageUrl}
                  width={121}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <Swiper
            className="mySwiper2"
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            spaceBetween={10}
            thumbs={{swiper: thumbsSwiper}}
            onSwiper={setSwiper}
          >
            {data.colors.map((item: typeColor, index: number) => (
              <SwiperSlide key={index} className="!flex h-full rounded !bg-Secondary">
                <Image
                  alt=""
                  className="m-auto"
                  height={315}
                  objectFit="cover"
                  src={item.imageUrl}
                  width={400}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex h-full flex-1 flex-col justify-between">
        <div>
          <h1 className="font-inter-font text-2xl font-semibold">{data.name}</h1>
          <div className="my-2 flex items-center gap-2">
            <RatingComponent rating={data.rating} />
            <p className="mt-[2px] text-sm font-semibold text-Text2/50">({data.numberOfReviews})</p>
            <h3 className="mt-[2px] text-sm text-Button1">
              {data.unitsInStock > 0 ? t("inStock") : t("outOfStock")}
            </h3>
          </div>
          <div className="flex items-end gap-3">
            <p className="text-2xl text-Primary1">
              {renderPriceFollowCurrency(
                locale,
                calculatePriceSale(data.price[locale], data.discountPercentage),
              )}
            </p>
          </div>
          <p className="my-6 text-sm">{data.description}</p>
          <hr className="text-Primary1" />
        </div>
        <div className="flex flex-col gap-6">
          {data.colors.length > 1 && (
            <div className="flex items-center gap-6">
              <h3 className="text-xl">{t("colours")}:</h3>
              <div className="flex gap-2">
                {data.colors.map((color: typeColor, index: number) => (
                  <div key={color.colorName} className="relative">
                    <div
                      className={cn("h-5 w-5 cursor-pointer rounded-full", {
                        "border-4 border-Primary": index === swiper?.activeIndex,
                      })}
                      style={{backgroundColor: color.colorHex}}
                      onClick={() => handleSlideChange(index)}
                    />
                    {index === swiper?.activeIndex && (
                      <div className="absolute inset-0 rounded-full border-2 border-Text2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-6">
            <h3 className="text-xl">{t("sizes")}:</h3>
            <div className="flex gap-4">
              {data?.sizes &&
                data.sizes.map((item: string, index: number) => (
                  <button
                    key={index}
                    className="flex size-8 items-center justify-center rounded border border-Primary1 text-Primary1 transition-all duration-300 hover:border-none hover:bg-Secondary2 hover:text-Text"
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <InputQuanlityComponent amount={amount} setAmount={setAmount} />
            <PrimaryButton className="h-[44px] w-[165px]">{t("buttonBuy")}</PrimaryButton>
            <div className="flex size-10 items-center justify-center rounded border border-Primary1">
              <AddToWishlistComponent data={data} />
            </div>
          </div>
          <div className="mt-5 flex h-[180px] w-full flex-col rounded border border-Primary1/50">
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-grow items-center gap-4 border-b border-b-Primary1/50 p-4">
                <Image alt="delivery icon" sizes="40" src={iconDeliveryBlack} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium leading-6">{t("methodDelivery")}</h3>
                  <p className="text-xs font-medium underline">{t("linkChooseMethod")}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-grow items-center gap-4 p-4">
                <Image alt="return icon" sizes="40" src={iconReturn} />
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium leading-6">{t("return")}</h3>
                  <p className="text-xs font-medium">
                    {t("returnDetail")} <span className="underline">{t("linkReturn")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailComponent;
