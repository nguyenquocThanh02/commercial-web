"use client";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import {Gallery, Item} from "react-photoswipe-gallery";
import {Swiper as SwiperType} from "swiper";
import {notFound, useRouter} from "next/navigation";
import {toast} from "sonner";

import AddToWishlistComponent from "../form/addToWishListComponent";
import DetailProductSkeleton from "../skeleton/detailProduct.skeleton";

import InputQuanlityComponent from "./inputQuanlity.component";
import {BreadcrumbComponent} from "./breadscrumb.component";
import SizesProductComponent from "./sizesProduct.component";

import {useQueryProduct} from "@/hooks/useQueryHooks";
import RatingComponent from "@/components/custom/rating.component";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {cn} from "@/libs/utils";
import PrimaryButton from "@/components/custom/primaryButton.ui";
import iconDeliveryBlack from "@/assets/svg/iconDeliveryBlack.svg";
import iconReturn from "@/assets/svg/Icon-return.svg";
import {typeColor} from "@/types";
import {productSelectStore} from "@/store/productSelect.store";
import {localStorageKey} from "@/constants/localStorage";

const ProductDetailComponent: React.FC<{id: string}> = ({id}) => {
  const t = useTranslations("DetailProduct.InfoProduct");
  const locale = useLocale();
  const route = useRouter();

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const {productSelect, setProductSelect} = productSelectStore();

  const {data, isLoading} = useQueryProduct.useDetailProduct(id);

  useEffect(() => {
    if (data) {
      setProductSelect({
        product: data,
        selectedColor: data.colors[0],
        selectedSize: "",
        quantity: 1,
        totalPrice: 0,
        discount: 0,
      });
    }
  }, [data]);

  const nav = [
    {
      name: "Product",
      link: "/",
    },
    {
      name: data?.category,
      link: "#",
    },
    {
      name: data?.name,
      link: "#",
    },
  ];

  if (data?.message) {
    return notFound();
  }
  if (isLoading) {
    return <DetailProductSkeleton />;
  }

  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setSelectedColorIndex(swiper.activeIndex);
  };

  const handleBuyNow = () => {
    if (
      Array.isArray(productSelect.product.sizes) &&
      productSelect.product.sizes.length > 0 &&
      !productSelect.selectedSize
    ) {
      toast.warning(t("toastSize"));
    }
    localStorage.setItem(localStorageKey.order, JSON.stringify([productSelect]));
    route.push("/checkout");
  };

  return (
    <section>
      <BreadcrumbComponent links={nav} />

      <div className="mt-[140px] flex h-[600px] gap-[71px]">
        <div className="flex w-full max-w-[700px] gap-[30px]">
          <div>
            <Swiper
              className="mySwiper h-full w-[170px]"
              direction="vertical"
              freeMode={true}
              // loop={true}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView={4}
              spaceBetween={16}
              watchSlidesProgress={true}
              onSwiper={setThumbsSwiper}
            >
              {data?.colors &&
                data.colors.map((item: typeColor, index: number) => (
                  <SwiperSlide
                    key={index}
                    className="flex h-[138px] items-center justify-center rounded bg-Secondary opacity-50"
                  >
                    <Image
                      alt=""
                      className="m-auto"
                      height={114}
                      objectFit="cover"
                      quality={100}
                      src={item.imageUrl}
                      width={121}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="">
            <Gallery>
              <Swiper
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                onSlideChange={handleSlideChange}
                onSwiper={setMainSwiper}
                className="h-full w-[500px]"
                // loop={true}
                modules={[FreeMode, Navigation, Thumbs]}
              >
                {data?.colors &&
                  data.colors.map((item: typeColor, index: number) => (
                    <SwiperSlide key={index} className="flex h-full rounded bg-Secondary">
                      <Item
                        height="768"
                        original={item.imageUrl}
                        thumbnail={item.imageUrl}
                        width="1024"
                      >
                        {({ref, open}) => (
                          <Image
                            ref={ref}
                            alt="swiper product detail"
                            className="m-auto"
                            height={315}
                            objectFit="cover"
                            quality={100}
                            src={item.imageUrl}
                            width={400}
                            onClick={open}
                          />
                        )}
                      </Item>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Gallery>
          </div>
        </div>

        <div className="flex h-full flex-1 flex-col justify-between">
          <div>
            <h1 className="font-inter-font text-2xl font-semibold">{data.name}</h1>
            <div className="my-2 flex items-center gap-2">
              <RatingComponent rating={data.rating} />
              <p className="mt-[2px] text-sm font-semibold text-Text2/50">
                ({data.numberOfReviews})
              </p>
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
                  {data?.colors &&
                    data.colors.map((color: typeColor, index: number) => (
                      <div key={color.colorName} className="relative">
                        <div
                          className={cn("h-5 w-5 cursor-pointer rounded-full", {
                            "border-4 border-Primary": selectedColorIndex === index,
                          })}
                          style={{backgroundColor: color.colorHex}}
                          onClick={() => handleColorSelect(index)}
                        />
                        {selectedColorIndex === index && (
                          <div className="absolute inset-0 rounded-full border-2 border-Text2" />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
            <SizesProductComponent />
            <div className="flex items-center gap-4">
              <InputQuanlityComponent />
              <PrimaryButton className="h-[44px] w-[165px]" onClick={handleBuyNow}>
                {t("buttonBuy")}
              </PrimaryButton>
              <div className="flex size-10 items-center justify-center rounded border border-Primary1">
                <AddToWishlistComponent data={data} />
              </div>
            </div>
            <div className="mt-5 flex h-[180px] w-full flex-col rounded border border-Primary1/50">
              <div className="flex flex-1 items-center gap-4 border-b border-b-Primary1/50 p-4">
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
