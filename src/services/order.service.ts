import {http} from "@/axios/axios";
import {typeOrder} from "@/types/order.type";

export const OrderApis = {
  createOrder: async (data: typeOrder) => {
    try {
      const response = await http.post("/order", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
