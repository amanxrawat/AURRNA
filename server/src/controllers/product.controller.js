import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { Review } from "../models/review.model";
import { Product } from "../models/product.model";
import { uploadOnCloudinary , deleteFromCloudinary } from "../utils/cloudinary.js";


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
        throw new ApiError(500,"something went wrong while uploading the user review || product-review-controller")
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
    .json(new ApiResponse(200,review , " user review created successfully "));

})

const createProduct = asyncHandler(async(req,res)=>{
    try {
        const { name,shortDescription,  description, price, categories, tags, stock } = req.body;

        if (!name || !price || !categories || stock === undefined) {
            throw new ApiError(400,"the product fiels cannot be empty || error in creating new product ")
        }

        if (!Array.isArray(categories) || categories.some(cat => typeof cat !== 'string')) {
            throw new ApiError(400," the categories fields is a array of string || didn't received a array ")
        }
        if (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string')) {
            throw new ApiError(400," the tags fields is a array of string || didn't received a array ")
        }

        const productImage1LocalPath = req.files?.productImage1[0]?.path;
        const productImage2LocalPath = req.files?.productImage2[0]?.path;
        const productImage3LocalPath = req.files?.productImage3[0]?.path;
        const productImage4LocalPath = req.files?.productImage4[0]?.path;


        const productImage1 = await uploadOnCloudinary(productImage1LocalPath);
        const productImage2 = await uploadOnCloudinary(productImage2LocalPath);
        const productImage3 = await uploadOnCloudinary(productImage3LocalPath);
        const productImage4 = await uploadOnCloudinary(productImage4LocalPath);
        
        const newProduct = await Product.create({
            name,
            shortDescription,
            description,
            price,
            categories,  // Array of category strings
            tags,
            stock,
            productImage1,
            productImage2,
            productImage3,
            productImage4
        });

    
        res.status(200)
        .json(new ApiResponse(200,newProduct , " the product has been created successfully "))
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, could not create product' });
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    try {
        const { name, shortDescription, description, price, categories, tags, stock } = req.body;
        const { product_id } = req.params;

        // Find the product by ID
        const product = await Product.findById(product_id);
        if (!product) {
            throw new ApiError(404, "|| Product not found ||");
        }

        // Validate the categories and tags as arrays of strings
        if (categories && (!Array.isArray(categories) || categories.some(cat => typeof cat !== 'string'))) {
            throw new ApiError(400, "|| Categories must be an array of strings ||");
        }
        if (tags && (!Array.isArray(tags) || tags.some(tag => typeof tag !== 'string'))) {
            throw new ApiError(400, "|| Tags must be an array of strings ||");
        }

        // Check if images are being updated
        let productImage1, productImage2, productImage3, productImage4;
        const productImage1LocalPath = req.files?.productImage1 ? req.files.productImage1[0]?.path : null;
        const productImage2LocalPath = req.files?.productImage2 ? req.files.productImage2[0]?.path : null;
        const productImage3LocalPath = req.files?.productImage3 ? req.files.productImage3[0]?.path : null;
        const productImage4LocalPath = req.files?.productImage4 ? req.files.productImage4[0]?.path : null;

        if (productImage1LocalPath) productImage1 = await uploadOnCloudinary(productImage1LocalPath);
        if (productImage2LocalPath) productImage2 = await uploadOnCloudinary(productImage2LocalPath);
        if (productImage3LocalPath) productImage3 = await uploadOnCloudinary(productImage3LocalPath);
        if (productImage4LocalPath) productImage4 = await uploadOnCloudinary(productImage4LocalPath);

        // Update the product fields
        product.name = name || product.name;
        product.shortDescription = shortDescription || product.shortDescription;
        product.description = description || product.description;
        product.price = price || product.price;
        product.categories = categories || product.categories;
        product.tags = tags || product.tags;
        product.stock = stock !== undefined ? stock : product.stock;

        // Update images if they were provided
        if (productImage1) product.productImage1 = productImage1;
        if (productImage2) product.productImage2 = productImage2;
        if (productImage3) product.productImage3 = productImage3;
        if (productImage4) product.productImage4 = productImage4;

        // Save the updated product
        await product.save();

        res.status(200)
            .json(new ApiResponse(200, product, "|| Product updated successfully ||"));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, could not update product' });
    }
});

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { product_id } = req.params;

        // Find the product by ID
        const product = await Product.findById(product_id);
        if (!product) {
            throw new ApiError(404, "|| Product not found ||");
        }

        // Optionally, delete images from Cloudinary (if stored there)
        if (product.productImage1) await deleteFromCloudinary(product.productImage1);
        if (product.productImage2) await deleteFromCloudinary(product.productImage2);
        if (product.productImage3) await deleteFromCloudinary(product.productImage3);
        if (product.productImage4) await deleteFromCloudinary(product.productImage4);

        // Remove the product from the database
        await product.remove();

        // Send response
        res.status(200)
            .json(new ApiResponse(200, null, "|| Product deleted successfully ||"));
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, could not delete product' });
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
        throw new ApiError(400,'|| Server error, could not retrieve products ||'+error.message)
    }
});

const getSingleProduct = asyncHandler(async(req,res)=>{
    try{
        const product_id = req.params.product_id;
        const product = Product.findById(product_id)

        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "|| Product not found ||"
            });
        }

        return res.status(400)
        .json(200,product,"|| product details fetched successfully  ||")

    }catch(error){
        console.error(error);
        throw new ApiError(500," ||server error || getSingleProduct controller || "+error.message)
    }
})




export { productReview, createProduct , updateProduct , deleteProduct , getAllProducts , getSingleProduct} 