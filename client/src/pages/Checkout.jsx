import React from "react";
import Layout from "../components/layout/Layout";
const Checkout = () => {
  return (
    <div>
      <section class="bg-white py-8 antialiased">
        <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500">
            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/']">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>

            <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200">
              <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/']">
                <svg
                  class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Checkout
              </span>
            </li>

            <li class="flex shrink-0 items-center">
              <svg
                class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Order summary
            </li>
          </ol>

          <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div class="min-w-0 flex-1 space-y-8">
              <div class="space-y-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
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
                      Your city*
                    </label>
                    <input
                      type="text"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="New Delhi"
                      required
                    />
                  </div>


                  <div>
                    <label
                      for="phone-input-3"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number*
                    </label>
                    <div class="flex items-center">
                      <div
                        class="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                      >
                        <div class="relative w-full">
                          <input
                            type="text"
                            id="phone-input"
                            class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        for="email"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="company_name"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Company name{" "}
                      </label>
                      <input
                        type="text"
                        id="company_name"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Flowbite LLC"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="vat_number"
                        class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        VAT number{" "}
                      </label>
                      <input
                        type="text"
                        id="vat_number"
                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="DE42313253"
                        required
                      />
                    </div>

                    <div class="sm:col-span-2">
                      <button
                        type="submit"
                        class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        <svg
                          class="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 12h14m-7 7V5"
                          />
                        </svg>
                        Add new address
                      </button>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Payment
                  </h3>

                  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="credit-card"
                            aria-describedby="credit-card-text"
                            type="radio"
                            name="payment-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            checked
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="credit-card"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            Credit Card{" "}
                          </label>
                          <p
                            id="credit-card-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Pay with your credit card
                          </p>
                        </div>
                      </div>

                      <div class="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Delete
                        </button>

                        <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Edit
                        </button>
                      </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="pay-on-delivery"
                            aria-describedby="pay-on-delivery-text"
                            type="radio"
                            name="payment-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="pay-on-delivery"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            Payment on delivery{" "}
                          </label>
                          <p
                            id="pay-on-delivery-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            +$15 payment processing fee
                          </p>
                        </div>
                      </div>

                      <div class="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Delete
                        </button>

                        <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Edit
                        </button>
                      </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="paypal-2"
                            aria-describedby="paypal-text"
                            type="radio"
                            name="payment-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="paypal-2"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            Paypal account{" "}
                          </label>
                          <p
                            id="paypal-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Connect to your account
                          </p>
                        </div>
                      </div>

                      <div class="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Delete
                        </button>

                        <div class="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                        <button
                          type="button"
                          class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Delivery Methods
                  </h3>

                  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="dhl"
                            aria-describedby="dhl-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                            checked
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="dhl"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            $15 - DHL Fast Delivery{" "}
                          </label>
                          <p
                            id="dhl-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it by Tommorow
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="fedex"
                            aria-describedby="fedex-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="fedex"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            Free Delivery - FedEx{" "}
                          </label>
                          <p
                            id="fedex-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it by Friday, 13 Dec 2023
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div class="flex items-start">
                        <div class="flex h-5 items-center">
                          <input
                            id="express"
                            aria-describedby="express-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div class="ms-4 text-sm">
                          <label
                            for="express"
                            class="font-medium leading-none text-gray-900 dark:text-white"
                          >
                            {" "}
                            $49 - Express Delivery{" "}
                          </label>
                          <p
                            id="express-text"
                            class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it today
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="voucher"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Enter a gift card, voucher or promotional code{" "}
                  </label>
                  <div class="flex max-w-md items-center gap-4">
                    <input
                      type="text"
                      id="voucher"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                    <button
                      type="button"
                      class="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div class="flow-root">
                  <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Subtotal
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        $8,094.00
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd class="text-base font-medium text-green-500">0</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        $199
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd class="text-base font-bold text-gray-900 dark:text-white">
                        $8,392.00
                      </dd>
                    </dl>
                  </div>
                </div>

                <div class="space-y-3">
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 "
                  >
                    Proceed to Payment
                  </button>

                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    One or more items in your cart require an account.{" "}
                    <a
                      href="#"
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
        </form>
      </section>
    </div>
  );
};

export default Layout()(Checkout);
