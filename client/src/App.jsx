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
const NotFound = lazy(() => import("./pages/NotFound"));

const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const AdminUsers = lazy(() => import("./components/admin/UserInfo"));
const AdminOrders = lazy(() => import("./components/admin/OrderInfo"));	
const AdminCreateProduct = lazy(() => import("./components/admin/CreateProduct"));
const AdminManageProduct = lazy(() => import("./components/admin/ManageProduct"));

const App = () => {
	// const { user } = useSelector((state) => state.auth);

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

					<Route path="*" element={<NotFound/>} />


					<Route element={<ProtectedRoutes />}>
						<Route path="/profile" element={<Profile />} />
					</Route>


					<Route path="/admin" element={<AdminLogin/>}/>
					<Route path="/admin/dashboard" element={<AdminDashboard/>}/>
					<Route path="/admin/users" element={<AdminUsers/>}/>
					<Route path="/admin/orders" element={<AdminOrders/>}/>
					<Route path="/admin/create-product" element={<AdminCreateProduct/>}/>
					<Route path="/admin/manage-products" element={<AdminManageProduct/>}/>
					

				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
