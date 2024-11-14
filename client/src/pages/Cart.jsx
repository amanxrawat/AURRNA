import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";

import { useDispatch, useSelector } from "react-redux";
import { setItemQuantity } from "./../redux/features/cart/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const setQuantity = (ProductId, quantity) => {
    console.log(ProductId, quantity);
    if (quantity !== "") {
      dispatch(setItemQuantity({ ProductId: ProductId, quantity: quantity }));
    }
  };

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="">
      <h2 className="section-heading">Shopping Cart</h2>
      <div className="border"></div>
      <div className="flex flex-row">
        <div className="w-[70%] px-10 pr-16">
          <h2 className="section-title">Items In Cart</h2>
          <div className="flex flex-col gap-5 pb-10">
            <div className="flex flex-row gap-4 justify-between">
              <div className="uppercase text-sm w-[50%] text-gray-600">
                Product Details
              </div>
              <div className="uppercase text-sm text-gray-600">Quantity</div>
              <div className="uppercase text-sm text-gray-600">Price</div>
              <div className="uppercase text-sm text-gray-600">Total</div>
            </div>
            {cart.length > 0 ? (
              cart.map((item, index) => {
                console.log(item);
                return (
                  <div
                    key={index}
                    className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                  >
                    <div className="flex items-start gap-6">
                      <img
                        className="w-16 sm:w-20"
                        alt="ProductImage"
                        src={item.product.Images[0]}
                      />
                      <div>
                        <p className="text-xs sm:text-lg">
                          {item.product.Name}
                        </p>
                        <div className="flex items-center gap-5 mt-2">
                          <p>&#8377;{item.product.Price}</p>
                          <p className="border px-2 sm:px-3 sm:py-1">
                            {item.product.Material}
                          </p>
                        </div>
                      </div>
                    </div>
                    <input
                      className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 "
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      onChange={(e) => {
                        setQuantity(item.product.ProductId, e.target.value);
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <div>Your cart is empty</div>
            )}
          </div>
          <h3></h3>
        </div>
        <div className="">
          <h2 className="section-title">Summary</h2>
        </div>
      </div>
    </div>
  );
};

export default Layout()(Cart);
