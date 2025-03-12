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
  const { cart } = useSelector((state) => state.cart);
  const [shippingCost, setShippingCost] = useState(0.0);

  useEffect(() => {
    cart.length > 0 ? setShippingCost(100.0) : setShippingCost(0.0);
  }, [cart]);

  const setQuantity = (ProductId, quantity) => {
    if (quantity !== "") {
      dispatch(setItemQuantity({ ProductId: ProductId, quantity: quantity }));
    }
  };

  const RemoveItem = (productId) => {
    dispatch(removeItemByProductId({ productId: productId }));
  };

  return (
    <div className="container mx-auto pb-12 px-4">
      <h2 className="section-heading uppercase text-center">Shopping Cart</h2>

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Cart Items Section */}
        <div className="w-full lg:w-3/5 border rounded-md shadow-md bg-white">
          <h2 className="section-title bg-dark py-4 text-center text-2xl text-white">
            Items In Cart
          </h2>
          <div className="overflow-auto">
            <div className="flex flex-col gap-5 px-4 py-4">
              {/* Table Header */}
              <div className="grid grid-cols-5 border-b pb-2 text-center text-sm font-semibold uppercase text-gray-600 min-w-[600px]">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Remove</div>
              </div>

              {/* Cart Items */}
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <div
                    key={item.product._id || index}
                    className="grid grid-cols-5 items-center border-y py-3 text-center min-w-[600px]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.images[0]}
                        className="h-14 w-14 object-cover rounded-md"
                      />
                      <p className="text-sm font-medium">{item.product.name}</p>
                    </div>
                    <div>&#8377;{parseInt(item.product.price) || 0}</div>
                    <div>
                      <input
                        min={1}
                        type="number"
                        className="w-12 border text-center rounded-md"
                        defaultValue={item.quantity}
                        onChange={(e) =>
                          setQuantity(item.product._id, e.target.value)
                        }
                      />
                    </div>
                    <div>
                      &#8377;{(item.quantity * item.product.price).toFixed(2)}
                    </div>
                    <div>
                      <motion.button
                        onClick={() => RemoveItem(item.product._id)}
                        whileHover={{ scale: 1.1 }}
                        className="border rounded-md"
                      >
                        <DeleteIcon fill="#ff5430" className="m-2" size={24} />
                      </motion.button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-5 text-center text-gray-600">
                  Your cart is empty. Start shopping now!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-2/5 border rounded-md shadow-md bg-white">
          <h2 className="section-title bg-dark py-4 text-center text-2xl text-white">
            Summary
          </h2>
          <div className="px-6 py-4">
            <div className="flex justify-between py-2 text-lg">
              <span>Subtotal</span>
              <span>
                &#8377;
                {cart
                  .reduce(
                    (sum, item) => sum + item.quantity * item.product.price,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-2 text-lg">
              <span>Shipping</span>
              <span>&#8377;{shippingCost}</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Total</span>
              <span>
                &#8377;
                {(
                  cart.reduce(
                    (sum, item) => sum + item.quantity * item.product.price,
                    0
                  ) + shippingCost
                ).toFixed(2)}
              </span>
            </div>
            <div className="mt-6">
              <button
                className={twMerge(
                  "w-full py-3 text-lg font-semibold text-white rounded-md",
                  cart.length > 0
                    ? "bg-dark hover:bg-gray-900 transition"
                    : "cursor-not-allowed bg-gray-400"
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
