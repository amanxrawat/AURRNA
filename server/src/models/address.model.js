import mongoose from "mongoose";
const { Schema } = mongoose;


const addressSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim:true,
        lowercase:true,
    },
    phone: {
        type: String,
        required: true,
        trim:true,
    },
    postalCode: {
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
    
    alternatePhone: {
        type: String,
        trim:true,
        required: false,
    },

    addressType: {
        type: String,
        enum: ['home', 'work'],
        default: 'home',
    },
},{timestamps:true});

const Address = mongoose.model('Address', addressSchema);

export { Address };