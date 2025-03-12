import Layout from "../components/layout/Layout";
import React from "react";
import { sampleUser, Orders } from "../constants/sampleData";

const ProfilePage = () => {
  return (
    <div className="   bg-orange">
      {/* Header */}
      <header className="py-2 px-4 border-b border-gray-300 bg-orange shadow-sm">
        <h1 className="section-heading text-center">Profile Page</h1>
      </header>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="md:col-span-1">
            <div className="bg-white border rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center">
                <img
                  src="/Images/Profile.jpg"
                  alt="Profile"
                  className="w-28 h-28 rounded-full border shadow-md"
                />
                <h2 className="text-xl font-semibold mt-4">{sampleUser.Name}</h2>
                <p className="text-gray-600">{sampleUser.Email}</p>
                <p className="text-gray-600 text-center mt-2">{sampleUser.Address}</p>
              </div>
              <button className="mt-6 w-full bg-purple text-white py-2 px-4 rounded-md hover:bg-dark transition">
                Edit Details
              </button>
            </div>
          </div>

          {/* Previous Orders */}
          <div className="md:col-span-2">
            <div className="bg-white border rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-semibold text-purple text-center section-heading">Previous Orders</h2>

              {Orders.length > 0 ? (
                <div className="space-y-4">
                  {Orders.map((order, index) => (
                    <div key={index} className="p-4 border rounded-lg flex flex-col md:flex-row gap-4">
                      <img
                        src={order.Images[0] || "/placeholder.svg"}
                        alt={order.Name}
                        className="w-full md:w-40 h-24 object-cover rounded-md border"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold  font-BeViet text-dark  ">{order.Name}</h3>
                        <p className="text-gray-700">{order.Description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 text-xl py-6">No Orders Here</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout()(ProfilePage);
