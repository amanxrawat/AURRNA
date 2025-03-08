import {Address} from '../models/address.model.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from 'express-async-handler.js';
import { User } from '../models/user.model.js';
import ApiResponse from '../utils/ApiResponse.js';


const createAddress = asyncHandler(async (req , res )=>{
    try{
        const {user_id} = req.params
        const {fullName,mobileNumber,pinCode,locality,address,city,state,landmark,alternatePhone,addressType} = req.body;
        const addressExists = await Address.findOne({fullName,mobileNumber,pinCode,locality,address,city,state,landmark,alternatePhone,addressType});
        if(addressExists){
            throw new ApiError(400,"|| Address already exists ||");
        }
        const newAddress = new Address({
            fullName,
            mobileNumber,
            pinCode,
            locality,
            address,
            city,
            state,
            landmark,
            alternatePhone,
            addressType
        });

        const createdAddress = await newAddress.save();
        const User = await User.findById(user_id);
        User.address.push(createdAddress._id);
        await User.save();
        res.status(201).json({message:"Address created successfully",createdAddress});

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }    
})

const deleteAddress = asyncHandler(async (req , res )=>{
    try{
        const {user_id} = req.params.user_id;
        const {address_id} = req.params.address_id;
        const User = await User.findById(user_id);
        const address = await Address.findById(address_id);
        if(!address){
            throw new ApiError(404,"|| Address not found ||");
        }
        const index = User.address.indexOf(address_id);
        if(index > -1){
            User.address.splice(index,1);
        }
        await User.save();
        await Address.findByIdAndDelete(address_id);
        res.status(200).json({message:"Address deleted successfully"});
    }catch(error){   
        console.log(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
})

export {createAddress , deleteAddress}