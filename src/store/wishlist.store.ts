import {create} from "zustand";

import {typeWishlist} from "@/types";
import {localStorageKey} from "@/constants/localStorage";

const initialWishlist =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem(localStorageKey.wishlist) || "[]") || []
    : [];

export const wishlistStore = create<typeWishlist>((set) => ({
  wishlist: initialWishlist,
  setWishlist: (value) => {
    set({wishlist: value});
    if (typeof window !== "undefined") {
      localStorage.setItem(localStorageKey.wishlist, JSON.stringify(value));
    }
  },
}));
