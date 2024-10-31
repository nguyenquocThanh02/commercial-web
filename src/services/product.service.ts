import {http} from "@/axios/axios";

export const ProductApis = {
  getProduct: async (limit: string | number, page: string | number) => {
    try {
      const response = await http.get("/products", {
        params: {
          limit: limit.toString(),
          page: page.toString(),
        },
      });

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getDetailProduct: async (id: string | number) => {
    try {
      const response = await http.get("/product/details", {
        params: {
          id: id,
        },
      });

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getCoupons: async (code: string) => {
    try {
      const response = await http.get("/coupon", {
        params: {
          code: code,
        },
      });

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getCategories: async () => {
    try {
      const response = await http.get("/categories");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getBanner: async () => {
    try {
      const response = await http.get("/banners");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
