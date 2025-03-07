import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Review } from "../models/review.model.js";
import { Product } from "../models/product.model.js";
import { uploadImagesToCloudinary ,deleteImagesFromCloudinary } from "../utils/cloudinary.js";



const createProduct = asyncHandler( async (req, res) => {
  try {
    const { name, shortDescription, description, price, categories, tags, stock, material, size, color } = req.body;

    // Validate required fields
    if (!name || !shortDescription || !description || !price || !stock || !material || !size || !color) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Please upload at least one image" });
      }
  
      // Upload images to Cloudinary
      const imageUrls = await uploadImagesToCloudinary(req.files);

    // Create a new product
    const newProduct = new Product({
      name,
      shortDescription,
      description,
      price,
      categories: categories ? categories.split(",") : [], // Convert CSV to array
      tags: tags ? tags.split(",") : [],
      stock,
      images: imageUrls, // Store Cloudinary image URLs
      material,
      size,
      color,
    });

    // Save product to database
    await newProduct.save();

    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const productReview = asyncHandler(async(req,res)=>{
    
    // acquiring data to create a review
    const user_id = req.params.user_id
    const product_id = req.params.product_id

    const {rating, reviewTitle, reviewContent} = req.body

    if([reviewTitle,reviewContent].some((field)=>field?.trim==="")){
        throw new ApiError(400, "||  review title and review content is required to craete a review || ")
    }

    const review = await Review.create({
        user_id,
        product_id,
        rating,
        reviewTitle,
        reviewContent
    })

    
    if(!review){
        throw new ApiError(500,"|| something went wrong while uploading the user review || product-review-controller")
    }
    
    const product = await Product.findById(req.params.product_id);

    // Use the current rating or 0 if it doesn't exist
    const oldRating = product.ratings || 0; 

    // Assuming `rating` comes from `req.body.rating`
    const newRating = req.body.rating; 
    
    // Calculate the new average rating
    const updatedRating = (oldRating + newRating) / 2;
    
    // Update the product's ratings field
    product.ratings = updatedRating;

    product.numReviews ++;

    await product.save()

    return res.status(200)
    .json(new ApiResponse(200,review , "|| user review created successfully ||"));

})


const check = asyncHandler(async(req,res)=>{
    try {
        res.send("|| checking the product || ")
    } catch (error) {
        console.error(error);
        throw new ApiError(500,"|| server error || check controller || ")

    }
})


// const updateProduct = asyncHandler(async (req, res) => {
//     try {
//         const { name, shortDescription, description, price, categories, tags, stock } = req.body;
//         const { product_id } = req.params;

//         // Find the product by ID
//         const product = await Product.findById(product_id);
//         if (!product) {
//             throw new ApiError(404, "|| Product not found ||");
//         }

//         // Validate the categories and tags as arrays of strings
//         if (categories && (!Array.isArray(categories) || categories.some(cat => typeof cat !== 'string'))) {
//             throw new ApiError(400, "|| Categories must be an array of strings ||");
//         }
//         if (tags && (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string'))) {
//             throw new ApiError(400, "|| Tags must be an array of strings ||");
//         }

//         // Check if images are being updated
//         let productImage1, productImage2, productImage3, productImage4;
//         const productImage1LocalPath = req.files?.productImage1 ? req.files.productImage1[0]?.path : null;
//         const productImage2LocalPath = req.files?.productImage2 ? req.files.productImage2[0]?.path : null;
//         const productImage3LocalPath = req.files?.productImage3 ? req.files.productImage3[0]?.path : null;
//         const productImage4LocalPath = req.files?.productImage4 ? req.files.productImage4[0]?.path : null;

//         if (productImage1LocalPath) productImage1 = await uploadOnCloudinary(productImage1LocalPath);
//         if (productImage2LocalPath) productImage2 = await uploadOnCloudinary(productImage2LocalPath);
//         if (productImage3LocalPath) productImage3 = await uploadOnCloudinary(productImage3LocalPath);
//         if (productImage4LocalPath) productImage4 = await uploadOnCloudinary(productImage4LocalPath);

//         // Update the product fields
//         product.name = name || product.name;
//         product.shortDescription = shortDescription || product.shortDescription;
//         product.description = description || product.description;
//         product.price = price || product.price;
//         product.categories = categories || product.categories;
//         product.tags = tags || product.tags;
//         product.stock = stock !== undefined ? stock : product.stock;

//         // Update images if they were provided
//         if (productImage1) product.productImage1 = productImage1;
//         if (productImage2) product.productImage2 = productImage2;
//         if (productImage3) product.productImage3 = productImage3;
//         if (productImage4) product.productImage4 = productImage4;

//         // Save the updated product
//         await product.save();

//         res.status(200)
//             .json(new ApiResponse(200, product, "|| Product updated successfully ||"));
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: ' || Server error, could not update product ||' });
//     }
// });

