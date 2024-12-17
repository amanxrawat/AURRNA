import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import axios from 'axios'

const checkPindcodeAvalibility = asyncHandler(async (req, res) => {
    try {
        const pincode = req.params.pincode
        
        // testing pincode
        // const pincode = 110042;

        const key = process.env.DELHIVERY_API_KEY;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + key
        }

        axios.get(`https://track.delhivery.com/c/api/pin-codes/json/?filter_codes=${pincode}`, { headers })
            .then(Response => {

                // console.log(typeof(Response.data.delivery_codes))

                if (Object.keys(Response.data.delivery_codes).length === 0) {
                    console.log("false");
                    return res.status(201).json( new ApiResponse(201 , false , "The pincode is not servable "))
                } else {
                    console.log("true");
                    return res.status(200).json(new ApiResponse(200,true , " The pincode is servable "))
                }

            })
            .catch(error => new ApiError(400,"|| something went wrong during the api call to the delhivery server. The error is ||"+error))

        // res.send("working just fine");
    } catch (error) {
         console.error(error);
                throw new ApiError(400, "|| Error checking Pincode servability  || " + error.message);
    }

})


export { checkPindcodeAvalibility };