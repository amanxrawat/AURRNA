import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { users } from "../../constants/sampleData";

const TableHeader = () => (
  <thead className="bg-[#240a32] text-white uppercase">
    <tr>
      {["Full Name", "Email", "Role", "Addresses", "Orders", "Coupons"].map((header) => (
        <th key={header} className="px-4 py-2 border text-center">{header}</th>
      ))}
    </tr>
  </thead>
);

const TableRow = ({ user }) => (
  <tr key={user._id} className="bg-[#2f1055] transition duration-200">
    <td className="px-4 py-2 border text-centerborder-separate border-spacing-4 whitespace-nowrap">{user.fullName || "N/A"}</td>
    <td className="px-4 py-2 border text-center">{user.email || "N/A"}</td>
    <td className="px-4 py-2 border text-center capitalize">{user.role || "customer"}</td>
    <td className="px-4 py-2 border text-center">
      {user.address.length ? user.address.join(", ") : "N/A"}
    </td>
    <td className="px-4 py-2 border text-center">
      {user.orders.length ? user.orders.join(", ") : "No Orders"}
    </td>
    <td className="px-4 py-2 border text-center">
      {user.coupons.length ? user.coupons.join(", ") : "No Coupons"}
    </td>
  </tr>
);

const UserInfo = () => {
  return (
    <AdminLayout>
      <div className="bg-gray-800 min-h-screen text-white">
        <h2 className="uppercase text-3xl text-center py-6 font-bold">User Information</h2>

        <div className="container mx-auto p-4">
          <div className="overflow-x-auto bg-gray-800 shadow-lg ">
            <table className="min-w-full ">
              <TableHeader />
              <tbody className="text-gray-300">
                {users.length ? users.map((user) => <TableRow key={user._id} user={user} />) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-400">
                      No Users Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserInfo;
