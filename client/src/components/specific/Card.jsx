import React from "react";
import { Link } from "react-router-dom";
import { FaTruck as TruckIcon } from "react-icons/fa";
import { PiMoneyFill as DollarIcon } from "react-icons/pi";
import { TbShoppingCartPlus as CartIcon } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/features/cart/cartSlice";
import ReviewStars from "../shared/Stars";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleCart = (product) => {
    dispatch(addItem({ product }));
  };

  return (
    <div className="mx-auto max-w-[12rem] lg:max-w-[100rem] lg:w-72 min-w-[9rem]">
      <div className="rounded-lg border border-gray-200 bg-white p-2 lg:p-4 shadow-sm">
        {/* Product Image */}
        <div className="h-36 lg:h-56 w-full">
          <Link to={`/product/${product._id}`}>
            <img
              className="mx-auto h-full w-full object-cover rounded-lg"
              src={product.images[0]}
              loading="lazy"
              alt="Jewelry Image"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="pt-1 lg:pt-6">
          {/* Offer Tag */}
          <div className="mb-0 lg:mb-4 flex items-center justify-between gap-4">
            <span className="text-[8px] rounded bg-dark px-2.5 py-1 lg:py-2 lg:text-xs font-medium text-white">
              Up to 40% off
            </span>
          </div>

          {/* Product Name */}
          <Link
            to={`/product/${product._id}`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-md lg:text-xl font-semibold leading-tight text-gray-900 hover:underline"
          >
            {product.name}
          </Link>

          {/* Ratings */}
          <div className="mt-1 flex flex-row md:mb-2 gap-2">
            <div className="flex justify-start">
              <ReviewStars rating={5} />
            </div>
            <p className="text-xs lg:text-lg font-medium text-gray-900">{product.ratings} </p>
            <p className="text-xs lg:text-lg font-medium text-gray-900 ">({product.NumReviews}) </p>
          </div>

          {/* Features */}
          <ul className="mt-2 flex flex-row lg:flex-row items-center gap-4">
            <li className="flex items-center gap-2">
              <TruckIcon fill="#444444" />
              <p className="text-[8px] lg:text-sm font-medium text-gray-500">Fast Delivery</p>
            </li>
            <li className="flex items-center gap-2">
              <DollarIcon fill="#444444" />
              <p className="text-[8px] lg:text-sm font-medium text-gray-500">Best Price</p>
            </li>
          </ul>

          {/* Pricing & Cart Button */}
          <div className="my-1 lg:mt-4 flex flex-row lg:flex-row items-center justify-center">
            <div className="flex flex-col items-center">
              <p className="text-sm lg:text-2xl font-extrabold leading-tight text-gray-900">
                &#8377;{product.price}
              </p>
            </div>
            <div className="m-1 line-through">
              <p className="text-[6px] lg:text-sm font-extrabold leading-tight text-gray-500 text-sm">
                &#8377;{(product.price * 1.2).toFixed(2)}
              </p>
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
            {/* Add to Cart Button */}
            <button
              onClick={() => handleCart(product)}
              type="button"
              className="inline-flex text-xs  items-center rounded-lg bg-dark lg:px-5 px-4 py-2 lg:py-2.5  lg:text-sm font-medium text-white hover:bg-purple focus:outline-none focus:ring-2 focus:ring-dark"
            >
              <CartIcon size={20} className="mx-2 hidden md:block" />
              Add to cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
