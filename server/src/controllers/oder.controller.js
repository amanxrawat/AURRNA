import asyncHandler from 'express-async-handler';
import { Order } from '../models/Order.js';
import { Product } from '../models/Product.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import { isAdmin } from '../utils/isAdmin.js';
import { User } from '../models/user.model.js';


// const createOrder = asyncHandler(async (req, res) => {
//     try {
//         const { orderItems, shippingAddress, paymentMethod } = req.body;

//         if (!orderItems || orderItems.length === 0) {
//             throw new ApiError(400, "|| No order items provided ||");
//         }
//         if (!shippingAddress || !paymentMethod) {
//             throw new ApiError(400, "|| Shipping address and payment method are required ||");
//         }

//         let totalPrice = 0;

//         for (const item of orderItems) {
//             const product = await Product.findById(item.productId);
//             if (!product) {
//                 throw new ApiError(404, `|| Product with ID ${item.productId} not found ||`);
//             }
//             if (item.quantity > product.stock) {
//                 throw new ApiError(400, `|| Insufficient stock for product ${product.name} ||`);
//             }
            
//             item.price = product.price; 
//             totalPrice += item.quantity * item.price;
//         }

//         // Create the order
//         const order = new Order({
//             user: req.user._id,
//             orderItems: orderItems.map(item => ({
//                 productId: item.productId,
//                 quantity: item.quantity,
//                 price: item.price
//             })),
//             shippingAddress,
//             paymentMethod,
//             totalPrice,
//         });

//         // Save the order
//         const createdOrder_id = createOrder._id;
//         const createdOrder = await order.save();

//         // reduce the stock of each product ordered
//         for (const item of orderItems) {
//             const product = await Product.findById(item.productId);
//             product.stock -= item.quantity;
//             await product.save();
//         }

//         // add the orderid in the user's orders field
//         const user = req.user
//         user.orders = [...user.orders, createdOrder_id];
//         await user.save()


//         return res.status(201).json(new ApiResponse(201, createdOrder, "|| Order created successfully ||"));
//     } catch (error) {
//         console.error(error);
//         throw new ApiError(400, "|| Error creating order || " + error.message);
//     }
// });

const createOrder = asyncHandler(async (req, res) => {
    try {
        const { user_id, orderItems, shippingAddress, paymentMethod, totalPrice ,product_desc ,coupon_code } = req.body;

        // Create Order in Database
        const newOrder = new Order({
            user_id,
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            orderStatus: "pending",
        });

        await newOrder.save();

        // Prepare payload for Delhivery API
        const shipmentPayload = {
            pickup_location: {
                pin: "110001",
                add: "Your Warehouse Address",
                phone: "9876543210",
                name: "Your Store Name",
            },
            shipments: [
                {
                    name: shippingAddress.name,
                    pin: shippingAddress.postalCode,
                    phone: shippingAddress.phone,
                    add: `${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.state}, ${shippingAddress.country}`,
                    order: newOrder._id.toString(),
                    payment_mode: paymentMethod === "COD" ? "COD" : "Prepaid",
                    products_desc: product_desc,
                    total_amount: totalPrice,
                },
            ],
        };

        // Call Delhivery API
        const response = await axios.post(
            `https://track.delhivery.com/api/cmu/create.json?token=${DELHIVERY_API_TOKEN}`,
            shipmentPayload,
            { 
                headers,
                timeout: 10000 
            }
        );

        if (!response.data.success || !response.data.packages?.length) {
            throw new ApiError(400, "Failed to book shipment", response.data);
        }

        const waybill = response.data.packages[0].waybill;

        const packingSlipUrl = `${DELHIVERY_BASE_URL}/api/p/packing_slip?wbns=${waybill}&pdf=true`;

        const pdfResponse = await axios.get(packingSlipUrl, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${DELHIVERY_API_TOKEN}`,
            },
        });

        if (pdfResponse.status !== 200) {
            throw new ApiError(400, "Failed to fetch packing slip", pdfResponse.data);
        }


        newOrder.waybill = waybill;
        newOrder.shippingLabel = packingSlipUrl;
        newOrder.orderStatus = "shipped";



        await newOrder.save();

        await User.findByIdAndUpdate(user_id, { $push: { orders: newOrder._id } });
        await User.findByIdAndUpdate(user_id, { $push: { coupons: coupon_code } });
        
        return res.status(201).json(new ApiResponse(201, newOrder, "Order created & shipment booked!"));


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

const getAllOrders = asyncHandler(async(req,res)=>{
    const user_id = req.user._id;

    const isAdminValidation = isAdmin(user_id);

    if(!isAdminValidation){
        throw new ApiError(400,"|| The user is not a admin. Cannot access the data unless you are a admin ||")
    }


    const allOrders = Order.find();
    return res.status(200).json(new ApiResponse(200,allOrders ,
        "|| all orders are fectched successfully ||"
    ))
})

const getSingleOrderDetails = asyncHandler(async(req,res)=>{
    try {
        const order_id  = req.params
    
        const orderDetials = await Order.findById(order_id);

        if(!orderDetials){
            throw new ApiError(400,"|| cannot get the order details ||")
        }
    
    } catch (error) {
        console.error(error);
        throw new ApiError(400, "|| Error fetching order details || " + error.message);
    }

})

const getUserOrders = asyncHandler(async(req,res)=>{
    try {
        const user_id = req.params.user_id
        const user = await User.findById(user_id).populate({
            path: 'orders', 
            model: 'Order', 
        });
    
        if (!user) {
            throw new ApiError(404, "|| User not found ||");
        }
    
        const userOrders = user.orders;
    
            return res.status(200)
                .json(new ApiResponse(200, userOrders,"|| User orders fetched successfully ||"))
    } catch (error) {
        console.error(error);
        throw new ApiError(500, "|| Error fetching user orders || " + error.message);
    }
})


export { createOrder, getAllOrders, getSingleOrderDetails , getUserOrders };
