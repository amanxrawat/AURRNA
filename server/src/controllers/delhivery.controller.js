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


const checkPincodeAvailability2 = asyncHandler(async (req, res) => {
    try {
        const { pincode } = req.params;
        const key = process.env.DELHIVERY_API_KEY;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${key}`
        };

        // Using proper async/await syntax instead of .then()
        const response = await axios.get(
            `https://track.delhivery.com/c/api/pin-codes/json/?filter_codes=${pincode}`,
            { headers }
        );

        // Ensure the response structure matches what Delhivery API returns
        if (!response.data?.delivery_codes || 
            Object.keys(response.data.delivery_codes).length === 0) {
            return res
                .status(200)
                .json(new ApiResponse(200, false, "Pincode not serviceable"));
        }

        return res
            .status(200)
            .json(new ApiResponse(200, true, "Pincode is serviceable"));

    } catch (error) {
        
        if (error.response) {
            // The request was made and the server responded with a status code
            throw new ApiError(
                error.response.status, 
                `Delhivery API Error: ${error.response.data?.message || 'Unknown error'}`
            );
        }
        
        throw new ApiError(
            500, 
            `Pincode check failed: ${error.message}`
        );
    }
});


const createClientWarehouse = asyncHandler(async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            city,
            country,
            pin,
            return_address,
            return_pin,
            return_city,
            return_state,
            return_country
        } = req.body;

        const apiKey = process.env.DELHIVERY_API_KEY;

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token ${apiKey}`
        };

        const payload = {
            name,
            email,
            phone,
            address,
            city,
            country,
            pin,
            return_address,
            return_pin,
            return_city,
            return_state,
            return_country
        };

        const response = await axios.post(
            'https://staging-express.delhivery.com/api/backend/clientwarehouse/create/',
            payload,
            { 
                headers,
                timeout: 10000 // 10 seconds timeout
            }
        );

        // Check if Delhivery API responded successfully
        if (response.data && response.data.success) {
            return res
                .status(201)
                .json(new ApiResponse(201, response.data, "Warehouse created successfully"));
        }

        throw new ApiError(400, response.data?.error || 'Failed to create warehouse');

    } catch (error) {
        // Handle Axios-specific errors
        if (error.response) {
            throw new ApiError(
                error.response.status,
                `Delhivery API Error: ${error.response.data?.error || error.message}`
            );
        }
        
        throw new ApiError(500, `Warehouse creation failed: ${error.message}`);
    }
});


// const generateWaybills = asyncHandler(async (req, res) => {
//     try {
//         const { count = 1 } = req.query; // Get count from query params
//         const apiKey = process.env.DELHIVERY_API_KEY;

//         const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${apiKey}`
//         };

//         const response = await axios.get(
//             `https://staging-express.delhivery.com/waybill/api/bulk/json/?count=${count}`,
//             { 
//                 headers,
//                 timeout: 10000 // 10 seconds timeout
//             }
//         );

//         // Validate response structure
//         if (!response.data?.waybills || !Array.isArray(response.data.waybills)) {
//             throw new ApiError(500, 'Invalid response structure from Delhivery API');
//         }

//         return res
//             .status(200)
//             .json(new ApiResponse(200, response.data.waybills, 'Waybills generated successfully'));

//     } catch (error) {
//         // Handle Axios-specific errors
//         if (error.response) {
//             throw new ApiError(
//                 error.response.status,
//                 `Delhivery API Error: ${error.response.data?.error || error.message}`
//             );
//         }
        
//         throw new ApiError(500, `Waybill generation failed: ${error.message}`);
//     }
// });

