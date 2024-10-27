"use client";
import React from "react";
import {useTranslations} from "next-intl";
import {toast} from "sonner";

import SecondaryButton from "./secondaryButton.component";

import CardProductWishlistComponent from "@/components/custom/cardProductWishlist.component";
import {cartStore, wishlistStore} from "@/store";
import {Link} from "@/app/navigation";
import {typeProductSelect} from "@/types";
import {isProductEqual} from "@/utils";

const WishlistSectionComponent = () => {
  const {wishlist, setWishlist} = wishlistStore();
  const {cart, setCart} = cartStore();

  const t = useTranslations("Wishlist.MainSection");

  const handleMoveAllToBadge = () => {
    wishlist.map((item) => {
      let productSelect: typeProductSelect = {
        product: item,
        selectedColor: item.colors[0],
        selectedSize: item.sizes && item.sizes.length > 0 ? item.sizes[0] : "",
        quantity: 1,
        totalPrice: 0,
        discount: 0,
      };

      const existingProductIndex = cart.findIndex((itemCart: typeProductSelect) => {
        return isProductEqual(itemCart, productSelect);
      });

      if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += productSelect.quantity;
      } else {
        cart.push(productSelect);
      }
    });
    setCart(cart);
    setWishlist([]);
    toast.success(t("toastMoveAll") + ` + ${wishlist.length}`);
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
