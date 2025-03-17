import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/features/cart/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/api";

import Layout from "../components/layout/Layout";
import RelatedProducts from "../components/specific/RelatedProducts";
import ReviewStars from "../components/shared/Stars";
import ReviewSection from "../components/specific/Review";

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
  });

  const product = data?.data || [];

  const handleCart = (product) => {
    dispatch(addItem(product));
  };

  // const productSizes = ["sm", "md", "lg", "xl"];

  const [currentImage, setCurrentImage] = useState(
    product?.images?.[0] || null,
  );
  const [toggleReviews, setToggleReviews] = useState(false);
  // const [size, setSize] = useState("");

  useEffect(() => {
    if (product?.images?.length > 0) {
      setCurrentImage(product.images[0]);
    }
  }, [product]); // Runs when `product` updates

  return (
    <div>
      <div className="opactiy-100 border-t-2 p-10 transition-opacity duration-500 ease-in">
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
          <div className="flex-col-reverse flex flex-1 gap-1 sm:flex-row">
            <div className="lg:no-scrollbar flex w-20 justify-between gap-0 sm:w-20 sm:flex-col sm:justify-normal sm:overflow-y-scroll">
              {product?.images?.map((item, index) => {
                return (
                  <img
                    src={item}
                    key={index}
                    className="border p-1"
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
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-Corm text-3xl font-medium">{product.name}</h1>
            <div className="mt-2 flex items-center gap-1">
              <ReviewStars rating={5} />
              <p>{product.ratings}</p>
              <p>({product.numReviews})</p>
            </div>
            <p className="mt-5 text-3xl font-medium">&#8377;{product.price}</p>

            <p className="mt-1 py-5 md:w-4/5">{product.description}</p>
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
              className="bg-dark px-8 py-3 text-sm text-white active:bg-gray-500"
              onClick={(e) => {
                handleCart(product);
              }}
            >
              Add to Cart
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="mt-5 flex flex-col gap-1 text-sm">
              <p>100% Original Product</p>
              <p>Cash On Delivery</p>
              <p>Easy Replacement</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex">
            {/* <p
              className="boder cursor-pointer border px-5 py-3 text-sm"
              onClick={() => {
                setToggleReviews(true);
              }}
            >
              Description
            </p> */}
            <p
              className="boder cursor-pointer border px-5 py-3 text-sm"
              onClick={() => {
                setToggleReviews(false);
              }}
            >
              Reviews ({product.numReviews})
            </p>
          </div>
          {toggleReviews ? (
            <div className="flex flex-col gap-4 border px-5 py-5 text-sm">
              <p>{product.description}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 border py-5 text-sm">
              <ReviewSection />
            </div>
          )}
        </div>
      </div>
      <RelatedProducts
        type={product.categories}
        // gender={product.Gender}
        ProductId={product._id}
      />
    </div>
  );
};

export default Layout()(Product);
