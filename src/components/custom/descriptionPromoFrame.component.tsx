import React from "react";

import ShopNowComponent from "./shopNow.component";

const DescriptionPromoFrameComponent: React.FC<{title: string; description: string}> = ({
  title,
  description,
}) => {
  return (
    <div className="absolute bottom-8 left-8 flex max-w-[255px] flex-col gap-4">
      <h3 className="font-inter-font text-2xl font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
      <ShopNowComponent link="#" />
    </div>
  );
};

export default DescriptionPromoFrameComponent;