const updateProduct = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, shortDescription, description, price, categories, tags, stock, material, size, color } = req.body;
  
      // Find the product by ID
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Validate required fields
      if (!name || !shortDescription || !description || !price || !stock || !material || !size || !color) {
        return res.status(400).json({ message: "Please fill all required fields" });
      }
  
      // Update product details (excluding images)
      product.name = name;
      product.shortDescription = shortDescription;
      product.description = description;
      product.price = price;
      product.categories = categories ? categories.split(",") : [];
      product.tags = tags ? tags.split(",") : [];
      product.stock = stock;
      product.material = material;
      product.size = size;
      product.color = color;
  
      // Save updated product
      await product.save();
  
      res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });


// const deleteProduct = asyncHandler(async (req, res) => {
//     try {
//         const { product_id } = req.params;

//         // Find the product by ID
//         const product = await Product.findById(product_id);
//         if (!product) {
//             throw new ApiError(404, "|| Product not found ||");
//         }

//         // Optionally, delete images from Cloudinary (if stored there)
//         // if (product.productImage1) await deleteFromCloudinary(product.productImage1);
//         // if (product.productImage2) await deleteFromCloudinary(product.productImage2);
//         // if (product.productImage3) await deleteFromCloudinary(product.productImage3);
//         // if (product.productImage4) await deleteFromCloudinary(product.productImage4);

//         // Remove the product from the database
//         await product.remove();

//         // Send response
//         res.status(200)
//             .json(new ApiResponse(200, null, "|| Product deleted successfully ||"));
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error, could not delete product' });
//     }
// });

const deleteProduct = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the product by ID
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      // Delete product images from Cloudinary
      if (product.images.length > 0) {
        await deleteImagesFromCloudinary(product.images);
      }
  
      // Delete the product from the database
      await Product.findByIdAndDelete(id);
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();

        // Send response
        res.status(200).json({
            status: 200,
            data: products,
            message: "|| All products fetched successfully ||"
        });
    } catch (error) {
        console.error(error);
        throw new ApiError(400,'|| Server error, could not retrieve products ||')
    }
});


const getSingleProduct = asyncHandler(async (req, res) => {
    try {
        // Extract product_id from params
        const { product_id } = req.params;

        // Find product by ID
        const product = await Product.findById(product_id);

        // If product not found, return 404
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "Product not found",
            });
        }

        // Send successful response
        return res.status(200).json({
            status: 200,
            data: product,
            message: "Product details fetched successfully",
        });

    } catch (error) {
        console.error("Error in getSingleProduct:", error);

        // Return error response
        return res.status(500).json({
            status: 500,
            message: "Server error in getSingleProduct controller",
        });
    }
});


// const getProductsByCategory = asyncHandler(async (req, res) => {
//     try {
//         const { category } = req.params;

//         const products = await Product.aggregate([
//             {
//                 $match: {
//                     category: { $in: [category] }
//                 }
//             },
//             {
//                 $sort: { createdAt: -1 } // Sort by most recent
//             }
//         ]);

//         if (products.length === 0) {
//             return res.status(404).json(new ApiResponse(404,[],
//              "|| No products found for the given category ||"
//         ));
//         }

//         return res.status(200).json(new ApiResponse(
//             200,
//             products,
//             " || list of product that match the category || "
//         ));
//     } catch (error) {
//         console.error(error);
//         throw new ApiError(500,"|| server error || ")
//     }
// });

const getProductsByCategory = asyncHandler(async (req, res) => {
    try {
      const { category } = req.params;
  
      // Fetch products matching the category
      const products = await Product.find({ categories: category }).sort({ createdAt: -1 });
  
      if (products.length === 0) {
        return res.status(404).json(new ApiResponse(404, [], "|| No products found for the given category ||"));
      }
  
      return res.status(200).json(new ApiResponse(200, products, "|| List of products that match the category ||"));
    } catch (error) {
      console.error(error);
      return res.status(500).json(new ApiError(500, "|| Server error ||"));
    }
  });

// const getProductsByTag = asyncHandler(async (req, res) => {
//     try {
//         const { tag } = req.params;

//         const products = await Product.aggregate([
//             {
//                 $match: {
//                     tags: { $in: [tag] }
//                 }
//             },
//             {
//                 $sort: { createdAt: -1 } // Sort by most recent
//             }
//         ]);

//         if (products.length === 0) {
//             return res.status(404).json(new ApiResponse(404,[],
//              "|| No products found for the given category ||"
//         ));
//         }

//         return res.status(200).json(new ApiResponse(
//             200,
//             products,
//             " || list of product that match the category || "
//         ));
//     } catch (error) {
//         console.error(error);
//         throw new ApiError(500,"|| server error || ")
//     }
// });


const getProductsByTag = asyncHandler(async (req, res) => {
    try {
      const { tag } = req.params;
  
      // Fetch products matching the tag
      const products = await Product.find({ tags: tag }).sort({ createdAt: -1 });
  
      if (products.length === 0) {
        return res.status(404).json(new ApiResponse(404, [], "|| No products found for the given tag ||"));
      }
  
      return res.status(200).json(new ApiResponse(200, products, "|| List of products that match the tag ||"));
    } catch (error) {
      console.error(error);
      return res.status(500).json(new ApiError(500, "|| Server error ||"));
    }
  });

export { 
        productReview,
        createProduct,
        updateProduct,
        deleteProduct,
        getAllProducts,
        getSingleProduct,
        getProductsByCategory,
        getProductsByTag,
        check

    } 