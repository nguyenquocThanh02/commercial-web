"use client";
import React from "react";

import {ScrollArea} from "../ui/scroll-area";
import {Skeleton} from "../ui/skeleton";

import {typeCategory} from "@/types";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const CategoryComponent = () => {
  const {data, isLoading} = useQueryProduct.useCategories();
  const categories: typeCategory[] = data?.categories || [];

  return (
    <ScrollArea className="h-[344px] w-full">
      <ul className="mr-4 flex flex-col gap-4">
        {!isLoading && categories && categories.length > 0 ? (
          categories.map((item) => (
            <li
              key={item.id}
              className="transition-all duration-300 hover:cursor-pointer hover:text-Secondary2"
            >
              {item?.name}
            </li>
          ))
        ) : (
          <li>
            {Array.from({length: 10}, (_, index) => (
              <Skeleton key={index} className="mb-4 h-8 w-full" />
            ))}
          </li>
        )}
      </ul>
    </ScrollArea>
  );
};

export default CategoryComponent;
