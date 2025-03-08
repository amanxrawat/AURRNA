import mongoose from "mongoose";
import { Schema } from "mongoose";

const CouponsSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    }, // Coupon code (e.g., "SAVE10")
    discountType:
    {
        type: String,
        enum: ["percentage", "fixed"],
        required: true
    },

    discountValue:
    {
        type: Number,
        required: true
    }, // Discount amount
    minPurchase:
    {
        type: Number,
        default: 0
    },
    maxDiscount:
    {
        type: Number
    },
    expiryDate:
    {
        type: Date,
        required: true
    }, 
    usageLimit:
    {
        type: Number,
        default: 1
    },
}, { timestamps: true });

const Coupon = mongoose.model('Coupon', CouponsSchema);
export { Coupon };