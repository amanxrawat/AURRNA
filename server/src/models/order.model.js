import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderItems: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid'],
        default: 'pending',
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'],
        default: 'pending',
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    waybill: {
        type: String, // Waybill should be a string
        required: true,
    },
    shippingLabel: {
        type: String, 
        required: false,
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export { Order };


