import { Cart } from "../models/cart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";

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

const getUserCart = asyncHandler(async(req,res)=>{
    try {
        const user_id = req.user._id
    
        if(!user_id){
            throw new ApiError(500 , "|| the userid could not be accessed  ||")
        }
    
        const userCart = await  Cart.aggregate([
            {
                $match : { user: mongoose.Types.ObjectId(user_id) }
    
            },
            {
                $lookup: { // Optionally populate the product details for each cart item
                    from: 'products',
                    localField: 'items.productId',
                    foreignField: '_id',
                    as: 'productDetails'
                }
            }
        ])

        if (!userCart || userCart.length === 0) {
            return res.status(404).json(new ApiResponse(404, null, "|| No cart found for the user ||"));
        }
    
        return res.status(200)
        .json(new ApiResponse(200,userCart , "|| user cart fectch succefully  ||"))
    } catch (error) {
        console.log(error);
        throw new ApiError(400,"|| cannot get the users cart detials ||")
    }
})

const clearUserCart = asyncHandler(async(req , res )=>{
    try {
        const user_id = req.user._id;
    
        if(!user_id){
            throw new ApiError(500 , "|| the userid could not be accessed  ||")
        }
    
        const deletedItems = await Cart.deleteOne({ user: user_id });
        
        if (deletedItems.deletedCount === 0) {
            return res.status(404)
                .json(new ApiResponse(404, null, "|| No cart found for the user ||"));
        }
    
        return res.status(200)
            .json(new ApiResponse(200,deletedItems , "|| user cart cleared succefully  ||"))
    
    } catch (error) {
        console.log(error);
        throw new ApiError(400,"|| cannot clear the uer cart ||")
    }

})

export {addToCart, removeProductFromCart, getUserCart , clearUserCart}   


