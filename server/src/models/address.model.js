import mongoose from "mongoose";
const { Schema } = mongoose;

const addressSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim:true,
        lowercase:true,
    },
    mobileNumber: {
        type: String,
        required: true,
        trim:true,
    },
    pinCode: {
        type: String,
        required: true,
        trim:true,
    },
    locality: {
        type: String,
        required: true,
        trim:true,
    },
    address: {
        type: String,
        required: true,
        trim:true,
    },
    city: {
        type: String,
        required: true,
        trim:true,
    },
    state: {
        type: String,
        required: true,
        trim:true,
    },
    landmark: {
        type: String,
        trim:true,
    },
    alternatePhone: {
        type: String,
        trim:true,
    },
    addressType: {
        type: String,
        enum: ['home', 'work'],
        default: 'home',
    },
},{timestamps:true});

const Address = mongoose.model('Address', addressSchema);