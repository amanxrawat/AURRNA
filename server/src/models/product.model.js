import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    shortDescription: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    category:[String], // a array containing the list of all the category the product belongs to

    tags:[String],  //tags like fresly arrived , most favrouite etc
    
    stock: {
        type: Number,
        required: true,
    },

    productImage1: {
        type: String,
    },
    productImage2: {
        type: String,
    },
    productImage3: {
        type: String,
    },
    productImage4: {
        type: String,
    },

    ratings: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);
export { Product }
