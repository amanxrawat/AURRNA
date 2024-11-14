import React from "react";
import { Link } from "react-router-dom";

const Card = ({
	Name,
	Images,
	Gender,
	Material,
	Category,
	Price,
	ProductId,
}) => {
	console.log(Images);
	return (
		<Link to={`/product/${ProductId}`}>
			<div className=" w-44 flex flex-col border border-gray-200 gap-1">
				<div className=" py-1 mx-auto rounded-md">
					<img
						src={Images[0]}
						alt="productImages"
						className="h-40 w-40 rounded-md"
					/>
				</div>
				<div className="p-2 m-1">
					<p className="absolute translate-y-[-60px] bg-white text-dark w-20 border-purple border text-center">
						{10}% off
					</p>
					<h2 className="font-Corm text-lg">{Name}</h2>
					<h2 className="font-Corm text-md">{Gender}</h2>
					<h2 className="font-Corm text-md">{Material}</h2>
					<h2 className="font-Corm text-md">{Category}</h2>

					<span>₹{Price * 10} only/-</span>
				</div>
			</div>
		</Link>
	);
};

export default Card;