const generateWaybill = asyncHandler(async (req, res) => {
    try {
        const key = process.env.DELHIVERY_API_KEY;


        const headers = {
            'Authorization': `Token ${key}`
        };

        // Construct the URL
        const url = 'https://track.delhivery.com/waybill/api/fetch/json/';

        // Making the API request
        const response = await axios.get(url, { headers });

        // Validate response
        if (!response.data || Object.keys(response.data).length === 0) {
            return res
                .status(404)
                .json(new ApiResponse(404, false, "No waybill data available"));
        }

        return res
            .status(200)
            .json(new ApiResponse(200, true, "Waybill fetched successfully", response.data));

    } catch (error) {
        if (error.response) {
            throw new ApiError(
                error.response.status, 
                `Delhivery API Error: ${error.response.data?.message || 'Unknown error'}`
            );
        }

        throw new ApiError(
            500, 
            `Waybill fetch failed: ${error.message}`
        );
    }
});

// create CMU need to be done again and also the reverse flow of the cmu needs to be done. change the middleware also accordingly
const createCMU = asyncHandler(async (req, res) => {
    try {
        const { shipments, pickup_location } = req.body;
        const apiKey = process.env.DELHIVERY_API_KEY;

        // Validate required fields
        if (!Array.isArray(shipments) || shipments.length === 0) {
            throw new ApiError(400, 'At least one shipment is required');
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token ${apiKey}`
        };

        // Prepare the payload structure exactly as required by Delhivery
        const payload = {
            format: 'json',
            data: {
                shipments: shipments.map(shipment => ({
                    name: shipment.name,
                    add: shipment.add,
                    pin: shipment.pin,
                    city: shipment.city,
                    state: shipment.state,
                    phone: shipment.phone,
                    order: shipment.order,
                    payment_mode: shipment.payment_mode,
                    products_desc: shipment.products_desc,
                    cod_amount: shipment.cod_amount,
                    total_amount: shipment.total_amount,
                    seller_add: shipment.seller_add,
                    seller_name: shipment.seller_name,
                    quantity: shipment.quantity,
                    waybill: shipment.waybill,
                    seller_gst_tin: shipment.seller_gst_tin,
                    shipping_mode: shipment.shipping_mode,
                    address_type: shipment.address_type
                })),
                pickup_location: {
                    name: pickup_location.name,
                    add: pickup_location.add,
                    city: pickup_location.city,
                    pin_code: pickup_location.pin_code,
                    country: pickup_location.country,
                    phone: pickup_location.phone
                }
            }
        };

        const response = await axios.post(
            'https://staging-express.delhivery.com/api/cmu/create.json',
            payload,
            { 
                headers,
                timeout: 10000 
            }
        );

        // Handle Delhivery API response
        if (response.data?.success) {
            return res
                .status(201)
                .json(new ApiResponse(201, response.data, 'CMU created successfully'));
        }

        throw new ApiError(400, response.data?.error || 'Failed to create CMU');

    } catch (error) {
        // Handle Axios errors
        if (error.response) {
            throw new ApiError(
                error.response.status,
                `Delhivery API Error: ${error.response.data?.error || error.message}`
            );
        }
        
        throw new ApiError(500, `CMU creation failed: ${error.message}`);
    }
});

const createPickupRequest = asyncHandler(async (req, res) => {
    try {
        const key = process.env.DELHIVERY_API_KEY;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${key}`
        };

        // Extracting request body from the incoming request
        const { pickup_time, pickup_date, pickup_location, expected_package_count } = req.body;

        // Construct the payload
        const payload = {
            pickup_time,
            pickup_date,
            pickup_location,
            expected_package_count
        };

        // Making the API request
        const response = await axios.post(
            'https://staging-express.delhivery.com/fm/request/new/',
            payload,
            { headers }
        );

        return res
            .status(200)
            .json(new ApiResponse(200, true, "Pickup request created successfully", response.data));

    } catch (error) {
        if (error.response) {
            throw new ApiError(
                error.response.status, 
                `Delhivery API Error: ${error.response.data?.message || 'Unknown error'}`
            );
        }

        throw new ApiError(
            500, 
            `Pickup request failed: ${error.message}`
        );
    }
});

