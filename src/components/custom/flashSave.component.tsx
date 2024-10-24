// "use client";
// import {useTranslations} from "next-intl";
// import React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import ListProductSkeleton from "../skeleton/listProduct.skeleton";

// import SectionTitle from "./sectionTitle.component";
// import CountdownTimeSaleComponent from "./countdownTimeSale.component";
// import PrimaryButton from "./primaryButton.ui";
// import ProductCardComponent from "./productCart.component";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {useQueryProduct} from "@/hooks/useQueryHooks";
// import {cn} from "@/libs/utils";
// import {typeProduct} from "@/types";
// const FlashSaveComponent = () => {
//   const t = useTranslations("Home.FlashSave");
//   const plugin = React.useRef(Autoplay({delay: 1000, stopOnInteraction: true}));

//   const {data, isLoading} = useQueryProduct.useProduct(8, 1);

//   return (
//     <section className="">
//       <div>
//         <Carousel
//           className="-px-primary w-full max-w-[100vw] overflow-hidden"
//           opts={{loop: true}}
//           plugins={[plugin.current]}
//           onMouseEnter={plugin.current.stop}
//           onMouseLeave={plugin.current.reset}
//         >
//           <div className="relative flex w-full items-end gap-[87px]">
//             <SectionTitle feature={t("feature")} title={t("title")} />
//             <CountdownTimeSaleComponent timeEnd="2024-11-25T10:00:00Z" variant="ghost" />
//             <div className="absolute bottom-3 right-12">
//               <CarouselPrevious className="size-12" />
//               <CarouselNext className="size-12" />
//             </div>
//           </div>
//           {isLoading ? (
//             <ListProductSkeleton />
//           ) : (
//             <CarouselContent className="-mx-primary w-full">
//               {[...Array(Math.ceil(data.products.length / 4))].map((_, index) => (
//                 <CarouselItem key={index} className="w-full">
//                   <div
//                     className={cn("mt-10 flex flex-wrap justify-between", {
//                       "justify-start gap-[30px]":
//                         data.products.length % 4 !== 0 &&
//                         Math.ceil(data.products.length / 4) === index + 1,
//                     })}
//                   >
//                     {data.products
//                       .slice(index * 4, index * 4 + 4)
//                       .map((item: typeProduct, index: number) => (
//                         <ProductCardComponent key={index} data={item} style="sale" />
//                       ))}
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           )}
//         </Carousel>
//         {/* <div className="flex items-center gap-2">
//           <ArrowButton direct="left" />
//           <ArrowButton direct="right" />
//         </div> */}
//       </div>

//       <div className="flex">
//         <PrimaryButton className="mx-auto my-[60px] h-[56px] px-11 font-medium">
//           {t("button")}
//         </PrimaryButton>
//       </div>
//       <hr className="text-Text2/30" />
//     </section>
//   );
// };

// export default FlashSaveComponent;

"use client";
import {useTranslations} from "next-intl";
import React from "react";

import SectionTitle from "./sectionTitle.component";
import CountdownTimeSaleComponent from "./countdownTimeSale.component";
import ArrowButton from "./arrowButton.component";

import {useQueryProduct} from "@/hooks/useQueryHooks";
const FlashSaveComponent = () => {
  const t = useTranslations("Home.FlashSave");
  // const plugin = React.useRef(Autoplay({delay: 1000, stopOnInteraction: true}));

  const {data, isLoading} = useQueryProduct.useProduct(8, 1);

  return (
    <section className="mt-[140px]">
      <div className="l-container flex w-full flex-col items-stretch justify-between gap-5 xl:flex-row xl:items-end">
        <div className="flex items-end justify-between xl:gap-[87px]">
          <SectionTitle feature={t("feature")} title={t("title")} />
          <CountdownTimeSaleComponent timeEnd="2024-11-25T10:00:00Z" variant="ghost" />
        </div>
        <div className="ml-auto mt-5 flex items-center gap-3">
          <ArrowButton direct="left" />
          <ArrowButton direct="right" />
        </div>
      </div>
      {/* <div className="l-container overflow-visible">
        <ul className="overflow-visible">
          {[...Array(4)].map((_, index) => (
            <li className="mx-8 h-20 bg-Secondary2" key={index}>
              {index}
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div className="slider">
        <div className="container">
          <h1>Test Slider</h1>
        </div>
        <div className="container2 container">
          <ul className="slider-test">
            <li>Banner 1</li>
            <li>Banner 2</li>
            <li>Banner 3</li>
            <li>Banner 4</li>
            <li>Banner 5</li>
            <li>Banner 6</li>
            <li>Banner 7</li>
            <li>Banner 8</li>
            <li>Banner 9</li>
            <li>Banner 10</li>
          </ul>
        </div>
      </div> */}

      <hr className="mt-[70px] text-Text2/30" />
    </section>
  );
};

export default FlashSaveComponent;
// "use client";
// import React, {useRef} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SliderComponent = () => {
//   const sliderRef = useRef(null);

//   const settings = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//   };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <section className="slider">
//       <div className="container">
//         <h1>Test Slider</h1>
//         <div className="navigation">
//           <button onClick={prevSlide}>Previous</button>
//           <button onClick={nextSlide}>Next</button>
//         </div>
//       </div>
//       <div className="container2 container">
//         <Slider ref={sliderRef} {...settings} className="slider-test">
//           {Array.from({length: 10}, (_, index) => (
//             <div key={index} className="slick-slide">
//               <li>Banner {index + 1}</li>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default SliderComponent;
