import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Layout from "./../components/layout/Layout"

gsap.registerPlugin(useGSAP);

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [fullName, setFullName] = useState("");
	// const navigate = useNavigate();

	const gsapRef = useRef();
	const innerTextRef = useRef();
	const circleRef = useRef();
	const slideAnimation = () => {
		gsap.to(gsapRef.current, {
			// width:'500px',
			x: 320,
			color: "a855f7",
			duration: 1.8,
			ease: "power3.out",
		});

		gsap.to(circleRef.current, {
			x: 45,
			duration: 2.5,
			// ease:'power3.out'
		});

		gsap.to(innerTextRef.current, {
			x: -90,
		});
	};

	const slideAnimation2 = () => {
		gsap.to(gsapRef.current, {
			width: "450px",
			x: -110,
			color: "a855f7",
			duration: 1.8,
			ease: "power3.out",
		});

		gsap.to(circleRef.current, {
			x: -50,
			duration: 2.5,
		});

		gsap.to(innerTextRef.current, {
			x: 70,
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");

		// try {
		//   // Make API call to login
		//   const response = await axios.post('/api/auth/login', { email, password });

		//   // Store the JWT token in local storage or cookies (for persistence)
		//   localStorage.setItem('token', response.data.token);

		//   // Redirect the user to the homepage/dashboard after successful login
		//   navigate('/home');
		// } catch (err) {
		//   // Handle errors, display error message to the user
		//   setError('Invalid credentials. Please try again.');
		// }
	};

	return (
		<>
			<div className=" main p-16 overflow-hidden justify-center flex items-center bg-purple">
				<div className="flex bg-gradient-to-r from-[#391d59] to-[#391d59] max-w-2xl justify-between relative overflow-hidden">
					<div className="left relative z-[3]">
						<div className="flex items-center justify-center">
							<div className="w-full max-w-md p-8 rounded-lg">
								<h2 className="text-2xl font-bold text-center mb-6 text-[#e8e3cc]">
									Login
								</h2>
								{error && (
									<p className="text-red-500 text-center mb-4">{error}</p>
								)}
								<form onSubmit={handleLogin}>
									<div className="mb-4">
										<label
											htmlFor="email"
											className="block text-[#e8e3cc] font-medium mb-2"
										>
											Email:
										</label>
										<input
											type="email"
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
											className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus-within:text-black"
										/>
									</div>
									<div className="mb-6">
										<label
											htmlFor="password"
											className="block text-[#e8e3cc] font-medium mb-2"
										>
											Password:
										</label>
										<input
											type="password"
											id="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
											className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus-within:text-black"
										/>
									</div>
									<button
										type="submit"
										className="w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-200 mt-4 mb-3"
									>
										Login
									</button>
								</form>
								<p className="text-center mt-4 text-[#e8e3cc]">
									Don't have an account?{" "}
									<a
										onClick={slideAnimation2}
										className="text-white hover:underline"
									>
										Sign up here
									</a>
								</p>
							</div>
						</div>
					</div>

					<div className="right relative z-[3]">
						<div className="flex items-center justify-center">
							<div className="w-full max-w-md p-8 rounded-lg">
								<h2 className="text-2xl font-bold text-center mb-6 text-[#e8e3cc]">
									Sign Up
								</h2>
								{error && (
									<p className="text-red-500 text-center mb-4">{error}</p>
								)}
								<form onSubmit={handleLogin}>
									<div className="mb-4">
										<label
											htmlFor="fullName"
											className="block text-[#e8e3cc] font-medium mb-2"
										>
											Full Name:
										</label>
										<input
											type="text"
											id="fullName"
											value={fullName}
											onChange={(e) => setEmail(e.target.value)}
											required
											className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus-within:text-black"
										/>
									</div>
									<div className="mb-4">
										<label
											htmlFor="email"
											className="block text-[#e8e3cc] font-medium mb-2"
										>
											Email:
										</label>
										<input
											type="email"
											id="email2"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
											className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus-within:text-black"
										/>
									</div>
									<div className="mb-6">
										<label
											htmlFor="password"
											className="block text-[#e8e3cc] font-medium mb-2"
										>
											Password:
										</label>
										<input
											type="password"
											id="password2"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											required
											className="w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus-within:text-black"
										/>
									</div>
									<button
										type="submit"
										className="w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-200"
									>
										Sign Up
									</button>
								</form>
								<p className="text-center mt-4 text-[#e8e3cc]">
									Already have an account?{" "}
									<a
										onClick={slideAnimation}
										className="text-white hover:underline"
									>
										Login here
									</a>
								</p>
							</div>
						</div>
					</div>

					<div
						ref={gsapRef}
						className=" absolute top-0 left-0 w-1/2 h-full bg-[#391d59] z-[4] "
					>
						<div
							ref={circleRef}
							className="w-[32rem]  h-[32rem] rounded-[50%] bg-[#e8e3cc] -translate-x-48 -translate-y-10 opacity-100 absolute"
						>
							<div
								ref={innerTextRef}
								className="relative flex flex-col justify-center items-center translate-y-24 translate-x-16 mt-8"
							>
								<div className="w-32 h-32 bg-black rounded-full overflow-hidden">
									<img
										src="https://res.cloudinary.com/dhhvmkyjz/image/upload/v1727075278/uszrujwkgsitjzlgiwzs.png"
										alt=""
									/>
								</div>
								<div className=" flex flex-col translate-x-0 items-center ">
									<h1 className="text-2xl font-bold text-black">Aurrna</h1>
									<h1 className="text-xl font-semibold text-black">
										Your Jewellery Destination
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout()(Login);
