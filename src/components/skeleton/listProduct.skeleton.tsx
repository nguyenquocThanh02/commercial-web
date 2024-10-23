import React from "react";

import {Skeleton} from "../ui/skeleton";

const ListProductSkeleton = () => {
  return (
    <ul className="my-[60px] flex w-full gap-8">
      {Array.from({length: 4}, (_, index) => (
        <li key={index} className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-[250px] w-full" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
        </li>
      ))}
    </ul>
  );
};

export default ListProductSkeleton;
