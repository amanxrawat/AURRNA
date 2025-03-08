import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";

import { CiCircleCheck as TickIcon } from "react-icons/ci";


const Checkout = () => {
  const { cart } = useSelector((state) => state.cart);

  const getCartTotal = () => {
    return cart
      .reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0,
      )
      .toFixed(2);
  }

  return (
    <section class="bg-orange py-8 antialiased">
      <ol class="items-center flex w-full max-w-2xl text-center text-sm ml-32 font-medium text-gray-500">

        <li class=" flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200">
          <span class="flex items-center after:mx-2 after:text-gray-200">
            <TickIcon fill="black" size={22} className="pr-1" />
            Checkout and Order Summary
          </span>
        </li>
      </ol>
      <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">


        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div class="min-w-0 flex-1 space-y-8">
            <div class="space-y-4">
              <h2 class="text-xl font-semibold text-gray-900">
                Delivery Details
              </h2>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-900 ">
                    Your name*
                  </label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Rakesh Sharma"
                    required
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-900">
                    Your email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>

                <div>
                  <div class="mb-2 flex items-center gap-2">
                    <label class="block text-sm font-medium text-gray-900">
                      Country*
                    </label>
                  </div>
                  <select class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                    <option selected>India</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-900 ">
                    Your State*
                  </label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Haryana"
                    required
                  />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-900 ">
                    Your City*
                  </label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Gurugram"
                    required
                  />
                </div>
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-900 ">
                    Your Address*
                  </label>
                  <input
                    type="text"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="H No. 14, Post Office Road"
                    required
                  />
                </div>


                <div>
                  <label
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Phone Number*
                  </label>
                  <div class="relative w-full">
                    <input
                      type="tel"
                      class="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      pattern="[0-9]{10}"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>

                  {/* <div class="sm:col-span-2">
                    <button
                      type="submit"
                      class="flex w-full mt-5 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                    >
                      Add new address
                    </button>
                  </div> */}
                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900">
                  Payment
                </h3>



                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          checked
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 "
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="pay-on-delivery"
                          class="font-medium leading-none text-gray-900 "
                        >
                          Cash On Delivery
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          class="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Pay when you receive your order
                        </p>
                      </div>
                    </div>

                  </div>
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 "
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="pay-on-delivery"
                          class="font-medium leading-none text-gray-900 "
                        >
                          Pay Now
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          class="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Pay through UPI
                        </p>
                      </div>
                    </div>
                  </div>




                  {/* <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          type="radio"
                          name="payment-method"
                          value=""
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 "
                          disabled
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="credit-card"
                          class="font-medium leading-none text-gray-900 "
                        >
                          Credit Card
                        </label>
                        <p
                          id="credit-card-text"
                          class="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Pay with your credit card (Coming Soon)
                        </p>
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>

              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-900">
                  Delivery Methods
                </h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 ">
                    <div class="flex items-start">
                      <div class="flex h-5 items-center">
                        <input
                          id="express"
                          aria-describedby="express-text"
                          type="radio"
                          name="delivery-method"
                          value=""
                          checked
                          class="h-4 w-4 border-gray-300 bg-white text-primary-600 "
                        />
                      </div>

                      <div class="ms-4 text-sm">
                        <label
                          for="express"
                          class="font-medium leading-none text-gray-900 "
                        >
                          {" "}
                          &#8377;100 - Express Delivery{" "}
                        </label>
                        <p
                          id="express-text"
                          class="mt-1 text-xs font-normal text-gray-500 "
                        >
                          Service Provided By Delhivery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="voucher"
                  class="mb-2 block text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Enter a gift card, voucher or promotional code{" "}
                </label>
                <div class="flex max-w-md items-center gap-4">
                  <input
                    type="text"
                    id="voucher"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
                    placeholder=""
                    required
                  />
                  <button
                    type="button"
                    class="flex items-center justify-center rounded-lg bg-dark px-5 py-2.5 text-sm text-white font-medium  hover:bg-purple"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div class="flow-root">
                <div class="-my-3 divide-y divide-gray-200 ">
                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">
                      Subtotal
                    </dt>
                    <dd class="text-base font-medium text-gray-900 ">
                    &#8377;{getCartTotal()*1.2.toFixed(2)}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">
                      Savings
                    </dt>
                    <dd class="text-base font-medium text-green-500">-&#8377;{getCartTotal() * 0.2.toFixed(2)}</dd>
                  </dl>


                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-normal text-gray-500 ">
                      Delivery
                    </dt>
                    <dd class="text-base font-medium text-gray-900 ">
                    &#8377;100
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4 py-3">
                    <dt class="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 ">
                    &#8377;{parseInt(getCartTotal()) + 100}
                    </dd>
                  </dl>
                </div>
              </div>

              <div class="space-y-3">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-dark px-5 py-2 text-sm font-medium text-white hover:bg-purple"
                >
                  Proceed to Payment
                </button>

                <p class="text-sm font-normal text-gray-500 ">
                  One or more items in your cart require an account.{" "}
                  <a
                    href="/login"
                    title=""
                    class="font-medium text-primary-700 underline hover:no-underline "
                  >
                    Sign in or create an account now.
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Layout()(Checkout);
