"use client";
import React from "react";
import {Autoplay, Pagination} from "swiper/modules";
import {SwiperSlide, Swiper as SwiperPerson} from "swiper/react";

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
    delay: 3000,
    disableOnInteraction: true,
  };

  const pagination = {
    clickable: true,
    pagination: {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return `<span class="${className}"></span>`;
      },
    },
  };

  return (
    <div className="l-container">
      <SwiperPerson
        autoplay={autoplay}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="flex h-[700px] justify-center"
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={pagination}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex h-full justify-center">
            <CardPersonComponent data={item} />
          </SwiperSlide>
        ))}
      </SwiperPerson>
    </div>
  );
};

export default OurTeamComponent;
