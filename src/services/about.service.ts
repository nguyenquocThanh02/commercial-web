import {http} from "@/axios/axios";

export const AboutApis = {
  getInforShop: async () => {
    try {
      const response = await http.get("/inforShop");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getSocials: async () => {
    try {
      const response = await http.get("/socials");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
