import { asyncHandler } from "./asyncHandler";

const isAdmin = asyncHandler(async(user)=>{

    if(user.role === "admin")return true;
    return false;

})

export {isAdmin}