import {typeLogin, typeRegister} from "@/types";
import {http} from "@/axios/axios";
import {baseClient} from "@/axios/axios";
export const AuthApis = {
  register: async (data: typeRegister) => {
    try {
      const response = await http.post("/register", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  login: async (data: typeLogin) => {
    try {
      const response = await http.post("/login", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  forgetPassword: async (email: string) => {
    try {
      const data = {
        email: email,
      };
      const response = await http.post("/forget-password", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },

  setCookie: async (data: typeLogin) => {
    try {
      const response = await baseClient.post("/auth", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  clearCookie: async () => {
    try {
      const response = await baseClient.post("/auth/logout", {data: ""});

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
