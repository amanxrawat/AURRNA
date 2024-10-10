import { useState, FormEvent, ChangeEvent } from "react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    shortDescription: "",
    longDescription: "",
    category: "",
    material:"",
    gender:"",
    stock: "",
    tags: "",
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleImageChange = (e, imageKey) => {
    if (e.target.files && e.target.files[0]) {
      setImages((prev) => ({ ...prev, [imageKey]: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can submit the formData and images here
    console.log(formData);
    console.log(images);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gradient-to-tr from-purple-900 to-purple-700 text-white">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-center">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            required
            className="w-full  px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="block mb-1 font-medium">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="shortDescription" className="block mb-1 font-medium">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            placeholder="Enter a short description"
            required
            className="w-full min-h-28 px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          ></textarea>
          <p className="text-sm text-gray-400 mt-1">
            This will be used for product previews. Max 150 characters.
          </p>
        </div>

        <div>
          <label htmlFor="longDescription" className="block mb-1 font-medium">
            Long Description
          </label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={formData.longDescription}
            onChange={handleInputChange}
            placeholder="Enter a detailed description"
            required
            className="w-full min-h-32 px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          ></textarea>
        </div>

        <div>
          <label htmlFor="category" className="block mb-1 font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleSelectChange}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Necklaces & Pendants">Necklaces & Pendants</option>
            <option value="Earrings">Earrings</option>
            <option value="Bracelets">Bracelets & Bangles</option>
            <option value="Rings">Rings</option>
            <option value="Anklets">Anklets</option>
            <option value="Brooches & pins">Brooches & Pins</option>
            <option value="Sets">Sets</option>
          </select>
        </div>
          

        <div>
          <label htmlFor="gender" className="block mb-1 font-medium">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleSelectChange}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
           
          </select>
        </div>

        <div>
          <label htmlFor="stock" className="block mb-1 font-medium">
            Stock
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleInputChange}
            placeholder="Enter stock quantity"
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block mb-1 font-medium">
            Tags
          </label>
          <input
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="Enter tags, separated by commas"
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
          />
          <p className="text-sm text-gray-400 mt-1">
            Enter tags separated by commas, e.g., "electronics, gadget, smartphone"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["image1", "image2", "image3", "image4"].map((imageKey) => (
            <div key={imageKey}>
              <label htmlFor={imageKey} className="block mb-1 font-medium">
                {imageKey.charAt(0).toUpperCase() + imageKey.slice(1)}
              </label>
              <input
                id={imageKey}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, imageKey)}
                className="w-full px-4 py-2 bg-white text-black border border-gray-600 rounded focus:ring focus:ring-indigo-500"
              />
              {images[imageKey] && (
                <p className="text-sm text-gray-400 mt-1">{images[imageKey]?.name}</p>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
