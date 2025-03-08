import React, { useState, useEffect } from "react";

import Card from "./Card";
import Trending from "./../specific/Trending";
import { fetchProducts } from "../../api/api";

const RelatedProducts = ({ type, gender, ProductId }) => {
	const [related, setRelated] = useState([]);

	const [productData, setProductData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchProducts(); // Ensure fetchProducts returns data
				setProductData(data?.data); // Update state with fetched products
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchData();
	}, []);

	// console.log(productData);

	useEffect(() => {
		if (productData.length > 0) {
			let productCopy = productData.slice();

			// productCopy.forEach((item) => {
			// 	console.log(item.categories);
			// });

			productCopy = productCopy.filter(
				(item) =>
					item.categories.some((category) => type.includes(category)) &&
					item.ProductId !== ProductId,
			);

			setRelated(productCopy);
		}
	}, [ProductId]);
	return (
		<div className="py-12 px-10">
			<div className="text0center text-3xl py-2">
				<h2 className="font-Corm text-[36px]">Related Products</h2>
			</div>
			{related.length > 0 ? (
				<div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-5">
					{related.map((item, index) => {
						return <Card key={index} product={item} />;
					})}
				</div>
			) : (
				<div>
					<h2>Nothing related found tryout our newest trending jewelleries</h2>
					<Trending className={"p-0"} />
				</div>
			)}
		</div>
	);
};

export default RelatedProducts;
