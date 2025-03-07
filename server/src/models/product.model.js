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

    categories:[String], // a array containing the list of all the category the product belongs to

    tags:{
        type: [String],
    },  //tags like fresly arrived , most favrouite etc
    
    stock: {
        type: Number,
        required: true,
    },


    images: {
        type: [String],
        // required: true,
        validate: {
            validator: (v) => v.length <= 6,
            message: "Maximum six images allowed",
          },
    },

    ratings: {
        type: Number,
        default: 0,
    },

    material: {
        type: String,
        required: true,
    },  

    size: {
        type: String,
        required: true,
    },  

    color: {
        type: String,
        required: true,
    },
    
    numReviews: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});

const Product = mongoose.model('Product', productSchema);
export { Product }
