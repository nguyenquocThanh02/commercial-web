import Image from "next/image";
import React from "react";

import TwitterIcon from "../icon/twitter.icon";
import InstagramIcon from "../icon/instagram.icon";
import LinkedInIcon from "../icon/linkedin.icon";

import {typeCardPerson} from "@/types";

const CardPersonComponent: React.FC<{data: typeCardPerson}> = ({data}) => {
  return (
    <div className="h-[564px] w-[370px]">
      <div className="flex h-[430px] w-[370px] items-end justify-center rounded bg-Secondary">
        <Image alt="cart person" src={data.image} />
      </div>
      <div className="mt-8 space-y-4">
        <h1 className="font-inter-font text-[32px] font-medium leading-[30px]">{data.name}</h1>
        <p className="mt-2 leading-6">{data.job}</p>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
};

export default CardPersonComponent;
