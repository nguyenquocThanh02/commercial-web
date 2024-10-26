import {typeProductSelect} from "./product.type";

export type typeCart = {
  cart: typeProductSelect[];
  setCart: (value: typeProductSelect[]) => void;
};
