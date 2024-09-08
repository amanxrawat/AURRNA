import express from 'express';
import cookieParser from 'cookie-Parser'
import cors from 'cors';
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());



// user routing for login ,  signup , logout 
import userRouter from "./routes/user.router.js"
app.use("/api/user", userRouter)

// product routing for creating and fetching products data
import productRouter from "./routes/product.router.js"
app.use("api/product",productRouter)

export {app}