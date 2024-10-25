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
export type typeSize = {
  size: string | number;
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
  sizes?: typeSize[];
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
