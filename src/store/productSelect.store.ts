import {create} from "zustand";

import {typeProductSelect, typeProductSelectStore} from "@/types";

const initialCart: typeProductSelect = {
  product: {
    id: 0,
    name: "",
    description: "",
    colors: [],
    price: 0,
    isNew: false,
    unitsInStock: 0,
    category: "",
  },
  quantity: 1,
  totalPrice: 0,
  discount: 0,
};

export const productSelectStore = create<typeProductSelectStore>((set) => ({
  productSelect: initialCart,
  setProductSelect: (value) =>
    set((state) => ({
      productSelect: {
        ...state.productSelect,
        ...value,
      },
    })),
}));
