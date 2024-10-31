import AxiosMockAdapter from "axios-mock-adapter";

const mockProduct = (mock: AxiosMockAdapter) => {
  const products = [
    {
      id: 123,
      name: "Kids Electric Car",
      description: "",
      colors: [
        {
          colorName: "Blue",
          colorHex: "blue",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FcarBlue.png?alt=media&token=f2030610-741a-42e5-a04b-7c465d3db5dd",
        },
        {
          colorName: "Black",
          colorHex: "#000",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FcarBlack.png?alt=media&token=6f8bd287-5fef-4518-9e91-bc5d2ca4674b",
        },
        {
          colorName: "Red",
          colorHex: "red",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FcarRed.png?alt=media&token=12ecb621-959d-47fa-bcf6-98e61c6df270",
        },
      ],
      price: {vi: 260000000, en: 12000},
      discountPercentage: 10,
      rating: 4.5,
      numberOfReviews: 150,
      unitsInStock: 25,
      isNew: true,
      purchaseCount: 10,
      sizes: ["S", "M", "L", "XL", "2XL"],
      category: "Toys",
    },
    {
      id: 124,
      name: "Sneakers",
      description: "Comfortable running shoes",
      colors: [
        {
          colorName: "White",
          colorHex: "#fff",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fshoe.png?alt=media&token=accb7401-38e6-43ab-889e-338ef805abe9",
        },
      ],
      price: {vi: 300000, en: 13.5},
      discountPercentage: 15,
      rating: 4.7,
      numberOfReviews: 230,
      unitsInStock: 50,
      isNew: false,
      purchaseCount: 30,
      sizes: ["S", "M", "L"],
      category: "Footwear",
    },
    {
      id: 125,
      name: "Pet Food",
      description: "High-quality food for pets",
      colors: [
        {
          colorName: "Brown",
          colorHex: "#8B4513",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FpetFood.png?alt=media&token=099d9c16-1367-4d6f-ac0e-34439d916134",
        },
      ],
      price: {vi: 60000, en: 2.6},
      discountPercentage: 5,
      rating: 4.2,
      numberOfReviews: 120,
      unitsInStock: 100,
      isNew: false,
      purchaseCount: 50,
      sizes: [],
      category: "Pet Supplies",
    },
    {
      id: 126,
      name: "Digital Camera",
      description: "High resolution digital camera",
      colors: [
        {
          colorName: "Black",
          colorHex: "#000",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fcamera.png?alt=media&token=20b2c3e4-198e-4e76-a0f0-8b35bab9328b",
        },
      ],
      price: {vi: 1200000, en: 52.5},
      discountPercentage: 12,
      rating: 4.8,
      numberOfReviews: 90,
      unitsInStock: 20,
      isNew: true,
      purchaseCount: 15,
      sizes: [],
      category: "Electronics",
    },
    {
      id: 124,
      name: "Sneakers",
      description: "Comfortable running shoes",
      colors: [
        {
          colorName: "White",
          colorHex: "#fff",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fshoe.png?alt=media&token=accb7401-38e6-43ab-889e-338ef805abe9",
        },
      ],
      price: {vi: 300000, en: 13.5},
      discountPercentage: 15,
      rating: 4.7,
      numberOfReviews: 230,
      unitsInStock: 50,
      isNew: false,
      purchaseCount: 30,
      sizes: ["S", "M", "L"],
      category: "Footwear",
    },
    {
      id: 124,
      name: "Sneakers",
      description: "Comfortable running shoes",
      colors: [
        {
          colorName: "White",
          colorHex: "#fff",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fshoe.png?alt=media&token=accb7401-38e6-43ab-889e-338ef805abe9",
        },
      ],
      price: {vi: 300000, en: 13.5},
      discountPercentage: 15,
      rating: 4.7,
      numberOfReviews: 230,
      unitsInStock: 50,
      isNew: false,
      purchaseCount: 30,
      sizes: ["S", "M", "L"],
      category: "Footwear",
    },
    {
      id: 129,
      name: "Smart TV",
      description: "Ultra HD Smart TV with 4K resolution",
      colors: [
        {
          colorName: "Black",
          colorHex: "#000",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Ftv.png?alt=media&token=5fca2295-2b1b-48e0-b0c3-2e2fb19c1e1d",
        },
      ],
      price: {vi: 5000000, en: 225},
      discountPercentage: 8,
      rating: 4.6,
      numberOfReviews: 250,
      unitsInStock: 15,
      isNew: true,
      purchaseCount: 25,
      sizes: [],
      category: "Electronics",
    },

    {
      id: 128,
      name: "iPad Pro",
      description: "Latest model of the iPad",
      colors: [
        {
          colorName: "Silver",
          colorHex: "#C0C0C0",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fipad.png?alt=media&token=9b811a1c-b737-44f9-a19d-45610560a870",
        },
      ],
      price: {vi: 2200000, en: 100},
      discountPercentage: 5,
      rating: 4.9,
      numberOfReviews: 500,
      unitsInStock: 30,
      isNew: true,
      purchaseCount: 20,
      sizes: [],
      category: "Electronics",
    },
    {
      id: 124,
      name: "Sneakers",
      description: "Comfortable running shoes",
      colors: [
        {
          colorName: "White",
          colorHex: "#fff",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fshoe.png?alt=media&token=accb7401-38e6-43ab-889e-338ef805abe9",
        },
      ],
      price: {vi: 300000, en: 13.5},
      discountPercentage: 15,
      rating: 4.7,
      numberOfReviews: 230,
      unitsInStock: 50,
      isNew: false,
      purchaseCount: 30,
      sizes: ["S", "M", "L"],
      category: "Footwear",
    },
  ];

  const coupons = [
    {id: 1, code: "SAVE10", discount: 10, name: "Save 10% on your order"},
    {id: 2, code: "SAVE20", discount: 20, name: "Save 20% on your order"},
    {id: 3, code: "SAVE30", discount: 30, name: "Save 30% on your order"},
  ];

  mock.onGet("/products").reply((config) => {
    const limit = parseInt(config.params.limit, 10) || 8;
    const page = parseInt(config.params.page, 10) || 1;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const pagedProducts = products.slice(startIndex, endIndex);

    return [200, {products: pagedProducts, length: 2}];
  });

  mock.onGet("/product/details").reply((config) => {
    const id = parseInt(config.params.id);
    const product = products.find((p) => p.id === id);

    if (product) {
      return [200, product];
    } else {
      return [400, {message: "Not found"}];
    }
  });

  mock.onGet("/coupon").reply((config) => {
    const code = config.params.code;
    const coupon = coupons.filter((p) => p.code === code);

    if (coupon) {
      return [200, coupon];
    } else {
      return [404, {message: "coupon not found"}];
    }
  });

  mock.onGet("/categories").reply(200, {
    categories: Array.from({length: 10}, (_, index) => ({
      id: index + 1,
      name: `Category ${index + 1}`,
    })),
  });

  mock.onGet("/banners").reply(200, {
    banners: [
      {
        id: 1,
        name: "Up to 10% off Voucher",
        type: "iPhone 14 Series",
        image:
          "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2Fiphone.png?alt=media&token=357427ac-5bfc-468c-b030-6cd6c184697e",
        logo: "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FlogoApple.png?alt=media&token=3a648c3c-5d62-437a-94e6-cc9b6b6d0232",
      },
      {
        id: 2,
        name: "Buy 1 Get 1",
        type: "Samsung Galaxy Series",
        image:
          "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/macbook.png?alt=media&token=72a52a90-029c-4995-af4c-ccc84f9b5b0f",
        logo: "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FlogoSamsung.jpg?alt=media&token=8757348b-ff01-43e7-8e8f-17a60538abc9",
      },
      {
        id: 3,
        name: "Exclusive 20% Off",
        type: "MacBook Pro",
        image:
          "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/samsung.png?alt=media&token=528efd36-f22d-4ea7-a88a-f027caa09d24",
        logo: "https://firebasestorage.googleapis.com/v0/b/videocallapp-4fbc2.appspot.com/o/images%2FlogoApple.png?alt=media&token=3a648c3c-5d62-437a-94e6-cc9b6b6d0232",
      },
    ],
  });
};

export default mockProduct;
