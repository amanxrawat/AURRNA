import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { OrderInformation } from "../../constants/sampleData";

const OrderInfo = () => {
  return (
    <AdminLayout>
      <div className="bg-gray-800 min-h-screen px-4 py-6">
        <h2 className="uppercase text-3xl text-center text-white py-6 font-bold">Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600 text-white">
            {/* Table Header */}
            <thead className="bg-[#240a32]">
              <tr>
                {/* <th className="border border-gray-600 px-4 py-2">Order ID</th> */}
                <th className="border border-gray-600 px-4 py-2">User</th>
                <th className="border border-gray-600 px-4 py-2">Order Items</th>
                <th className="border border-gray-600 px-4 py-2">Total Price</th>
                <th className="border border-gray-600 px-36 py-2">Shipping Address</th>
                <th className="border border-gray-600 px-4 py-2">Payment</th>
                <th className="border border-gray-600 px-4 py-2">Order Status</th>
                <th className="border border-gray-600 px-4 py-2">Waybill</th>
                <th className="border border-gray-600 px-4 py-2">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {OrderInformation.map((order, index) => (
                <tr key={index} className="odd:bg-[#4b2679] even:bg-[#2e1848]">
                  {/* Order ID */}
                  {/* <td className="border border-gray-600 px-4 py-2 text-center">{order._id}</td> */}

                  {/* User ID */}
                  <td className="border border-gray-600 px-4 py-2 text-center">{order.user}</td>

                  {/* Order Items */}
                  {/* Order Items - Nested Table */}
                  <td className="border border-gray-600 px-4 py-2">
                    {order.orderItems.length > 0 ? (
                      <table className="w-full border-collapse border border-gray-400 text-sm">
                        <thead className="bg-[#240933]">
                          <tr>
                            <th className="border border-gray-500 px-2 py-1">Product ID</th>
                            <th className="border border-gray-500 px-2 py-1">Quantity</th>
                            <th className="border border-gray-500 px-2 py-1">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.orderItems.map((item, idx) => (
                            <tr key={idx} className="odd:bg-gray-200 even:bg-white text-black">
                              <td className="border border-gray-500 px-2 py-1 text-center">{item.productId || "N/A"}</td>
                              <td className="border border-gray-500 px-2 py-1 text-center">{item.quantity || 0}</td>
                              <td className="border border-gray-500 px-2 py-1 text-center">${item.price ? item.price.toFixed(2) : "0.00"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <span className="text-gray-400">No items</span>
                    )}
                  </td>


                  {/* Total Price */}
                  <td className="border border-gray-600 px-4 py-2 text-center font-bold">
                    ${order.totalPrice.toFixed(2)}
                  </td>

                  {/* Shipping Address */}
                  {/* Shipping Address */}
                  <td className="border border-gray-600 px-4 py-2 max-w-[200px] whitespace-nowrap">
                    {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state},
                    {order.shippingAddress.country} - {order.shippingAddress.postalCode}
                  </td>


                  {/* Payment Details */}
                  <td className="border border-gray-600 px-4 py-2 text-center">
                    <span className="block">{order.paymentMethod}</span>
                    <span
                      className={`block font-semibold ${order.paymentStatus === "paid" ? "text-green-400" : "text-yellow-400"
                        }`}
                    >
                      {order.paymentStatus.toUpperCase()}
                    </span>
                  </td>

                  {/* Order Status */}
                  <td className="border border-gray-600 px-4 py-2 text-center">
                    <span
                      className={`px-2 py-1 rounded text-white text-xs ${order.orderStatus === "pending"
                        ? "bg-yellow-500"
                        : order.orderStatus === "shipped"
                          ? "bg-blue-500"
                          : order.orderStatus === "delivered"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                    >
                      {order.orderStatus.toUpperCase()}
                    </span>
                  </td>

                  {/* Waybill */}
                  <td className="border border-gray-600 px-4 py-2 text-center">
                    {order.waybill}
                  </td>

                  {/* Actions */}
                  <td className="border border-gray-600 px-4 py-2 text-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default OrderInfo;
