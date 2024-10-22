import instance from "@/mocks";

export const UserApis = {
  getUser: async () => {
    try {
      const response = await instance.get("/users");

      return response;
    } catch (error) {
      return error;
    }
  },
};
