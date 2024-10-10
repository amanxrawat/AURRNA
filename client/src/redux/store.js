import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import searchSlice from "./features/search/searchSlice";

const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[searchSlice.name]: searchSlice.reducer,
	},
});

export default store;
