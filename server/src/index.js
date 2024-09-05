import dotenv from 'dotenv'
import {app} from './app.js'
import { connectDB } from './db/index.js'

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log('error in starting the app in index.js || ',error);
        throw error;
    })

    app.listen(process.env.PORT,()=>{
        console.log(`sever is running at port :${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.log("Mongo DB failed to connect ",err);
})

