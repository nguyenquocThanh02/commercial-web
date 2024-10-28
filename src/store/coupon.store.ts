import {create} from "zustand";

import {typeCoupon} from "@/types";
import {typeCouponStore} from "@/types/cart.type";

export const couponStore = create<typeCouponStore>((set) => ({
  coupons: [],
  setCoupons: (value: typeCoupon, isAdding: boolean) =>
    set((state) => {
      if (isAdding) {
        return {
          coupons: [...state.coupons, value],
        };
      } else {
        return {
          coupons: state.coupons.filter((coupon) => coupon.code !== value.code),
        };
      }
    }),
}));
