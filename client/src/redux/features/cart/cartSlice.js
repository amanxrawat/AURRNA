import { createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addItem: (state, action) => {
			const { product } = action.payload;

			let updatedCart = JSON.parse(JSON.stringify(state.cart));
			let itemExists = false;

	
			updatedCart.forEach((item) => {
				if (item.product._id === product._id) {
					item.quantity += 1;
					itemExists = true;
				}
			})

			if (!itemExists) {
				updatedCart.push({
					product: product,
					quantity: 1,
				});
			}

			// Update state correctly
			state.cart = updatedCart;
		},

		setItemQuantity: (state, action) => {
			const { ProductId, quantity } = action.payload;

			state.cart = state.cart.map((item) => {

				console.log(item.product._id, ProductId);


				return (
					item.product._id === ProductId
						? { ...item, quantity }
						: item
					)
			}

			);
		},

		removeItemByProductId: (state, action) => {

			const {productId} = action.payload

			state.cart = state.cart.filter(
				(item) => item.product._id !== productId 
			);
		},
	},

});


export default cartSlice;
export const { addItem, removeItemByProductId, setItemQuantity } = cartSlice.actions;


