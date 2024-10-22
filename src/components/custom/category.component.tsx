"use client";
import React from "react";

import {ScrollArea} from "../ui/scroll-area";

import {typeCategory} from "@/types";
import {useQueryProduct} from "@/hooks/useQueryHooks";

const CategoryComponent = () => {
  const {data} = useQueryProduct.useCategories();
  const categories: typeCategory[] = data?.categories || [];

  return (
    <ScrollArea className="h-[344px] w-full">
      <ul className="flex flex-col gap-4">
        {categories && categories.length > 0 ? (
          categories.map((item) => <li key={item.id}>{item?.name}</li>)
        ) : (
          <li className="">No categories available</li>
        )}
      </ul>
    </ScrollArea>
  );
};

export default CategoryComponent;
