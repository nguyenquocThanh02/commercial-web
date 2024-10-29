"use client";
import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";

import CartRowComponent from "./cartRow.component";
import PrimaryButton from "./primaryButton.ui";

import {Link} from "@/app/navigation";
import SecondaryButton from "@/components/custom/secondaryButton.component";
import {cartStore} from "@/store";
import emptyCart from "@/assets/img/emptyCart.png";

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
      {cart.length < 1 ? (
        <div className="flex flex-col gap-5">
          <div className="flex w-full items-center justify-center">
            <Image alt="empty cart" height={300} objectFit="cover" src={emptyCart} width={300} />
          </div>
          <h2 className="text-center text-3xl">{t("Cart.Empty.empty")}</h2>
          <Link className="mx-auto mt-2" href={"/"}>
            <PrimaryButton className="h-[52px] w-[254px]">
              {t("Cart.Empty.buttonReturn")}
            </PrimaryButton>
          </Link>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default CartComponent;
