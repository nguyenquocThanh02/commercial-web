"use client";
import React from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import CardPersonComponent from "./cardPerson.component";

import man1 from "@/assets/img/man1.png";
import man2 from "@/assets/img/man2.png";
import women1 from "@/assets/img/women1.png";

const OurTeamComponent = () => {
  const items: any[] = [
    {
      image: man1,
      name: "Tom Cruise",
      job: "Founder & Chairman",
    },
    {
      image: women1,
      name: "Emma Watson",
      job: "Managing Director",
    },
    {
      image: man2,
      name: "Will Smith",
      job: "Product Designer",
    },
    {
      image: man1,
      name: "Tom Cruise",
      job: "Founder & Chairman",
    },
    {
      image: women1,
      name: "Emma Watson",
      job: "Managing Director",
    },
    {
      image: man2,
      name: "Will Smith",
      job: "Product Designer",
    },
  ];

  const autoplay = {
    delay: 2000,
    disableOnInteraction: true,
  };

  const pagination = {
    clickable: true,
    pagination: {
      el: ".pagination",
      clickable: true,
      // renderBullet: function (index: number, className: string) {
      //   return `<span class="">${index}</span>`;
      // },
      renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  };

  return (
    <div className="l-container">
      <Swiper
        autoplay={autoplay}
        className="h-[700px]"
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={pagination}
        slidesPerView={3}
        spaceBetween={30}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <CardPersonComponent data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeamComponent;
