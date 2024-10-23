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
  id: number;
  name: string;
  description: string;
  colors: typeColor[];
  price: any;
  discountPercentage: number;
  rating: number;
  numberOfReviews: number;
  unitsInStock: number;
  isNew: boolean;
  purchaseCount: number;
};

export type typeWishlist = {
  wishlist: typeProduct[];
  setWishlist: (value: typeProduct[]) => void;
};
