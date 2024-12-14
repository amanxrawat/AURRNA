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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A stunning silver bracelet with an elegant design, perfect for any occasion. Crafted with precision to add charm to your style."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "An exquisite gold-plated necklace designed to enhance your elegance and add a touch of sophistication to your look."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A charming silver bracelet specially crafted for children, featuring a delightful design that kids will love."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A classic gold chain for men, combining timeless design with modern craftsmanship to elevate your style."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A luxurious gold collection set featuring intricately designed pieces, perfect for adding a touch of opulence to your wardrobe."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A sleek silver cuff bracelet with a modern design, perfect for men who appreciate minimalist accessories."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A delightful beaded necklace for children, featuring vibrant designs and high-quality materials for durability."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A delightful beaded necklace for children, featuring vibrant designs and high-quality materials for durability."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A delightful beaded necklace for children, featuring vibrant designs and high-quality materials for durability."
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
		Rating: 4.6,
		NumberOfReviews: 120,
		Description: "A delightful beaded necklace for children, featuring vibrant designs and high-quality materials for durability."
	},
];

const sampleUser = {
 Name : "Ankur Kumar",
 Email : "ankurkumar@gmail.com",
 Address : "H-87, Gali No. - 18, New Delhi",
};


const Orders = [
	{
		Name: "Kids' Silver Bracelet",
		Images: [
			"https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
		],
		Description: "A delightful beaded necklace for children, featuring vibrant designs and high-quality materials for durability.",
		Rating : 4.6,
		NumberOfReviews: 120,
	},
	{
		Name: "Kids' Silver Bracelet",
		Images: [
			"https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600",
		],
		Description: "A delightful beaded necklace for children, featuring vibrant designs and high-quality materials for durability.",
		Rating : 4.6,
		NumberOfReviews: 120,
	},
]


export { productData,sampleUser,Orders};
