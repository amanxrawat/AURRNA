import React from "react";
import { twMerge } from "tailwind-merge";
import Card from "./Card";

import { productData } from "./../../constants/sampleData";

const Trending = ({ className, width, size = 3 }) => {
	return (
		<div className={twMerge("py-8", className)}>
			<div className="flex flex-col">
				<h1 className="text-5xl text-center font-Corm p-8">Trending Now</h1>
				<div className="flex flex-row  p-2">
					<div className="flex flex-row gap-2 mx-auto lg:justify-evenly justify-evenly flex-wrap">
						{productData.map((item, index) =>
							index < size ? (
								<Card
									key={index}
									Name={item.Name}
									Images={item.Images}
									Gender={item.Gender}
									Material={item.Material}
									Category={item.Category}
									Price={item.Price}
									ProductId={item.ProductId}
									Rating={item.Rating}
									NoOfReviews={item.NumberOfReviews}
								/>
							) : (
								<div key={index}></div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trending;
