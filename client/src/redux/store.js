import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import searchSlice from "./features/search/searchSlice";
import cartSlice from "./features/cart/cartSlice.js";

const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[searchSlice.name]: searchSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
	},
});

export default store;