const editWarehouse = asyncHandler(async (req, res) => {
    try {
        const key = process.env.DELHIVERY_API_KEY;

        const headers = {
            'Accept': 'application/json',
            'Authorization': `Token ${key}`
        };

        // Extracting request body from the incoming request
        const { name, registered_name, address } = req.body;

        // Construct the payload
        const payload = { name, registered_name, address };

        // Making the API request
        const response = await axios.post(
            'https://staging-express.delhivery.com/api/backend/clientwarehouse/edit/',
            payload,
            { headers }
        );

        return res
            .status(200)
            .json(new ApiResponse(200, true, "Warehouse details updated successfully", response.data));

    } catch (error) {
        if (error.response) {
            throw new ApiError(
                error.response.status, 
                `Delhivery API Error: ${error.response.data?.message || 'Unknown error'}`
            );
        }

        throw new ApiError(
            500, 
            `Warehouse update failed: ${error.message}`
        );
    }
});

const trackPackage = asyncHandler(async (req, res) => {
    try {
        const { waybill } = req.params;
        const key = process.env.DELHIVERY_API_KEY;

        // Construct the tracking URL
        const url = `https://staging-express.delhivery.com/api/v1/packages/json/?waybill=${waybill}&token=${key}`;

        // Making the API request
        const response = await axios.get(url);

        // Check if tracking details are available
        if (!response.data || Object.keys(response.data).length === 0) {
            return res
                .status(404)
                .json(new ApiResponse(404, false, "No tracking data found for the given waybill"));
        }

        return res
            .status(200)
            .json(new ApiResponse(200, true, "Tracking data retrieved successfully", response.data));

    } catch (error) {
        if (error.response) {
            throw new ApiError(
                error.response.status, 
                `Delhivery API Error: ${error.response.data?.message || 'Unknown error'}`
            );
        }

        throw new ApiError(
            500, 
            `Tracking request failed: ${error.message}`
        );
    }
});

const cancelOrder = asyncHandler(async (req, res) => {
    try {
        const key = process.env.DELHIVERY_API_KEY;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${key}`
        };

        // Extracting request body from the incoming request
        const { waybill} = req.body;
        const cancellation = "true";
        // Construct the payload
        const payload = { waybill, cancellation };

        // Making the API request
        const response = await axios.post(
            'https://track.delhivery.com/api/p/edit',
            payload,
            { headers }
        );

        return res
            .status(200)
            .json(new ApiResponse(200, true, "Order cancellation request successful", response.data));

    } catch (error) {
        if (error.response) {
            throw new ApiError(
                error.response.status, 
                `Delhivery API Error: ${error.response.data?.message || 'Unknown error'}`
            );
        }

        throw new ApiError(
            500, 
            `Order cancellation failed: ${error.message}`
        );
    }
});

const createReverseCMU = asyncHandler(async (req, res) => {
    try {
        const { shipments, pickup_location } = req.body;
        const apiKey = process.env.DELHIVERY_API_KEY;

        // Validate mandatory fields
        if (!Array.isArray(shipments) || shipments.length === 0) {
            throw new ApiError(400, 'At least one reverse shipment is required');
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token ${apiKey}`
        };

        // Prepare reverse flow specific payload
        const formData = qs.stringify({
            format: 'json',
            data: {
                pickup_location: {
                    add: pickup_location.address,
                    city: pickup_location.city,
                    country: pickup_location.country,
                    name: pickup_location.name,
                    phone: pickup_location.phone,
                    pin: pickup_location.pincode
                },
                shipments: shipments.map(shipment => ({
                    waybill: shipment.waybill || '',
                    name: shipment.consignee_name,
                    order: shipment.order_number,
                    products_desc: shipment.product_description,
                    order_date: shipment.order_date,
                    payment_mode: shipment.payment_mode,
                    total_amount: shipment.total_amount,
                    cod_amount: shipment.cod_amount,
                    add: shipment.consignee_address,
                    city: shipment.consignee_city,
                    state: shipment.consignee_state,
                    country: shipment.consignee_country,
                    phone: shipment.consignee_phone,
                    pin: shipment.consignee_pincode,
                    return_add: shipment.return_address,
                    return_city: shipment.return_city,
                    return_country: shipment.return_country,
                    return_name: shipment.return_name,
                    return_phone: shipment.return_phone,
                    return_pin: shipment.return_pincode,
                    return_state: shipment.return_state,
                    weight: shipment.weight,
                    quantity: shipment.quantity,
                    seller_add: shipment.seller_address,
                    seller_gst_tin: shipment.seller_gst_tin,
                    category_of_goods: shipment.product_category,
                    invoice_reference: shipment.invoice_number
                }))
            }
        });

        const response = await axios.post(
            'https://staging-express.delhivery.com/api/cmu/create.json',
            formData,
            { 
                headers,
                timeout: 15000 // Increased timeout for reverse flow
            }
        );

        // Handle reverse flow specific response
        if (response.data?.success) {
            return res.status(201).json(
                new ApiResponse(201, {
                    reverse_manifest_id: response.data.reverse_manifest_id,
                    return_waybills: response.data.return_waybills
                }, 'Reverse CMU created successfully')
            );
        }

        throw new ApiError(400, response.data?.error || 'Reverse manifest creation failed');

    } catch (error) {
        // Handle reverse flow specific errors
        if (error.response?.data?.errors) {
            const errorMessages = error.response.data.errors.join(', ');
            throw new ApiError(error.response.status, `Reverse flow error: ${errorMessages}`);
        }
        
        throw new ApiError(500, `Reverse CMU creation failed: ${error.message}`);
    }
});


