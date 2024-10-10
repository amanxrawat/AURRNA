import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	window.onpopstate = (event) => {
		navigate("/");
	};

	const dispatch = useDispatch();

	const handleLogin = async (e) => {
		e.preventDefault();

		const config = {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const { data } = await axios.post(
				`${server}/api/v1/user/login`,
				{ username: username.value, password: password.value },
				config,
			);
			dispatch(userExists(true));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="bg-orange">
				<form className="flex flex-col gap-5 ">
					<label>Put email</label>
					<input type="email" />
					<label>Put password</label>
					<input type="password" />
				</form>
			</div>
		</>
	);
};

export default Login;
