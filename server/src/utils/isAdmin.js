import { asyncHandler } from "./asyncHandler.js";

const isAdmin = asyncHandler(async(user)=>{

    if(user.role === "admin")return true;
    return false;

})

export {isAdmin}