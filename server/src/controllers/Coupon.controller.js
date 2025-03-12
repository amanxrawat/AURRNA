import { asyncHandler } from "../utils/asyncHandler.js";
import { Coupon } from "../models/Coupons.model.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createCoupon = asyncHandler(async (req, res)=>{

    try {
        const {code,discountType,discountValue,minPurchase,maxDiscount,expiryDate,usageLimit} = req.body;
        const coupon = new Coupon({
            code,
            discountType,
            discountValue,
            minPurchase,
            maxDiscount,
            expiryDate,
            usageLimit
        });
    
        const createdCoupon = await coupon.save();
        res.status(201).json(new ApiResponse(201,createdCoupon));

    } catch (error) {
        console.error(error);
        throw new ApiError(400, "Error creating coupon" + error.message);
        
    }

})

const deleteCoupon = asyncHandler(async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);
        if (!coupon) {
            throw new ApiError(404, "Coupon not found");
        }
        await coupon.remove();
        res.status(200).json(new ApiResponse(200, {}, "Coupon deleted successfully"));
    } catch (error) {
        console.error(error);
        throw new ApiError(400, "Error deleting coupon" + error.message);
    }
});

const getCouponByCode  = asyncHandler(async(req,res)=>{
    try {
        const coupon = await Coupon.findOne({code:req.params.code});
        if(!coupon){
            throw new ApiError(404,"Coupon not found");
        }
        res.status(200).json(new ApiResponse(200,coupon));
    } catch (error) {
        console.error(error);
        throw new ApiError(400, "Error getting coupon" + error.message);
    }   
});

export { createCoupon , deleteCoupon  , getCouponByCode}