import React from 'react'
import AdminLayout from '../layout/AdminLayout'

import { products } from "../../constants/sampleData";

import ModalExample from '../shared/Modal';


const TableHeader = () => (
  <thead className="bg-gray-700 text-white uppercase">
    <tr>
      {["Name", "Price", "Stock", "Categories", "Tags", "Ratings", "Material", "Color", "Images","Edit"].map((header) => (
        <th key={header} className="px-4 py-2 border text-center">{header}</th>
      ))}
    </tr>
  </thead>
);

const TableRow = ({ product }) => (
  <tr key={product._id} className=" transition duration-200">
    <td className="px-4 py-2 border text-center">{product.name || "N/A"}</td>
    <td className="px-4 py-2 border text-center">₹{product.price.toLocaleString()}</td>
    <td className="px-4 py-2 border text-center">{product.stock > 0 ? product.stock : "Out of Stock"}</td>
    <td className="px-4 py-2 border text-center">{product.categories.join(", ") || "N/A"}</td>
    <td className="px-4 py-2 border text-center">{product.tags.join(", ") || "No Tags"}</td>
    <td className="px-4 py-2 border text-center">{product.ratings}/5</td>
    <td className="px-4 py-2 border text-center">{product.material || "N/A"}</td>
    <td className="px-4 py-2 border text-center">{product.color || "N/A"}</td>
    <td className="px-4 py-2 border text-center flex flex-wrap justify-center gap-2">
      {product.images.slice(0, 4).map((img, index) => (
        <img key={index} src={img} alt={`Product ${index + 1}`} className="w-12 h-12 rounded-md shadow-md" />
      ))}
    </td>
    <td className="px-4 py-2 border border-white text-center"><ModalExample/></td>
  </tr>
);

const ProductTable = () => {
  return (
      <div className="bg-dark  text-white">

        <div className="container mx-auto p-4">
          <div className="overflow-x-auto bg-gray-800 shadow-lg ">
            <table className="min-w-full border border-gray-600">
              <TableHeader />
              <tbody className="text-gray-300">
                {products.length ? products.map((product) => <TableRow key={product._id} product={product} />) : (
                  <tr>
                    <td colSpan="9" className="text-center py-4 text-gray-400">
                      No Products Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

const ManageProduct = () => {
  return (
    <AdminLayout>
      <div className='bg-dark min-h-screen'>
      <h2 className="uppercase text-3xl text-center text-white py-6 font-bold">Product Information</h2>
        
      {/* List of all products */}
      <p className='text-2xl text-white py-2 px-4'>Products</p>
      <ProductTable/>


      


      {/* Modal for changing product */}
      
      </div>
    </AdminLayout>
  )
}

export default ManageProduct