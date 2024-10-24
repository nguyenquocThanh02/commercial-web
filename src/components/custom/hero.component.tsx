import React from "react";

import CategoryComponent from "./category.component";

import BannerComponent from "@/components/custom/banner.component";

const HeroComponent = () => {
  return (
    <div className="l-container flex flex-col lg:flex-row">
      <div className="flex h-full min-h-[384px] w-1/5 items-end border-r border-Text2/30">
        <CategoryComponent />
      </div>
      <div className="flex flex-1 flex-shrink-0 items-end justify-end">
        <BannerComponent />
      </div>
    </div>
  );
};

export default HeroComponent;
