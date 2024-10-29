import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import mockUser from "./user.mock";
import mockProduct from "./product.mock";
import mockAbout from "./about.mock";
import mockAuth from "./auth.mock";
import mockOrder from "./order.mock";

const mock = new AxiosMockAdapter(axios, {delayResponse: 0});

mockAuth(mock);
mockUser(mock);
mockProduct(mock);
mockAbout(mock);
mockOrder(mock);

export default axios;
