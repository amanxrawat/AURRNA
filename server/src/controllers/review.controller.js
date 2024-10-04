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

export {getAllReviews}