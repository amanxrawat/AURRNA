import React from "react";
import { Link } from "react-router-dom";
import { FaStar as StarIcon } from "react-icons/fa";
import { FaTruck as TruckIcon } from "react-icons/fa";
import { PiMoneyFill as DollarIcon } from "react-icons/pi";
import { TbShoppingCartPlus as CartIcon } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { addItem, addItemByProductId } from "../../redux/features/cart/cartSlice";
import ReviewStars from "../shared/Stars";

const Card = ({
	Name,
	Images,
	Gender,
	Material,
	Category,
	Price,
	ProductId,
	Rating,
	NoOfReviews
}) => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);

	const handleCart = (productId) => {
		dispatch(addItemByProductId(productId));
	};


	return (

		<div>
			<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
				<div className="h-56 w-full">
					<Link to={`/product/${ProductId}`}>
						<img className="mx-auto h-full w-full object-center " src={Images} alt="Jewlery Image " onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}} />
					</Link>
				</div>
				<div className="pt-6">
					<div className="mb-4 flex items-center justify-between gap-4">
						<span className="me-2 rounded bg-dark px-2.5 py-2 text-xs font-medium text-white"> Up to 40% off </span>
					</div>

					<Link to={`/product/${ProductId}`} onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" });}} className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
						{Name}</Link>

					<div className="mt-2 flex items-center gap-2">
						<div className="flex items-center">
							{
								<ReviewStars rating={5} />
							}
						</div>
						<p className="text-sm font-medium text-gray-900 ">{Rating}</p>
						<p className="text-sm font-medium text-gray-500 ">({NoOfReviews})</p>
					</div>

					<ul className="mt-2 flex items-center gap-4">
						<li className="flex items-center gap-2">
							<TruckIcon fill="#444444" />
							<p className="text-sm font-medium text-gray-500 ">Fast Delivery</p>
						</li>

						<li className="flex items-center gap-2">
							<DollarIcon fill="#444444" />
							<p className="text-sm font-medium text-gray-500 ">Best Price</p>
						</li>
					</ul>

					<div className="mt-4 flex items-center justify-between gap-4">
						<p className="text-2xl font-extrabold leading-tight text-gray-900 ">&#8377;{Price}</p>

						<button
							onClick={(e) => {
								handleCart(ProductId);
							}}
							type="button" className="inline-flex items-center rounded-lg bg-dark px-5 py-2.5 text-sm font-medium text-white hover:bg-purple focus:outline-none focus:ring-2 focus:ring-dark  ">
							<CartIcon size={20} className="mx-2" />
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>


	);
};

export default Card;
