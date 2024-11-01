import {typeCoupon, typeProductSelect} from "./product.type";

export type typeCart = {
  cart: typeProductSelect[];
  setCart: (value: typeProductSelect[]) => void;
};

export type typeCouponStore = {
  coupons: typeCoupon[];
  setCoupons: (value: typeCoupon, isAdding: boolean) => void;
  clearCoupons: () => void;
};
