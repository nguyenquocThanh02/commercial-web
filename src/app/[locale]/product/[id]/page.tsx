"use client";
import {useState} from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductDetailPage = ({params}: {params: {id: string}}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // return (
  //   <div>
  //     <Swiper
  //       className="mySwiper2"
  //       loop={true}
  //       modules={[FreeMode, Navigation, Thumbs]}
  //       navigation={true}
  //       spaceBetween={10}
  //       style={{
  //         "--swiper-navigation-color": "#fff",
  //         "--swiper-pagination-color": "#fff",
  //       }}
  //       thumbs={{swiper: thumbsSwiper}}
  //     >
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  //       </SwiperSlide>
  //     </Swiper>
  //     <Swiper
  //       className="mySwiper"
  //       freeMode={true}
  //       loop={true}
  //       modules={[FreeMode, Navigation, Thumbs]}
  //       slidesPerView={4}
  //       spaceBetween={10}
  //       watchSlidesProgress={true}
  //       onSwiper={setThumbsSwiper}
  //     >
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  //       </SwiperSlide>
  //     </Swiper>
  //   </div>
  // );
};

export default ProductDetailPage;
