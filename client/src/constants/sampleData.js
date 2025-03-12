

const sampleUser = {
	Name: "Ankur Kumar",
	Email: "ankurkumar@gmail.com",
	Address: "H-87, Gali No. - 18, New Delhi",
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
		Rating: 4.6,
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
		Rating: 4.6,
		NumberOfReviews: 120,
	},
]

const OrderInformation =
	[
		{
			"user": "65f2a4e5c9b3a26d5f6f8a1b",
			"orderItems": [
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d12",
					"quantity": 2,
					"price": 19.99
				},
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d13",
					"quantity": 1,
					"price": 49.99
				}
			],
			"shippingAddress": {
				"street": "123 Main Street",
				"city": "New York",
				"state": "NY",
				"country": "USA",
				"postalCode": "10001"
			},
			"paymentMethod": "Credit Card",
			"paymentStatus": "paid",
			"orderStatus": "shipped",
			"totalPrice": 89.97,
			"waybill": "WB1234567890",
			"shippingLabel": "https://example.com/shipping-label-123.pdf",
			"createdAt": "2025-03-12T10:30:00Z",
			"updatedAt": "2025-03-12T12:00:00Z"
		},
		{
			"user": "65f2a4e5c9b3a26d5f6f8a1b",
			"orderItems": [
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d12",
					"quantity": 2,
					"price": 19.99
				},
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d13",
					"quantity": 1,
					"price": 49.99
				}
			],
			"shippingAddress": {
				"street": "123 Main Street",
				"city": "New York",
				"state": "NY",
				"country": "USA",
				"postalCode": "10001"
			},
			"paymentMethod": "Credit Card",
			"paymentStatus": "paid",
			"orderStatus": "shipped",
			"totalPrice": 89.97,
			"waybill": "WB1234567890",
			"shippingLabel": "https://example.com/shipping-label-123.pdf",
			"createdAt": "2025-03-12T10:30:00Z",
			"updatedAt": "2025-03-12T12:00:00Z"
		},
		{
			"user": "65f2a4e5c9b3a26d5f6f8a1b",
			"orderItems": [
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d12",
					"quantity": 2,
					"price": 19.99
				},
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d13",
					"quantity": 1,
					"price": 49.99
				}
			],
			"shippingAddress": {
				"street": "123 Main Street",
				"city": "New York",
				"state": "NY",
				"country": "USA",
				"postalCode": "10001"
			},
			"paymentMethod": "Credit Card",
			"paymentStatus": "paid",
			"orderStatus": "shipped",
			"totalPrice": 89.97,
			"waybill": "WB1234567890",
			"shippingLabel": "https://example.com/shipping-label-123.pdf",
			"createdAt": "2025-03-12T10:30:00Z",
			"updatedAt": "2025-03-12T12:00:00Z"
		},
		{
			"user": "65f2a4e5c9b3a26d5f6f8a1b",
			"orderItems": [
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d12",
					"quantity": 2,
					"price": 19.99
				},
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d13",
					"quantity": 1,
					"price": 49.99
				}
			],
			"shippingAddress": {
				"street": "123 Main Street",
				"city": "New York",
				"state": "NY",
				"country": "USA",
				"postalCode": "10001"
			},
			"paymentMethod": "Credit Card",
			"paymentStatus": "paid",
			"orderStatus": "shipped",
			"totalPrice": 89.97,
			"waybill": "WB1234567890",
			"shippingLabel": "https://example.com/shipping-label-123.pdf",
			"createdAt": "2025-03-12T10:30:00Z",
			"updatedAt": "2025-03-12T12:00:00Z"
		},
		{
			"user": "65f2a4e5c9b3a26d5f6f8a1b",
			"orderItems": [
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d12",
					"quantity": 2,
					"price": 19.99
				},
				{
					"productId": "65f2a5b7e3c4a74d2e9c3d13",
					"quantity": 1,
					"price": 49.99
				}
			],
			"shippingAddress": {
				"street": "123 Main Street",
				"city": "New York",
				"state": "NY",
				"country": "USA",
				"postalCode": "10001"
			},
			"paymentMethod": "Credit Card",
			"paymentStatus": "paid",
			"orderStatus": "shipped",
			"totalPrice": 89.97,
			"waybill": "WB1234567890",
			"shippingLabel": "https://example.com/shipping-label-123.pdf",
			"createdAt": "2025-03-12T10:30:00Z",
			"updatedAt": "2025-03-12T12:00:00Z"
		},
	]

