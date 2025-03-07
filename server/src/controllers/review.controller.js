import { Review } from "../models/review.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllReviews = asyncHandler(async(req,res)=>{
    const reviews = await Review.find();

    if(!reviews){
        throw new ApiError(404,"|| Something went wrong in fectching the reviews ||  ")
    }

    return res.status(200)
    .json(new ApiResponse(200,reviews,
        " || reviews fetched successfully || "
    ))
})

const deleteReview = asyncHandler(async(req,res)=>{
    const reviewId = req.params.review_Id;

    const review = await Review.findById(reviewId);

    if(!review){
        throw new ApiError(404,"|| review not found ||")
    }

    await review.remove();

    return res.status(200)
    .json(new ApiResponse(200,review,
        "|| review deleted successfully ||"
    ))

})


const getProductReview = asyncHandler(async(req,res)=>{
    const productId = req.params.product_Id;

    const reviews = await Review.find({productId:productId});

    return res.status(200)
    .json(new ApiResponse(200,reviews,
        "|| reviews fetched successfully ||"
    ))

});

const getHighRatedReviews = asyncHandler(async (req, res) => {
    try {
      const reviews = await Review.find({ rating: { $gte: 4 } }).sort({ createdAt: -1 });
  
      if (reviews.length === 0) {
        return res.status(404).json(new ApiResponse(404, [], "|| No reviews found with a rating of 4 or 5 ||"));
      }
  
      return res.status(200).json(new ApiResponse(200, reviews, "|| List of reviews with a rating of 4 or 5 ||"));
    } catch (error) {
      console.error(error);
      return res.status(500).json(new ApiError(500, "|| Server error ||"));
    }
  });

export {getAllReviews , deleteReview , getProductReview , getHighRatedReviews}