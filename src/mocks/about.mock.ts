import AxiosMockAdapter from "axios-mock-adapter";

export const mockAbout = (mock: AxiosMockAdapter) => {
  mock.onGet("/inforShop").reply(200, {
    infor: {
      address: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
      email: "exclusive@gmail.com",
      phone: "+88015-88888-9999",
    },
  });

  mock.onGet("/socials").reply(200, {
    socials: {
      facebook: "https://www.facebook.com/exclusive",
      twitter: "https://twitter.com/exclusive",
      instagram: "https://www.instagram.com/exclusive",
      linkedin: "https://www.linkedin.com/in/exclusive",
    },
  });
};
