import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { Review } from "../models/review.model";
import { Product } from "../models/product.model";
import { uploadOnCloudinary } from "../utils/cloudinary";


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



export { productReview, createProduct}