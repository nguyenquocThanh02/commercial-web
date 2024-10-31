import AxiosMockAdapter from "axios-mock-adapter";

export const mockUser = (mock: AxiosMockAdapter) => {
  mock.onGet("/users").reply(200, {
    users: [
      {id: 1, name: "John Smith"},
      {id: 2, name: "Jane Doe"},
    ],
  });

  mock.onGet("/users/1").reply(200, {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
  });

  mock.onPost("/users").reply(201, {
    message: "User created successfully",
  });
};
