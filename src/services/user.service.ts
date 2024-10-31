import {http} from "@/axios/axios";
export const UserApis = {
  getUser: async () => {
    try {
      const response = await http.get("/users");

      return response;
    } catch (error) {
      return error;
    }
  },
};
