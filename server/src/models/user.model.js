import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim:true,
        lowercase:true,
    },

    address:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
            default: ""
        }
    ],

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer',
    },

    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order'  , default:""}],

    coupons: [{ type: String ,
         default:""}],

},{timestamps:true});


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);

}

userSchema.methods.generateAccessToken = async function(){
    return await jsonwebtoken.sign(
        {
            _id:this._id,
            email:this.email,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
} 



const User = mongoose.model('User', userSchema);
export { User }
