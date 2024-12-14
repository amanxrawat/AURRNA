import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";

import { FaStar as StarIcon } from "react-icons/fa6";
import RelatedProducts from "../components/specific/RelatedProducts";

import { productData } from "./../constants/sampleData";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/features/cart/cartSlice";

const Product = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);
	const { productId } = useParams();

	const product = productData.filter((item) => item.ProductId == productId)[0];

	const fetchProductData = async (productId) => {
		//fetch data with productId
	};
	useEffect(() => {
		fetchProductData(productId);
	}, [productId]);

	useEffect(() => {
		console.log("cart : ", cart);
	}, [cart]);

	const handleCart = (product) => {
		dispatch(addItem(product));
	};

	const productSizes = ["sm", "md", "lg", "xl"];

	const [currentImage, setCurrentImage] = useState(product.Images[0]); //first image
	const [size, setSize] = useState("");
	const [toggleReviews, setToggleReviews] = useState(true);

	return (
		<div>
			<div className="border-t-2 p-10 transition-opacity ease-in duration-500 opactiy-100">
				<div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
					<div className="flex-1 flex fllex-col-reverse gap-3 sm:flex-row">
						<div className="flex gap-1 sm:flex-col overflow-x-auto sm:overflow-y-scroll no-scrollbar justify-between sm:justify-normal sm:w-[20%] w-full">
							{product.Images.map((item, index) => {
								return (
									<img
										src={item}
										key={index}
										className="border p-1 "
										alt="productImage"
										onClick={() => setCurrentImage(item)}
									/>
								);
							})}
						</div>
						<div className="w-full sm:w-[80%]">
							<img
								src={currentImage}
								alt="main Image"
								className="w-full h-auto"
							/>
						</div>
					</div>
					<div className="flex-1">
						<h1 className="font-medium text-3xl font-Corm">{product.Name}</h1>
						<div className="flex items-center gap-1 mt-2">
							<StarIcon  fill="orange"/>
							<StarIcon fill="orange"/>
							<StarIcon fill="orange"/>
							<StarIcon fill="orange"/>
							<StarIcon fill="orange"/>
							<p>{product.Rating}</p>
							<p>({product.NumberOfReviews})</p>
						</div>
						<p className="mt-5 text-3xl font-medium">&#8377;{product.Price}.00</p>
						<p className="mt-1 md:w-4/5 py-5">
							{product.Description}
						</p>
						{/* <div className="flex flex-col gap-5 my-8">
							<p>Select Size</p>
							<div className="flex gap-2">
								{productSizes.map((item, index) => (
									<button
										className={`border px-4 py-2 ${item === size ? "border-dark" : ""}`}
										onClick={() => {
											setSize(item);
										}}
										key={index}
									>
										{item}
									</button>
								))}
							</div>
						</div> */}

						<button
							className="bg-dark active:bg-gray-500 text-white px-8 py-3 text-sm"
							onClick={(e) => {
								handleCart(product);
							}}
						>
							Add to Cart
						</button>
						<hr className="mt-8 sm:w-4/5" />
						<div className="text-sm mt-5 flex flex-col gap-1">
							<p>100% Original Product</p>
							<p>Cash On Delivery</p>
							<p>Easy Replacement</p>
						</div>
					</div>
				</div>
				<div className="mt-20 ">
					<div className="flex">
						<p
							className="boder px-5 py-3 text-sm border cursor-pointer"
							onClick={() => {
								setToggleReviews(true);
							}}
						>
							Description
						</p>
						<p
							className="boder px-5 py-3 text-sm border cursor-pointer"
							onClick={() => {
								setToggleReviews(false);
							}}
						>
							Reviews ({product.NumberOfReviews})
						</p>
					</div>
					{toggleReviews ? (
						<div className="flex flex-col gap-4 border  px-5 py-5 text-sm ">
							<p>
								{product.Description}
							</p>
						</div>
					) : (
						<div className="flex flex-col gap-4 border  px-5 py-5 text-sm ">
							Reviews seciton
						</div>
					)}
				</div>
			</div>
			<RelatedProducts
				type={product.Category}
				gender={product.Gender}
				ProductId={product.ProductId}
			/>
		</div>
	);
};

export default Layout()(Product);
