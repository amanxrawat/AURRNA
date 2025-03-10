import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import Loader from "./components/layout/Loader";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import axios from "axios";
import { server } from "./constants/config";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/admin/Sidebar";
import { userNotExists } from "./redux/features/auth/authSlice";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const Checkout = lazy(() => import("./pages/Checkout"));
const FAQ = lazy(() => import("./pages/FAQ"));

const App = () => {
	const { user } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	axios
	// 		.get(`${server}/api/v1/user/login`)
	// 		.then((res) => console.log(res))
	// 		.catch((err) => dispatch(userNotExists()));
	// }, [dispatch]);

	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/search/:filter?" element={<Search />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/product/:productId" element={<Product />} />
					<Route path="/FAQ" element={<FAQ/>}/>
          {/* <Route path="/admin" element={<Sidebar/>} /> */}
					<Route element={<ProtectedRoutes />}>
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
