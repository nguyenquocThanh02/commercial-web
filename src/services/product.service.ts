import instance from "@/mocks";

export const ProductApis = {
  getProduct: async (limit: string | number, page: string | number) => {
    try {
      const response = await instance.get("/products", {
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
      const response = await instance.get("/product/details", {
        params: {
          id: id,
        },
      });

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getCategories: async () => {
    try {
      const response = await instance.get("/categories");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getBanner: async () => {
    try {
      const response = await instance.get("/banners");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