const createCMUManifest = asyncHandler(async (req, res) => {
    try {
        const { shipments, pickup_location } = req.body;
        const apiKey = process.env.DELHIVERY_API_KEY;

        // Validate required fields
        if (!Array.isArray(shipments) || shipments.length === 0) {
            throw new ApiError(400, 'At least one shipment is required');
        }

        const headers = {
            'Content-Type': 'application/json', // As per Postman collection
            'Accept': 'application/json',
            'Authorization': `Token ${apiKey}`
        };

        // Prepare payload matching Postman structure
        const formData = qs.stringify({
            format: 'json',
            data: {
                shipments: shipments.map(shipment => ({
                    add: shipment.address,
                    address_type: shipment.address_type,
                    phone: shipment.phone,
                    payment_mode: shipment.payment_mode,
                    name: shipment.recipient_name,
                    pin: shipment.pincode,
                    order: shipment.order_number,
                    country: shipment.country,
                    cod_amount: shipment.cod_amount,
                    waybill: shipment.waybill || '',
                    shipping_mode: shipment.shipping_mode
                })),
                pickup_location: {
                    name: pickup_location.name,
                    city: pickup_location.city,
                    pin: pickup_location.pincode,
                    country: pickup_location.country,
                    phone: pickup_location.phone,
                    add: pickup_location.address
                }
            }
        });

        const response = await axios.post(
            'https://staging-express.delhivery.com/api/cmu/create.json',
            formData,
            { 
                headers,
                timeout: 10000 
            }
        );

        // Handle response format
        if (response.data?.success) {
            return res.status(201).json(
                new ApiResponse(201, {
                    manifest_id: response.data.manifest_id,
                    waybills: response.data.waybills
                }, 'CMU manifest created successfully')
            );
        }

        throw new ApiError(400, response.data?.error || 'Failed to create manifest');

    } catch (error) {
        // Handle specific Delhivery API errors
        if (error.response?.data?.message) {
            throw new ApiError(error.response.status, error.response.data.message);
        }
        
        throw new ApiError(500, `Manifest creation failed: ${error.message}`);
    }
});

export { checkPindcodeAvalibility , checkPincodeAvailability2 , createClientWarehouse ,  generateWaybill  ,
    createCMU , createPickupRequest , editWarehouse , trackPackage , cancelOrder , createReverseCMU , createCMUManifest
};