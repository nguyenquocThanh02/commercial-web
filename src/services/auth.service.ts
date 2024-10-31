import instances from "@/mocks";
import {typeLogin, typeRegister} from "@/types";
import instance from "@/mocks/axios";
export const AuthApis = {
  register: async (data: typeRegister) => {
    try {
      const response = await instances.post("/register", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  login: async (data: typeLogin) => {
    try {
      const response = await instances.post("/login", data);

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
      const response = await instances.post("/forget-password", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },

  setCookie: async (data: typeLogin) => {
    try {
      const response = await instance.post("/auth", data);

      console.log(response);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
