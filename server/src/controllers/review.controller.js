import { Review } from "../models/review.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

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