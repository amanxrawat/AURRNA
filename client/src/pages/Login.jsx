import React, { useState } from "react";
import Layout from "./../components/layout/Layout";
import axios from "axios"
import apiRequest from "../api/apiRequest.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [isSignup, setIsSignup] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [fullName, setFullName] = useState("");

	// const handleLogin = async (e) => {
	// 	e.preventDefault();
	// 	setError("");
	// };

	// const handleSignUP = async(e)=>{
	// 	e.preventDefault();

	// 	try {
	// 		const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}"/user/register"`, {
	// 		  fullname: formData.fullname,
	// 		  email: formData.emailSignUP,
	// 		  password: formData.passwordSignUP,
	// 		});
			
	// 		console.log(response);
	// 		setTimeout(() => {
	// 		  navigate("/");
	// 		}, 2000);

	// 	  } catch (error) {
	// 		console.error(error);
	// 	  }
	
	// }
	const navigate = useNavigate();

		const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await apiRequest.post("/user/login", { email, password });
			localStorage.setItem("token", response.data.token);
			toast.success("Login successful! Redirecting...", { position: "top-right", autoClose: 2000 });
			setTimeout(() => navigate("/"), 2000);
		} catch (err) {
			toast.error(err.response?.data?.message || "Login failed. Try again.", { position: "top-right" });
		}
	};

	// Sign-up Handler
	const handleSignUP = async (e) => {
		e.preventDefault();
		try {
			await apiRequest.post("/user/register", { fullName: fullName, email, password });
			toast.success("Sign-up successful! Redirecting...", { position: "top-right", autoClose: 2000 });
			setTimeout(() => navigate("/"), 2000);
		} catch (err) {
			toast.error(err.response?.data?.message || "Sign-up failed. Try again.", { position: "top-right" });
		}
	};

	return (
		<div>

		
 		<ToastContainer /> 
		<div className="flex items-center justify-center min-h-[80vh]  p-6 overflow-hidden">
			<div className="relative flex flex-col bg-gradient-to-r from-[#391d59] to-[#391d59] max-w-lg w-full p-8 rounded-lg shadow-lg">
				{!isSignup ? (
					<div>
						<h2 className="text-2xl font-bold text-center mb-6 text-[#e8e3cc]">Login</h2>
						{error && <p className="text-red-500 text-center mb-4">{error}</p>}
						<form onSubmit={handleLogin} className="space-y-4">
							<div>
								<label className="block text-[#e8e3cc] font-medium">Email:</label>
								<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
							</div>
							<div>
								<label className="block text-[#e8e3cc] font-medium">Password:</label>
								<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
							</div>
							<button type="submit" className="w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
						</form>
						<p className="text-center mt-4 text-[#e8e3cc]">Don't have an account? <span onClick={() => setIsSignup(true)} className="text-white hover:underline cursor-pointer">Sign up here</span></p>
					</div>
				) : (
					<div>
						<h2 className="text-2xl font-bold text-center mb-6 text-[#e8e3cc]">Sign Up</h2>
						<form onSubmit={handleSignUP} className="space-y-4">
							<div>
								<label className="block text-[#e8e3cc] font-medium">Full Name:</label>
								<input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
							</div>
							<div>
								<label className="block text-[#e8e3cc] font-medium">Email:</label>
								<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
							</div>
							<div>
								<label className="block text-[#e8e3cc] font-medium">Password:</label>
								<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
							</div>
							<button type="submit" className="w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Sign Up</button>
						</form>
						<p className="text-center mt-4 text-[#e8e3cc]">Already have an account? <span onClick={() => setIsSignup(false)} className="text-white hover:underline cursor-pointer">Login here</span></p>
					</div>
				)}
			</div>
		</div>
		</div>
	);
};

export default Layout()(Login);




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Layout from "./../components/layout/Layout";
// import apiRequest from "../api/apiRequest.js";

// const Login = () => {
// 	const navigate = useNavigate();
// 	const [isSignup, setIsSignup] = useState(false);
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [fullName, setFullName] = useState("");

// 	// Login Handler


// 	return (
// 		<Layout>
// 			{/* Toast Notification Container */}
// 			<ToastContainer />

// 			<div className="flex items-center justify-center min-h-[80vh] p-6 overflow-hidden">
// 				<div className="relative flex flex-col bg-gradient-to-r from-[#391d59] to-[#391d59] max-w-lg w-full p-8 rounded-lg shadow-lg">
// 					{!isSignup ? (
// 						<div>
// 							<h2 className="text-2xl font-bold text-center mb-6 text-[#e8e3cc]">Login</h2>
// 							<form onSubmit={handleLogin} className="space-y-4">
// 								<div>
// 									<label className="block text-[#e8e3cc] font-medium">Email:</label>
// 									<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// 								</div>
// 								<div>
// 									<label className="block text-[#e8e3cc] font-medium">Password:</label>
// 									<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// 								</div>
// 								<button type="submit" className="w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
// 							</form>
// 							<p className="text-center mt-4 text-[#e8e3cc]">Don't have an account? <span onClick={() => setIsSignup(true)} className="text-white hover:underline cursor-pointer">Sign up here</span></p>
// 						</div>
// 					) : (
// 						<div>
// 							<h2 className="text-2xl font-bold text-center mb-6 text-[#e8e3cc]">Sign Up</h2>
// 							<form onSubmit={handleSignUP} className="space-y-4">
// 								<div>
// 									<label className="block text-[#e8e3cc] font-medium">Full Name:</label>
// 									<input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// 								</div>
// 								<div>
// 									<label className="block text-[#e8e3cc] font-medium">Email:</label>
// 									<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// 								</div>
// 								<div>
// 									<label className="block text-[#e8e3cc] font-medium">Password:</label>
// 									<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
// 								</div>
// 								<button type="submit" className="w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">Sign Up</button>
// 							</form>
// 							<p className="text-center mt-4 text-[#e8e3cc]">Already have an account? <span onClick={() => setIsSignup(false)} className="text-white hover:underline cursor-pointer">Login here</span></p>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</Layout>
// 	);
// };

// export default Login;
