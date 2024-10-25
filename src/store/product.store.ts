import {create} from "zustand";

import {typeProduct, typeProductStore} from "@/types";

export const productStore = create<typeProductStore>((set) => ({
  openQuickReviewAddToCart: false,
  openQuickReviewProduct: false,
  product: {
    id: "",
    name: "",
    description: "",
    colors: [],
    price: "",
    isNew: false,
  },
  setOpenQuickReviewProduct: (value: boolean) => set({openQuickReviewProduct: value}),
  setOpenQuickReviewAddToCart: (value: boolean) => set({openQuickReviewAddToCart: value}),
  setProduct: (product: typeProduct) => set({product}),
}));