const users = [
	{
		"_id": "65f123456789abcdef012345",
		"fullName": "john doe",
		"address": ["123 Elm Street,Springfield,Illinois,USA", "456 Maple Avenue,Brooklyn,New York,USA"],
		"email": "johndoe@example.com",
		"password": "$2b$10$abcdefg1234567890hashedpassword",
		"role": "customer",
		"orders": ["65f323456789abcdef012348"],
		"coupons": ["DISCOUNT10", "FREESHIP"],
		"createdAt": "2025-03-13T12:00:00.000Z",
		"updatedAt": "2025-03-13T12:00:00.000Z"
	},
	{
		"_id": "65f123456789abcdef012346",
		"fullName": "jane smith",
		"address": ["789 Oak Lane, Los Angeles, USA"],
		"email": "janesmith@example.com",
		"password": "$2b$10$hijklmnop1234567890hashedpassword",
		"role": "admin",
		"orders": ["65f323456789abcdef012349", "65f323456789abcdef012350"],
		"coupons": [],
		"createdAt": "2025-03-13T12:10:00.000Z",
		"updatedAt": "2025-03-13T12:15:00.000Z"
	}
]

const products = [
	{
		"_id": "67aa5eb4e11b23e2e2ed3296",
		"name": "Emerald Green Necklace Set",
		"shortDescription": "Elegant silver and green diamond necklace set, studded with premium American diamonds.",
		"description": "This is our Emerald Green Necklace Set, made up of premium quality brass studded with silver and green American Diamonds, perfect for occasional wearing. Durable and Premium Quality Guaranteed.",
		"price": 1000,
		"categories": [
			"Necklace Set"
		],
		"tags": [
			"\"Silver\"",
			" \"Green Diamond\"",
			" \"American Diamonds\"",
			" \"Occasional Wear\"",
			" \"Premium Quality\""
		],
		"stock": 1,
		"images": [
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/lwarvtmurllhuullyqcm.jpg",
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/fdy54c1onvjljmkgw8fk.jpg",
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/lwulsu8yzurda4nfoo6y.jpg",
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/kyszgxvnksawzwtrk3ew.jpg"
		],
		"ratings": 0,
		"material": "Brass and American Diamonds",
		"size": "OS (One Size)",
		"color": "Silver with Green Diamond",
		"numReviews": 0,
		"createdAt": "2025-02-10T20:16:52.585Z",
		"__v": 0
	},
	{
		"_id": "67aa5eb4e11b23e2e2ed3296",
		"name": "Emerald Green Necklace Set",
		"shortDescription": "Elegant silver and green diamond necklace set, studded with premium American diamonds.",
		"description": "This is our Emerald Green Necklace Set, made up of premium quality brass studded with silver and green American Diamonds, perfect for occasional wearing. Durable and Premium Quality Guaranteed.",
		"price": 1000,
		"categories": [
			"Necklace Set"
		],
		"tags": [
			"\"Silver\"",
			" \"Green Diamond\"",
			" \"American Diamonds\"",
			" \"Occasional Wear\"",
			" \"Premium Quality\""
		],
		"stock": 1,
		"images": [
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/lwarvtmurllhuullyqcm.jpg",
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/fdy54c1onvjljmkgw8fk.jpg",
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/lwulsu8yzurda4nfoo6y.jpg",
			"https://res.cloudinary.com/dhhvmkyjz/image/upload/v1739218611/products/kyszgxvnksawzwtrk3ew.jpg"
		],
		"ratings": 0,
		"material": "Brass and American Diamonds",
		"size": "OS (One Size)",
		"color": "Silver with Green Diamond",
		"numReviews": 0,
		"createdAt": "2025-02-10T20:16:52.585Z",
		"__v": 0
	}
]

export { OrderInformation,products, users, sampleUser, Orders };
