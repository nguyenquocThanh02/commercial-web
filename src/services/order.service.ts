import instance from "@/mocks";
import {typeOrder} from "@/types/order.type";

export const OrderApis = {
  createOrder: async (data: typeOrder) => {
    try {
      const response = await instance.post("/order", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
