const axios = require("axios");
const AxiosMockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
const mock = new AxiosMockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/users").reply(200, {
  users: [{id: 1, name: "John Smith"}],
});

// axios.get("/users").then(function (response) {
//   console.log(response.data);
// });

module.exports = {axios};
