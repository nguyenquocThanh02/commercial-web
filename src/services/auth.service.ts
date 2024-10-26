import instance from "@/mocks";
import {typeLogin, typeRegister} from "@/types";
import axios from "@/mocks/axios";
export const AuthApis = {
  register: async (data: typeRegister) => {
    try {
      const response = await instance.post("/register", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
  login: async (data: typeLogin) => {
    try {
      const response = await instance.post("/login", data);

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
      const response = await instance.post("/forget-password", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },

  setCookie: async (data: typeLogin) => {
    try {
      const response = await axios.post("/auth", data);

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
