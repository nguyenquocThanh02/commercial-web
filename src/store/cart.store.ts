import {create} from "zustand";

import {localStorageKey} from "@/constants/localStorage";
import {typeCart} from "@/types/cart.type";

const initialCart =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(localStorageKey.cart) || "[]") || []
    : [];

export const cartStore = create<typeCart>((set) => ({
  cart: [],
  setCart: (value) => {
    set({cart: value});
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey.cart, JSON.stringify(value));
    }
  },
}));
