import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [
			{
				product: {
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
				quantity: 1,
			},
			{
				product: {
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
				quantity: 1,
			},
		],
	},
	reducers: {
		addItem: (state, action) => {
			const cartCopy = state.cart;
			let notInCart = true;

			cartCopy.map((item) => {
				console.log(item.product.ProductId === action.payload.ProductId);
				if (item.product.ProductId === action.payload.ProductId) {
					item.quantity = item.quantity + 1;
					state = {
						...state,
						cart: cartCopy,
					};
					notInCart = false;
				}
			});

			if (notInCart) {
				cartCopy.push({
					product: action.payload,
					quantity: 1,
				});
				state = {
					...state,
					cart: cartCopy,
				};
			}
		},

		setItemQuantity: (state, action) => {
			const cartCopy = state.cart;

			cartCopy.map((item) => {
				if (item.product.ProductId === action.payload.ProductId) {
					item.quantity = action.payload.quantity;
				}
			});
			state = {
				...state,
				cart: cartCopy,
			};
		},

		removeItem: (state, action) => {
			const newCart = state.cart.filter(
				(item) => item.product.ProductId !== action.payload.ProductId,
			);
			state = {
				...state,
				cart: newCart,
			};
		},
	},
});

export default cartSlice;
export const { addItem, removeItem, setItemQuantity } = cartSlice.actions;
