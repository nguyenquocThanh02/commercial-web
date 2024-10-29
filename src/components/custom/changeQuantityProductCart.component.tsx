import React from "react";
import Image from "next/image";

import {Input} from "../ui/input";

import {typeProductSelect} from "@/types";
import {cartStore} from "@/store";
import dropdown from "@/assets/svg/DropdownSmallIcon.svg";
import dropup from "@/assets/svg/DropupSmallIcon.svg";

const ChangeQuantityProductCartComponent: React.FC<{item: typeProductSelect}> = ({item}) => {
  const {cart, setCart} = cartStore();

  const isQuantityValid = (quantity: number) => {
    const unitsInStock = item.product.unitsInStock || 0;

    return quantity >= 1 && quantity <= unitsInStock;
  };

  const handleUpdateCart = (newQuantity: number) => {
    const updatedCart = cart.map((cartItem) => {
      if (
        cartItem.product.id === item.product.id &&
        cartItem.selectedSize === item.selectedSize &&
        cartItem.selectedColor === item.selectedColor
      ) {
        return {...cartItem, quantity: newQuantity};
      }

      return cartItem;
    });

    setCart(updatedCart);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

    if (isQuantityValid(newValue)) {
      handleUpdateCart(newValue);
    }
  };

  const increaseQuantity = () => {
    if (isQuantityValid(item.quantity + 1)) {
      handleUpdateCart(item.quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1 && isQuantityValid(item.quantity - 1)) {
      handleUpdateCart(item.quantity - 1);
    }
  };

  return (
    <div className="relative">
      <Input
        className="h-[44px] w-[72px] border border-Text2"
        value={item.quantity}
        onChange={handleInputChange}
      />
      <div className="absolute bottom-[6px] right-2 flex flex-col">
        <button
          className="flex size-4 items-center justify-center hover:bg-Text1"
          onClick={increaseQuantity}
        >
          <Image alt="drop up icon" sizes="6" src={dropup} />
        </button>
        <button
          className="flex size-4 items-center justify-center hover:bg-Text1"
          onClick={decreaseQuantity}
        >
          <Image alt="drop down icon" sizes="6" src={dropdown} />
        </button>
      </div>
    </div>
  );
};

export default ChangeQuantityProductCartComponent;
