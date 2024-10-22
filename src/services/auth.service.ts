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
  test: async () => {
    try {
      const response = await axios.post("/users");

      return response?.data;
    } catch (error) {
      return error;
    }
  },
};
