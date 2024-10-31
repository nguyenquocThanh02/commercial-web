import axios from "axios";
const instance = axios.create({
  baseURL: "/api",
  // transformResponse: [
  //   function (data) {
  //     return data;
  //   },
  // ],
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

instance.interceptors.response.use(
  function (response) {
    // if (response.data) {
    //   return JSON.parse(response.data);
    // }

    console.log("rp", response);

    return response;
  },
  function (error) {
    // if (error.response.data) {
    //   return JSON.parse(error.response.data);
    // }

    // return error.response.data;
    return error;
  },
);

export default instance;
