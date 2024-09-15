import {User} from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import {isAdmin} from "../utils/isAdmin.js"

const generateAccessToken = asyncHandler(async(user_id)=>{
   try {
     const user = User.findById(user_id);
     const accessToken = user.generateAccessToken();
     
     return {accessToken}

   } catch (error) {
    throw new ApiError(500,"something went wrong while creating  access token  for the user .")
   }

})

const registerUser = asyncHandler(async(req,res)=>{
    const {fullName , email , password} = req.body

    if(
        [fullName,email,password].some((field)=>field?.trim ==='')
    ){
        throw new ApiError(400,"all fiels are required")
    };

    const existingUser = await User.findOne(
        {email}
    )

    if(existingUser){
        throw new ApiError(409,"user with email or user name alread exits")
    }

    const user = User.create({
        fullName,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password "
    )

    if(!createdUser){
        throw ApiError(500,'something went wrong while registering the user')
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"user registerd Successfully")
    )


})

const loginUser = asyncHandler(async(req, res)=>{
    const {email , password} = req.body

    if([email,password].some((field)=>field==="" )){
        throw new ApiError(400 , 
            "email,userName and password is needed to login pls enter email and password"
        )
    }

    const user = await User.findOne({ email })
    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "invalid user credentials ");
    }

    const {accessToken} = await generateAccessAndRefreshTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");
    const options ={
        httpOnly:true,
        secure:true
    }

    return res.status(200).cookie("accessToken",accessToken,options)
    .json(
        new ApiResponse(200,
            {
                user:loggedInUser,accessToken
            },
            "user logged in successfully"
        )
    )


})

const logoutUser = asyncHandler(async(req,res)=>{
    
    const options ={
        httpOnly:true,
        secure:true
    }

    return res.status(200)
    .clearCookie("accessToken",options)
    .json(new ApiResponse(200,{},"user logged out successfully"))
    
})

const getAllUsers = asyncHandler(async(req, res)=>{
    const user_id = req.user._id;

    if(!user_id){
        throw new ApiError(400,"|| only Logged in admins can access the Users details ||")
    }

    const isAdminValidation = isAdmin(user_id);

    if(!isAdminValidation){
        throw new ApiError(400, "|| Cannot access the user data. You must be a admin to see User's data ||")
    }

    const users = await User.find()

    return res.status(200)
    .json(200 , users  , "|| The users data in fetched successfully ||")

})

const deleteUser = asyncHandler(async(req,res)=>{
    try {
        const userToDelete = req.params.user_id;
        const user_Id = req.user._id;
    
        const isAdminValidation = isAdmin(user_Id)
    
        if(!isAdminValidation){
            throw new ApiError(400, "|| Cannot access the user data. You must be a admin to see User's data ||")
        }
    
    
        const deletedUser = await User.findByIdAndDelete(userToDelete);
    
    
        return res.status(200)
        .json(200 , deletedUser  , "|| The user has been deleted Successfully ||")
    
    } catch (error) {
        console.log(error)
        throw new ApiError(400,"|| something went wrong while deleting the user ||")
    }

})

export {registerUser , loginUser , logoutUser , getAllUsers , deleteUser , generateAccessToken }