import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../../constants/sampleData";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addItem: (state, action) => {
			const cartCopy = state.cart;
			let notInCart = true;

			cartCopy.map((item) => {
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
		addItemByProductId: (state, action) => {
			const ProductId = action.payload;
			let itemInCart = state.cart.find(item => item.product.ProductId === ProductId);
		
			if (itemInCart) {
				// If the item already exists in the cart, increase its quantity
				itemInCart.quantity += 1;
			} else {
				// If the item is not in the cart, find it in `productData` and add it
				const product = productData.find(item => item.ProductId === ProductId);
				if (product) {
					state.cart.push({
						product: product,
						quantity: 1,
					});
				} else {
					console.error(`Product with ID ${ProductId} not found.`);
				}
			}
		},
		
		setItemQuantity: (state, action) => {
			const { ProductId, quantity } = action.payload;
		  
			state.cart = state.cart.map((item) =>
			  item.product.ProductId === ProductId
				? { ...item, quantity }
				: item
			);
		},
		removeItemByProductId: (state, action) => {
			state.cart = state.cart.filter(
				(item) => item.product.ProductId !== action.payload.productId
			);
		},		
	},
});

export default cartSlice;
export const { addItem,addItemByProductId, removeItemByProductId, setItemQuantity } = cartSlice.actions;
