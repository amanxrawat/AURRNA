import { Cart } from "../models/cart.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { Product } from "../models/product.model";

const addToCart = asyncHandler(async(req,res)=>{
    const user_Id = req.user._id;
    const product_id = req.params.product_id;
    const quantity = req.params.quantity;



    const product = await Product.findById(product_id);
    if (!product) {
        throw new ApiError(400,"|| the product does not exist ||")
    }


    let cart = await Cart.findOne({ user_Id });
    if (!cart) {
        cart = new Cart({ user_Id, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(item => item.product_Id.toString() === product_id);

    if (existingItemIndex !== -1) {    
        cart.items[existingItemIndex].quantity += quantity;
    } else {
        cart.items.push({
            product_id,
            quantity
        });
    }

    await cart.save();

    return res.status(200)
    .json(new ApiResponse(200,cart,"|| item added successfully to the cart ||"))


})

const removeProductFromCart = asyncHandler(async(req,res)=>{
    const product_Id = req.params.product_Id
    
    if(!product_Id){
        throw new ApiError(400,"|| the params for the product id is missing ||")
    }

    const cart = await Cart.findOne({user:req.user._id});

    if(!cart){
        throw new ApiError(400,"|| Cannot find the user's cart || removeProductFromCart contorller ||")
    }


    const existingItemIndex = cart.items.findIndex(item => item.product_Id.toString() === product_id);
    
    if (existingItemIndex === -1) {
        // If the product doesn't exist in the cart, throw an error
        throw new ApiError(404, "|| Product not found in cart ||");
    } else {
        // Remove the product from the cart
        cart.items.splice(existingItemIndex, 1);
    }

    return res.status(200)
    .json(new ApiResponse(200 , cart , "product deleted successfully "))


})



export {addToCart, removeProductFromCart}   


