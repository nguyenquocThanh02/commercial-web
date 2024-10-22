import {useQuery} from "@tanstack/react-query";

import {ProductApis} from "@/services";

export const useQueryProduct = {
  useBanners: () => {
    return useQuery({queryKey: ["banners"], queryFn: () => ProductApis.getBanner()});
  },
  useCategories: () => {
    return useQuery({
      queryKey: ["categories"],
      queryFn: () => ProductApis.getCategories(),
    });
  },
  useProduct: (limit: string | number, page: string | number) => {
    return useQuery({
      queryKey: ["products", limit, page],
      queryFn: () => ProductApis.getProduct(limit, page),
    });
  },
};
