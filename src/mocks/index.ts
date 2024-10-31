import {AxiosInstance} from "axios";
import MockAdapter from "axios-mock-adapter";

import {mockAbout} from "./about.mock";
import {mockAuth} from "./auth.mock";
import {mockOrder} from "./order.mock";
import {mockProduct} from "./product.mock";
import {mockUser} from "./user.mock";
export const applyMockAdapter = (axiosInstance: AxiosInstance) => {
  const mock = new MockAdapter(axiosInstance);

  mockAbout(mock);
  mockAuth(mock);
  mockOrder(mock);
  mockProduct(mock);
  mockUser(mock);
};
