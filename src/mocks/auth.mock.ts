import MockAdapter from "axios-mock-adapter";

export const mockAuth = (mock: MockAdapter) => {
  mock.onPost("/register").reply((config) => {
    const dataRegister = JSON.parse(config.data);

    if (!dataRegister.name || !dataRegister.password || dataRegister.account)
      return [400, {message: "Register fail"}];

    return [200, {messages: "Register successfully"}];
  });

  mock.onPost("/forget-password").reply((config) => {
    const email = JSON.parse(config.data);

    if (!email) return [400, {message: "Post email fail"}];

    return [200, {messages: "Post email successfully"}];
  });

  mock.onPost("/login").reply((config) => {
    const dataLogin = JSON.parse(config.data);

    if (!dataLogin.account || !dataLogin.password) {
      return [400, {message: "Login fail"}];
    }

    return [200, {message: "Login successfully", token: "token-login"}];
  });
};
