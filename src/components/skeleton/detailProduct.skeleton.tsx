import React from "react";

import {Skeleton} from "../ui/skeleton";

const DetailProductSkeleton = () => {
  return (
    <div className="l-container flex h-32 flex-col gap-5 md:h-[600px] md:flex-row md:justify-between">
      <div className="flex w-[700px] flex-col gap-4 md:flex-1 md:flex-row md:gap-8">
        <div className="flex gap-4 md:flex-col">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-[138px] w-[170px]" />
          ))}
        </div>
        <Skeleton className="h-full w-[500px]" />
      </div>
      <Skeleton className="h-full w-full flex-1" />
    </div>
  );
};

export default DetailProductSkeleton;
