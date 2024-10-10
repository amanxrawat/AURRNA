const jeweleryProducts = [
  {
    image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Gold Diamond Ring",
    price: 1200.0,
    discount: 15,
  },
  {
    image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Silver Heart Necklace",
    price: 350.0,
    discount: 10,
  },
  {
    image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Charm Bracelet",
    price: 75.0,
    discount: 5,
  },
  {
    image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Pearl Drop Earrings",
    price: 150.0,
    discount: 20,
  },
  {
    image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Rose Gold Bangle",
    price: 200.0,
    discount: 0,
  },
];

const productData = [
  {
    Name: "Elegant Silver Bracelet",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Female",
    Material: "Silver",
    Category: "Bracelet",
    Discount: 10,
    Price: 1000,
    ProductId: 1,
  },
  {
    Name: "Gold Plated Necklace",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Female",
    Material: "Gold",
    Category: "Necklace",
    Discount: 10,
    Price: 1000,
    ProductId: 2,
  },
  {
    Name: "Children's Charm Bracelet",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Child",
    Material: "Silver",
    Category: "Bracelet",
    Discount: 10,
    Price: 1000,
    ProductId: 3,
  },
  {
    Name: "Men's Classic Chain",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Male",
    Material: "Gold",
    Category: "Chain",
    Discount: 10,
    Price: 1000,
    ProductId: 4,
  },
  {
    Name: "Gold Collection Set",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Female",
    Material: "Gold",
    Category: "Collection",
    Price: 1399,
    ProductId: 5,
  },
  {
    Name: "Silver Cuff Bracelet",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Male",
    Material: "Silver",
    Category: "Bracelet",
    Discount: 10,
    Price: 1000,
    ProductId: 6,
  },
  {
    Name: "Children's Beaded Necklace",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Child",
    Material: "Silver",
    Category: "Necklace",
    Discount: 10,
    Price: 1000,
    ProductId: 7,
  },
  {
    Name: "Luxury Gold Chain",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Male",
    Material: "Gold",
    Category: "Chain",
    Discount: 10,
    Price: 1000,
    ProductId: 8,
  },
  {
    Name: "Silver Pendant Necklace",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Female",
    Material: "Silver",
    Category: "Necklace",
    Discount: 10,
    Price: 1000,
    ProductId: 9,
  },
  {
    Name: "Kids' Silver Bracelet",
    Images: [
      "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    Gender: "Child",
    Material: "Silver",
    Category: "Bracelet",
    Discount: 10,
    Price: 1000,
    ProductId: 10,
  },
];

const cartItems = [
  {
    Name: "Kid's Chain",
    Image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    Name: "Butterfly Necklace",
    Image:
      "https://images.pexels.com/photos/4618533/pexels-photo-4618533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
export { jeweleryProducts, productData, cartItems };
