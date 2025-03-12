import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import { CiCircleCheck as TickIcon } from "react-icons/ci";

const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0).toFixed(2);
  };

  return (
    <section className="bg-orange py-8 antialiased">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <ol className="flex w-full max-w-2xl text-center text-sm font-medium text-gray-500">
          <li className="flex text-center">
            <span className="flex items-center">
              <TickIcon fill="black" size={22} className="pr-1" />
              Checkout and Order Summary
            </span>
          </li>
        </ol>

        {/* Checkout Form */}
        <form className="mt-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-10">
            {/* Left Side - Delivery Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Delivery Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">Your Name*</label>
                  <input type="text" className="w-full rounded-lg border p-2.5 text-sm" placeholder="Rakesh Sharma" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Your Email*</label>
                  <input type="email" className="w-full rounded-lg border p-2.5 text-sm" placeholder="youremail@gmail.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Country*</label>
                  <select className="w-full rounded-lg border p-2.5 text-sm">
                    <option selected>India</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Your State*</label>
                  <input type="text" className="w-full rounded-lg border p-2.5 text-sm" placeholder="Haryana" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Your City*</label>
                  <input type="text" className="w-full rounded-lg border p-2.5 text-sm" placeholder="Gurugram" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Your Address*</label>
                  <input type="text" className="w-full rounded-lg border p-2.5 text-sm" placeholder="H No. 14, Post Office Road" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Phone Number*</label>
                  <input type="tel" pattern="[0-9]{10}" className="w-full rounded-lg border p-2.5 text-sm" placeholder="123-456-7890" required />
                </div>
              </div>

              {/* Payment Options */}
              <h3 className="text-xl font-semibold text-gray-900">Payment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border bg-white p-4 rounded-lg">
                  <label className="flex items-center gap-3">
                    <input type="radio" name="payment-method" defaultChecked className="h-4 w-4" />
                    <span>Cash On Delivery</span>
                  </label>
                </div>

                <div className="border bg-white p-4 rounded-lg">
                  <label className="flex items-center gap-3">
                    <input type="radio" name="payment-method" className="h-4 w-4" />
                    <span>Pay Now (UPI)</span>
                  </label>
                </div>
              </div>

              {/* Delivery Methods */}
              <h3 className="text-xl font-semibold text-gray-900">Delivery Methods</h3>
              <div className="border p-4 rounded-lg bg-white">
                <label className="flex items-center gap-3">
                  <input type="radio" name="delivery-method" defaultChecked className="h-4 w-4" />
                  <span>&#8377;100 - Express Delivery By Delhivery</span>
                </label>
              </div>

              {/* Coupon Code */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Enter a gift card, voucher, or promotional code</label>
                <div className="flex items-center gap-4">
                  <input type="text" className="w-full border p-2.5 text-sm rounded-lg" />
                  <button className="bg-dark text-white px-4 py-2 rounded-lg hover:bg-purple">Apply</button>
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div>
            <div className="bg-white border p-6 rounded-lg max-w-xl mx-auto space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>&#8377;{getCartTotal()}</span>
                </div>

                <div className="flex justify-between text-green-500">
                  <span>Savings</span>
                  <span>-&#8377;{(getCartTotal() * 0.2).toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-500">
                  <span>Delivery</span>
                  <span>&#8377;100</span>
                </div>

                <div className="flex justify-between font-bold text-gray-900">
                  <span>Total</span>
                  <span>&#8377;{(parseFloat(getCartTotal()) + 100).toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-dark text-white py-2 rounded-lg hover:bg-purple">
                Proceed to Payment
              </button>

              <p className="text-sm text-gray-500">
                One or more items in your cart require an account.{" "}
                <a href="/login" className="text-primary-700 underline hover:no-underline">
                  Sign in or create an account now.
                </a>
              </p>
            </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Layout()(Checkout);
