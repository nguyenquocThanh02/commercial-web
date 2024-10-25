// "use client";
// import {useState, useEffect} from "react";
// import "swiper/css";
// import "swiper/css/navigation"; // Import CSS cho Navigation
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper"; // Import Navigation module
// import {cn} from "@/libs/utils";

// const ProductDetailPage = ({params}: {params: {id: string}}) => {
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

// export default ProductDetailPage;

"use client";
import React, {useState} from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";

const ProductDetailPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className="flex h-[600px] gap-[71px]">
      <div className="w-[700px]">
        <div className="">
          <Swiper
            // style={{
            //   "--swiper-navigation-color": "#fff",
            //   "--swiper-pagination-color": "#fff",
            // }}
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
      <div className="flex-1" />
    </section>
  );
};

export default ProductDetailPage;
