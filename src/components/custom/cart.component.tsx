"use client";
import React from "react";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

import {Link} from "@/app/navigation";
import SecondaryButton from "@/components/custom/secondaryButton.component";
import {Input} from "@/components/ui/input";
import {cartStore} from "@/store";
import {calculatePriceSale, renderPriceFollowCurrency} from "@/utils";
import closeIcon from "@/assets/svg/closeIcon.svg";
const CartComponent = () => {
  const t = useTranslations("");
  const locale = useLocale();

  const {cart, setCart} = cartStore();

  const headerCart = [
    t("Cart.Header.product"),
    t("Cart.Header.price"),
    t("Cart.Header.quantity"),
    t("Cart.Header.subtotal"),
  ];

  const handleQuantityChange = (productId: string | number, newQuantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId && (item.product.unitsInStock ?? 0) >= newQuantity) {
        return {...item, quantity: Math.max(1, newQuantity)};
      }

      return item;
    });

    setCart(updatedCart);
  };

  const handleRemove = (id: number | string) => {
    const updatedCart = cart.filter((item) => item.product.id !== id);

    setCart(updatedCart);
  };

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
          <div
            key={index}
            className="shadow-input-primary group relative mt-10 flex h-[102px] w-full items-center px-10"
          >
            <div
              className="absolute left-8 top-4 hidden size-[18px] items-center justify-center rounded-full bg-Secondary2 text-Text transition-all duration-300 hover:cursor-pointer group-hover:flex"
              onClick={() => handleRemove(item.product.id)}
            >
              <Image alt="close icon" sizes="6" src={closeIcon} />
            </div>
            <div className="flex flex-1 items-center gap-[15px]">
              <div>
                <Image
                  alt="image product"
                  height={54}
                  src={item?.selectedColor?.imageUrl || item.product.colors[0].imageUrl}
                  width={54}
                />
              </div>
              {item.product.name}
              {item.selectedSize ? `(${item.selectedSize})` : ""}
            </div>
            <div className="flex flex-1 items-center text-Text2/50">
              {renderPriceFollowCurrency(locale, item.product.price[locale])}
            </div>
            <div className="flex flex-1 items-center">
              <Input
                className="h-[44px] w-[72px] border border-Text2"
                min="0"
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.product.id, parseInt(e.target.value, 10))
                }
              />
            </div>
            <div className="flex flex-1 items-center text-Text2/50">
              {renderPriceFollowCurrency(
                locale,
                calculatePriceSale(item.product.price[locale], item.product.discountPercentage) *
                  item.quantity,
              )}
            </div>
          </div>
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
