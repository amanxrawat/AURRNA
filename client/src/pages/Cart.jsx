import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline as DeleteIcon } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setItemQuantity, removeItemByProductId } from "./../redux/features/cart/cartSlice.js";

import Layout from "../components/layout/Layout"; 

const Cart = () => {
  const dispatch = useDispatch();
  const setQuantity = (ProductId, quantity) => {
    console.log(quantity,ProductId)
    if (quantity !== "") {
      dispatch(setItemQuantity({ ProductId: ProductId, quantity: quantity }));
    }
  };

  const RemoveItem = (productId) => {
    console.log(productId);
    dispatch(removeItemByProductId({productId : productId}));
  }

  const { cart } = useSelector((state) => state.cart);
  const [shippingCost, setShippingCost] = useState(0.00)

  useEffect(() => {
    console.log(cart);
    cart.length > 0 ? setShippingCost(100.00) :  setShippingCost(0.00); 
  }, [cart]);

  return (
    <div className="container mx-auto pb-12">
    <h2 className="section-heading px-10 uppercase">Shopping Cart</h2>
    <div className=" my-2"></div>
    <div className="flex flex-row flex-wrap gap-4">
      {/* Cart Items Section */}
      <div className="w-full md:w-[60%]  mx-auto border ">
        <h2 className="section-title text-4xl  bg-dark text-white border mb-4 py-5 w-full">Items In Cart</h2>
        <div className="flex flex-col gap-5 px-10 pb-10">
          {/* Table Header */}
          <div className="grid grid-cols-5 text-center font-semibold border-b pb-2 uppercase text-sm text-gray-600">
            <div className="min-w-[200px]">Product Details</div>
            <div className="min-w-[100px]">Price</div>
            <div className="min-w-[100px]">Quantity</div>
            <div className="min-w-[100px]">Total</div>
            <div className="min-w-[100px]">Remove</div>
          </div>
  
          {/* Cart Items */}
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={item.product.id || index}
                className="grid grid-cols-5 text-center items-center border-y py-4"
              >
                <div className="min-w-[200px] flex items-center">
                  <img src={item.product.Images[0]} className="h-16"/><p>{item.product.Name}</p></div>
                <div className="min-w-[100px]">&#8377;{item.product.Price.toFixed(2)}</div>
                <div className="min-w-[100px]">
                  <input 
                  min={1} 
                  type="number" 
                  className="w-12 pl-auto text-center border" 
                  defaultValue={item.quantity} 
                  onChange={(e)=>{setQuantity(item.product.ProductId,e.target.value)}
                  }/>
                </div>
                <div className="min-w-[100px]">
                &#8377;{(item.quantity * item.product.Price).toFixed(2)}
                </div>
                <div className="min-w-[100px]">
                <motion.button onClick={()=>RemoveItem(item.product.ProductId)} whileHover={{scale:1.1}} className="border">
                    <DeleteIcon fill="#ff5430" className="m-2" size={24}/>
                  </motion.button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600 py-5">
              Your cart is empty. Start shopping now!
            </div>
          )}
        </div>
      </div>
  
      {/* Summary Section */}
      <div className="w-full md:w-[30%] mx-auto border h-80">
        <h2 className="section-title text-2xl pb-5 bg-dark text-white ">Summary</h2>
        <div className="border-t  px-10 pt-5">
          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>&#8377;{cart.reduce((sum, item) => sum + item.quantity * item.product.Price, 0).toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Shipping</span>
            <span>&#8377;
            {shippingCost}
            </span>
          </div>
          <div className="flex justify-between py-2 font-bold">
            <span>Total</span>
            <span>&#8377;{(cart.reduce((sum, item) => sum + item.quantity * item.product.Price, 0) + shippingCost).toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-12 font-bold">
            <button className="border bg-dark mx-auto text-white py-3 px-10"> Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Layout()(Cart);
