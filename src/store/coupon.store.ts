import {create} from "zustand";

import {typeCoupon} from "@/types";
import {typeCouponStore} from "@/types/cart.type";

export const couponStore = create<typeCouponStore>((set) => ({
  coupons: [],
  setCoupons: (value: typeCoupon) =>
    set((state) => ({
      coupons: [...state.coupons, value],
    })),
}));
