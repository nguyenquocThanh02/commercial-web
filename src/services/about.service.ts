import instance from "@/mocks";

export const AboutApis = {
  getInforShop: async () => {
    try {
      const response = await instance.get("/inforShop");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  getSocials: async () => {
    try {
      const response = await instance.get("/socials");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
