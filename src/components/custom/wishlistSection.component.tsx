"use client";
import React from "react";
import {useTranslations} from "next-intl";

import SecondaryButton from "./secondaryButton.component";

import CardProductWishlistComponent from "@/components/custom/cartProductWishlist.component";
import {wishlistStore} from "@/store";
import {Link} from "@/app/navigation";

const WishlistSectionComponent = () => {
  const {wishlist} = wishlistStore();
  const t = useTranslations("Wishlist.MainSection");

  const handleMoveAllToBadge = () => {
    console.log("test");
  };

  if (wishlist.length === 0) {
    return (
      <div className="mt-20 flex justify-center gap-2">
        <h2 className="text-xl">{t("empty")}</h2>
        <Link className="text-xl font-medium text-Secondary2 underline hover:opacity-75" href={"/"}>
          {t("redirect")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">
          {t("title")} ({wishlist.length})
        </h1>
        <SecondaryButton className="md:w-[223px]" onClick={handleMoveAllToBadge}>
          {t("button")}
        </SecondaryButton>
      </div>
      <div className="mt-[60px] flex flex-wrap justify-center gap-[30px] lg:justify-start">
        {wishlist &&
          wishlist.map((item, index) => <CardProductWishlistComponent key={index} data={item} />)}
      </div>
    </div>
  );
};

export default WishlistSectionComponent;
