import AxiosMockAdapter from "axios-mock-adapter";

export const mockOrder = (mock: AxiosMockAdapter) => {
  mock.onPost("/order").reply((config) => {
    const dataOrder = JSON.parse(config.data);

    console.log(dataOrder);

    return [200, {messages: "Create order successfully"}];
  });
};
