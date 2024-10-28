"use client";
import React from "react";
import {useTranslations} from "next-intl";

import CartRowComponent from "./cartRow.component";

import {Link} from "@/app/navigation";
import SecondaryButton from "@/components/custom/secondaryButton.component";
import {cartStore} from "@/store";
const CartComponent = () => {
  const t = useTranslations("");
  const headerCart = [
    t("Cart.Header.product"),
    t("Cart.Header.price"),
    t("Cart.Header.quantity"),
    t("Cart.Header.subtotal"),
  ];

  const {cart} = cartStore();

  return (
    <div>
      <div className="shadow-input-primary flex h-[72px] w-full items-center px-10">
        {headerCart.map((item, index) => (
          <div key={index} className="flex-1">
            {item}
          </div>
        ))}
      </div>
      <div className="mb-6 w-full">
        {cart.map((item, index) => (
          <CartRowComponent key={index} item={item} />
        ))}
      </div>

      <Link href={"/"}>
        <SecondaryButton className="h-[56px] w-[218px]">
          {t("Cart.Header.buttonReturn")}
        </SecondaryButton>
      </Link>
    </div>
  );
};

export default CartComponent;
