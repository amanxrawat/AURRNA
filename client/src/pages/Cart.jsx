import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  setItemQuantity,
  removeItemByProductId,
} from "./../redux/features/cart/cartSlice.js";

import Layout from "../components/layout/Layout";
import { twMerge } from "tailwind-merge";

import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setQuantity = (ProductId, quantity) => {
    if (quantity !== "") {
      dispatch(setItemQuantity({ ProductId: ProductId, quantity: quantity }));
    }
  };

  const RemoveItem = (productId) => {
    dispatch(removeItemByProductId({ productId: productId }));
  };

  const { cart } = useSelector((state) => state.cart);
  const [shippingCost, setShippingCost] = useState(0.0);

  useEffect(() => {
    console.log("Cart:", cart);
    cart.length > 0 ? setShippingCost(100.0) : setShippingCost(0.0);
  }, [cart]);


  return (
    <div className="container mx-auto pb-12">
      <h2 className="section-heading px-10 uppercase">Shopping Cart</h2>
      <div className="my-2"></div>
      <div className="flex flex-row flex-wrap gap-4">
        {/* Cart Items Section */}
        <div className="mx-auto w-full border md:w-[60%]">
          <h2 className="section-title mb-4 w-full border bg-dark py-5 text-4xl text-white">
            Items In Cart
          </h2>
          <div className="flex flex-col gap-5 px-10 pb-10">
            {/* Table Header */}
            <div className="grid grid-cols-5 border-b pb-2 text-center text-sm font-semibold uppercase text-gray-600">
              <div className="min-w-[200px]">Product Details</div>
              <div className="min-w-[100px]">Price</div>
              <div className="min-w-[100px]">Quantity</div>
              <div className="min-w-[100px]">Total</div>
              <div className="min-w-[100px]">Remove</div>
            </div>

            {/* Cart Items */}
            {cart.length > 0 ? (
              cart.map((item, index) =>
              (
                <div
                  key={item.product._id || index}
                  className="grid grid-cols-5 items-center border-y py-4 text-center"
                >
                  <div className="flex min-w-[200px] items-center">
                    <img src={item.product.images[0]} className="h-16" />
                    <p>{item.product.name}</p>
                  </div>
                  <div className="min-w-[100px]">
                    &#8377;{parseInt(item.product.price) || 0}
                  </div>
                  <div className="min-w-[100px]">
                    <input
                      min={1}
                      type="number"
                      className="pl-auto w-12 border text-center"
                      defaultValue={item.quantity}
                      onChange={(e) => {
                        setQuantity(item.product._id, e.target.value);
                      }}
                    />
                  </div>
                  <div className="min-w-[100px]">
                    &#8377;{(item.quantity * item.product.price).toFixed(2)}
                  </div>
                  <div className="min-w-[100px]">
                    <motion.button
                      onClick={() => RemoveItem(item.product._id)}
                      whileHover={{ scale: 1.1 }}
                      className="border"
                    >
                      <DeleteIcon fill="#ff5430" className="m-2" size={24} />
                    </motion.button>
                  </div>
                </div>
              )
              )

            ) : (
              <div className="py-5 text-center text-gray-600">
                Your cart is empty. Start shopping now!
              </div>
            )}
          </div>
        </div>

        {/* Summary Section */}
        <div className="mx-auto h-80 w-full border md:w-[30%]">
          <h2 className="section-title bg-dark pb-5 text-2xl text-white">
            Summary
          </h2>
          <div className="border-t px-10 pt-5">
            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>
                &#8377;
                {cart
                  .reduce(
                    (sum, item) => sum + item.quantity * item.product.price,
                    0,
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span>
                &#8377;
                {shippingCost}
              </span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>
                &#8377;
                {(
                  cart.reduce(
                    (sum, item) => sum + item.quantity * item.product.price,
                    0,
                  ) + shippingCost
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-12 font-bold">
              <button
                className={twMerge(
                  "mx-auto border bg-dark px-10 py-3 text-white",
                  cart.length > 0
                    ? "opacity-100"
                    : "cursor-not-allowed bg-gray-800 opacity-50",
                )}
                disabled={cart.length <= 0}
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout()(Cart);
