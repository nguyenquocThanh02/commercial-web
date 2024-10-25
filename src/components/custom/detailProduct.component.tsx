// "use client";
// import {useState, useEffect} from "react";
// import "swiper/css";
// import "swiper/css/navigation"; // Import CSS cho Navigation
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper"; // Import Navigation module
// import {cn} from "@/libs/utils";

// const ProductDetailComponent = ({params}: {params: {id: string}}) => {
//   const [swiper, setSwiper] = useState<any>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const imageSources = [
//     "https://swiperjs.com/demos/images/nature-1.jpg",
//     "https://swiperjs.com/demos/images/nature-2.jpg",
//     "https://swiperjs.com/demos/images/nature-3.jpg",
//     "https://swiperjs.com/demos/images/nature-4.jpg",
//   ];

//   useEffect(() => {
//     if (swiper) {
//       const handleSlideChange = () => {
//         setActiveIndex(swiper.realIndex);
//       };
//       swiper.on("slideChange", handleSlideChange);
//       return () => {
//         swiper.off("slideChange", handleSlideChange);
//       };
//     }
//   }, [swiper]);

//   return (
//     <section className="l-container flex items-center">
//       <div className="my-10">
//         <nav className="flex flex-col gap-4">
//           {imageSources.map((item, index) => (
//             <li key={index}>
//               <button onClick={() => swiper.slideTo(index)} className="h-20 w-20">
//                 <img
//                   src={item}
//                   alt={`Thumbnail ${index}`}
//                   className={cn("h-full w-full object-cover", {
//                     "opacity-100": activeIndex === index,
//                     "opacity-50": activeIndex !== index,
//                   })}
//                 />
//               </button>
//             </li>
//           ))}
//         </nav>
//       </div>
//       <div className="relative w-full">
//         <Swiper
//           className="h-96 w-full rounded-lg"
//           loop={true}
//           spaceBetween={10}
//           navigation={true} // Kích hoạt Navigation
//           onSwiper={setSwiper}
//           modules={[Navigation]} // Thêm Navigation module
//         >
//           {imageSources.map((item, index) => (
//             <SwiperSlide key={index}>
//               <img src={item} className="block h-full w-full object-cover" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* Các nút tùy chỉnh cho điều hướng */}
//         <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
//           <button
//             className="rounded-full bg-white p-2 shadow transition duration-300 hover:bg-gray-200"
//             onClick={() => swiper?.slidePrev()} // Kiểm tra swiper có tồn tại
//           >
//             ◀
//           </button>
//         </div>
//         <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
//           <button
//             className="rounded-full bg-white p-2 shadow transition duration-300 hover:bg-gray-200"
//             onClick={() => swiper?.slideNext()} // Kiểm tra swiper có tồn tại
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailComponent;

"use client";
import React, {useState} from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

import {useQueryProduct} from "@/hooks/useQueryHooks";
import RatingComponent from "@/components/custom/rating.component";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import {cn} from "@/libs/utils";
import PrimaryButton from "@/components/custom/primaryButton.ui";
import SecondaryButton from "@/components/custom/secondaryButton.component";
import WishlistIcon from "@/components/icon/wishlist.icon";
import iconDeliveryBlack from "@/assets/svg/iconDeliveryBlack.svg";
import iconReturn from "@/assets/svg/Icon-return.svg";
const ProductDetailComponent: React.FC<{id: string}> = ({id}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const t = useTranslations("DetailProduct.InfoProduct");
  const locale = useLocale();

  const {data, isLoading} = useQueryProduct.useDetailProduct(id);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="l-container flex h-[600px] gap-[71px]">
      <div className="w-[700px]">
        <div className="">
          <Swiper
            className="w-1/2"
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            spaceBetween={10}
            thumbs={{swiper: thumbsSwiper}}
          >
            {/* Slides for main swiper */}
            {Array.from({length: 10}).map((_, index) => (
              <SwiperSlide key={index}>
                <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <Swiper
            className="mySwiper"
            freeMode={true}
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
          >
            {/* Slides for thumbnail swiper */}
            {Array.from({length: 10}).map((_, index) => (
              <SwiperSlide key={index}>
                <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="font-inter-font text-2xl font-semibold">{data.name}</h1>
        <div className="my-4 flex items-center gap-2">
          <RatingComponent rating={data.rating} />
          <p className="mt-[2px] text-sm font-semibold text-Text2/50">({data.numberOfReviews})</p>
          <h3 className="text-sm text-Button1">
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
          {/* {
            <p className="ml-1 font-medium text-Text2/50 line-through">
              {renderPriceFollowCurrency(locale, data.price[locale])}
            </p>
          } */}
        </div>
        <p className="my-6 text-sm">{data.description}</p>
        <hr className="text-Primary1" />
        <div className="mt-6 flex flex-col gap-6">
          {data.colors.length > 1 && (
            <div className="flex gap-6">
              <h3 className="text-xl">{t("colours")}:</h3>
              <div className="flex gap-2">
                {data.colors.map((color) => (
                  <div key={color.colorName} className="relative">
                    <div
                      className={cn("h-5 w-5 cursor-pointer rounded-full", {
                        // "border-4 border-Primary": color.colorName === selectColor.colorName,s
                      })}
                      style={{backgroundColor: color.colorHex}}
                      // onClick={() => handleClick(color)}
                    />
                    {/* {color.colorName === selectColor.colorName && (
                  <div className="absolute inset-0 rounded-full border-2 border-Text2" />
                )} */}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-6">
            <h3 className="text-xl">{t("sizes")}:</h3>
            <div className="flex gap-4">
              {data?.sizes &&
                data.sizes.map((item, index) => (
                  <div
                    key={index}
                    className="flex size-8 items-center justify-center rounded border border-Primary1 text-Primary1"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input className="h-[44px] w-[159px] border" type="number" />
            <PrimaryButton className="h-[44px] w-[165px]">{t("buttonBuy")}</PrimaryButton>
            <SecondaryButton className="h-fit w-fit">
              <WishlistIcon height={32} width={32} />
            </SecondaryButton>
          </div>
          <div className="mt-10 flex h-[180px] w-full flex-col rounded border border-Primary1/50">
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
