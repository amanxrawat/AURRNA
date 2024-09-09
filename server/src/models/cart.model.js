import mongoose from "mongoose";
import { Schema } from "mongoose";

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            product_Id: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product' 
            },
            quantity: { 
                type: Number, 
                required: true, 
                default: 1 
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Cart = mongoose.model('Cart', cartSchema);
export { Cart }
