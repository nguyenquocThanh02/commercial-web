import {typeProductSelect} from "./product.type";

export type typeInfoCheckout = {
  firstName: string;
  companyName?: string;
  streetAddress: string;
  other?: string;
  townCity: string;
  phone: string | number;
  email: string;
};
export type typeOrder = {
  items: typeProductSelect[];
  total: number;
  discount: number;
  infoCheckout: typeInfoCheckout;
};
