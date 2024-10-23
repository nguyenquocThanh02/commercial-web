"use client";
import React from "react";
import {useTranslations} from "next-intl";

import SecondaryButton from "./secondaryButton.component";

import CardProductWishlistComponent from "@/components/custom/cartProductWishlist.component";
import {wishlistStore} from "@/store";

const WishlistSectionComponent = () => {
  const {wishlist} = wishlistStore();
  const t = useTranslations("Wishlist.MainSection");

  const handleMoveAllToBadge = () => {
    console.log("test");
  };

  return (
    <div>
      <div className="mt-20 flex items-center justify-between">
        <h1 className="text-xl">
          {t("title")} ({wishlist.length})
        </h1>
        <SecondaryButton className="w-[223px]" onClick={handleMoveAllToBadge}>
          {t("button")}
        </SecondaryButton>
      </div>
      <div className="mt-[60px] flex flex-wrap gap-[30px]">
        {wishlist &&
          wishlist.map((item, index) => <CardProductWishlistComponent key={index} data={item} />)}
      </div>
      {/* <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  );
};

export default WishlistSectionComponent;
