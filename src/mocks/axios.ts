import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  transformResponse: [
    function (data) {
      return data;
    },
  ],
});

instance.interceptors.response.use(
  function (response) {
    if (response.data) {
      return JSON.parse(response.data);
    }

    return response.data;
  },
  function (error) {
    if (error.response.data) {
      return JSON.parse(error.response.data);
    }

    return error.response.data;
  },
);

export default instance;
