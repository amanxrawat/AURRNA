import mongoose from 'mongoose'
import { Schema } from 'mongoose'
const reviewSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default:'Guest-User'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default:''
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    reviewTitle: {
        type: String,
        required: true,
    },
    reviewContent: {
        type: String,
        required: true
    }

}, { timestamps: true })

const Review = mongoose.model('Review', reviewSchema)
export { Review }