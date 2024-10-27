export type typeCategory = {
  id: string | "";
  name: string | "";
};

export type typeBanner = {
  id: string | "";
  name: string | "";
  type: string | "";
  image: string | "";
  logo: string | "";
};

export type typeColor = {
  colorName?: string;
  colorHex?: string;
  imageUrl: string;
};

export type typePrice = {
  en: string | number;
  vi: string | number;
};

export type typeProduct = {
  id: number | string;
  name: string;
  description: string;
  colors: typeColor[];
  price: any;
  discountPercentage?: number;
  rating?: number;
  numberOfReviews?: number;
  unitsInStock?: number;
  sizes?: string[];
  isNew: boolean;
  purchaseCount?: number;
};

export type typeWishlist = {
  wishlist: typeProduct[];
  setWishlist: (value: typeProduct[]) => void;
};

export type typeProductStore = {
  openQuickReviewProduct: boolean;
  openQuickReviewAddToCart: boolean;
  product: typeProduct;
  setOpenQuickReviewProduct: (value: boolean) => void;
  setOpenQuickReviewAddToCart: (value: boolean) => void;
  setProduct: (product: typeProduct) => void;
};

export type typeProductSelect = {
  product: typeProduct;
  quantity: number;
  selectedColor?: typeColor;
  selectedSize?: string;
  totalPrice: number;
  discount?: number;
};

export type typeProductSelectStore = {
  productSelect: typeProductSelect;
  setProductSelect: (value: any) => void;
};

export type typeCoupon = {
  id: string | number;
  code: string;
  discount: number | string;
  name: string;
};
