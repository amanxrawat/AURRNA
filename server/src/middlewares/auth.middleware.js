import  JsonWebToken  from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.model";

export const verifyJWT = asyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accesToken ||req.header('Authorization')?.replace("Bearer ","")
    
        if(!token){
            throw new ApiError(401,"unauthorized request");
        }
    
        const decodedInfo = JsonWebToken.verify(token,process.env.ACCESS_TOKEN_SECRET)
        
        const user = await User.findById(decodedInfo?._id).select("-password")
    
        if(!user){
            throw new ApiError(401, " invalid access token ")
        }
    
        req.user = user;
        next();
        
    } catch (error) {
        throw new ApiError(401, error?.message||"invalid access token")
    }

})