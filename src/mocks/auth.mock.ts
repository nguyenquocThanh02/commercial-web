import AxiosMockAdapter from "axios-mock-adapter";

const mockAuth = (mock: AxiosMockAdapter) => {
  mock.onPost("/register").reply((config) => {
    const dataRegister = JSON.parse(config.data);

    if (!dataRegister.name || !dataRegister.password || dataRegister.account)
      return [400, {message: "Register fail"}];

    return [200, {messages: "Register successfully"}];
  });
  mock.onPost("/login").reply((config) => {
    const dataLogin = JSON.parse(config.data);

    console.log("Data login: ", dataLogin);
    if (!dataLogin.account || !dataLogin.password) {
      return [400, {message: "Login fail"}];
    }

    return [200, {message: "Login successfully", token: "token-login"}];
  });
};

export default mockAuth;
