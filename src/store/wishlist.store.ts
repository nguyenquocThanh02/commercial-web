import {create} from "zustand";

import {typeWishlist} from "@/types";

export const wishlistStore = create<typeWishlist>((set) => ({
  wishlist: [],
  setWishlist: (value) => set(() => ({wishlist: value})),
}));
