import React, { useState } from "react";

import {
	FaFacebook as FacebookIcon,
	FaXTwitter as TwitterIcon,
	FaYoutube as YoutubeIcon,
	FaInstagram as InstagramIcon,
} from "react-icons/fa6";
import Layout from "../components/layout/Layout";

const facebookLink = "https://www.google.com/";
const youtubeLink = "https://www.google.com/";
const twitterLink = "https://www.google.com/";
const instagramLink = "https://www.google.com/";

const Contact = () => {
	const [result, setResult] = useState("");
	const [isVisible, setVisible] = useState(false);

	const handleChange = (e) => {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		setVisible(true);
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "fe07456b-108e-4b50-b071-b3c8520ff959");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Submitted 👍");
			const timer = setTimeout(() => {
				setVisible(false);
				setResult("");
			}, 3000);
			event.target.reset();
			return () => clearTimeout(timer);
		} else {
			setResult("Failed ❌");
			const timer = setTimeout(() => {
				setVisible(false);
				setResult("");
			}, 3000);
			event.target.reset();
			return () => clearTimeout(timer);
		}
	};
	return (
		<>
			<div id="contact" className="">
				<div className="">
					<h1 className="section-heading text-center border-b mb-5">Contact Us</h1>
					<div className="flex flex-row justify-evenly">
						<div className="md:w-[50%] w-full flex flex-col gap-4 px-10 max-w-xl">
							<p className="">We’d love to hear from you!</p>
							<p className="">
								Whether you have questions about our collections, need
								assistance with your order, or just want to chat about
								jewellery, we’re here to help.
							</p>
							<div className="pb-10">
								<p className="text-xl font-semibold py-2">Customer Service</p>
								<p>Email : aurrna@gmail.com</p>
								<p>Contact : 9189373892</p>
								<p>Hours: Monday to Friday, 9 AM - 5 PM (IST)</p>

								<p className="text-xl font-semibold py-2">Follow Us</p>
								<p>Stay connected and inspired!</p>

								<div className=" flex lg:flex-row flex-wrap flex-row gap-3 w-[80%] p-2">
									<a href={facebookLink} target="blank">
										<FacebookIcon className="scale-125" />
									</a>
									<a href={twitterLink} target="blank">
										<TwitterIcon className="scale-125" />
									</a>
									<a href={youtubeLink} target="blank">
										<YoutubeIcon className="scale-125" />
									</a>
									<a href={instagramLink} target="blank">
										<InstagramIcon className="scale-125" />
									</a>
								</div>
								<p className="py-8">Thanks for choosing AURRNA</p>
							</div>
						</div>
						<div className="">
							<p className="text-xl font-semibold pb-1 text-dark">
								Have a Question
							</p>
							<p className="py-2">
								Fill out the form below, and we’ll get back to you as soon as
								possible.
							</p>

							<div className="border w-full  bg-dark">
								<form
									onSubmit={onSubmit}
									id="form"
									className="flex  flex-col gap-2 p-4"
								>
									<label id="name" className="pt-2 text-white">
										Name
									</label>
									<input
										type="text"
										onKeyDown={(event) => {
											handleChange(event);
										}}
										name="name"
										className="input-contact outline-none px-2 h-8"
									></input>

									<label id="email" className="pt-2 text-white">
										Email
									</label>
									<input
										onKeyDown={(event) => {
											handleChange(event);
										}}
										type="text"
										name="email"
										className="input-contact outline-none px-2 h-8"
									></input>

									<label id="message" className="pt-2 text-white">
										Feedback or Comments
									</label>
									<textarea
										name="message"
										className="input-contact outline-none px-2  resize-none pt-2 "
									></textarea>

									<div className="py-4 flex  flex-row justify-between">
										<button
											type="submit"
											className=" w-40 cursor-pointer justify-center bg-purple border-black border text-white "
										>
											Submit
										</button>

										{isVisible ? (
											result != "Failed ❌" ? (
												<div className=" w-60 text-center cursor-pointer justify-center bg-purple border-black border text-white ">
													<p className="p-1 text-white ">{result}</p>
												</div>
											) : (
												<div className="w-60 text-center cursor-pointer justify-center bg-purple border-black border text-white ">
													<p className="p-1  text-white  ">{result}</p>
												</div>
											)
										) : (
											<p></p>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout()(Contact);
