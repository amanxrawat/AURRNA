import { Router } from "express";
import rateLimit from 'express-rate-limit';
import { checkPindcodeAvalibility , createClientWarehouse ,generateWaybill , createCMU , createPickupRequest , editWarehouse , trackPackage ,
    cancelOrder , createReverseCMU , createCMUManifest
 } from "../controllers/delhivery.controller.js";

import { validateWarehouseData } from "../middlewares/validateWarehouse.middleware.js";
import { validateCMUData } from "../middlewares/cmuValidation.middleware.js";


const router = Router();


const waybillLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: 'Too many waybill requests from this IP'
});

router.route('/pincode').get(checkPindcodeAvalibility);
router.route('/warehouse').post(validateWarehouseData, createClientWarehouse);
router.route('/warehouse/edit').put(editWarehouse);

router.route('/waybill').get(waybillLimiter, generateWaybill);
router.route('/cmu').post(validateCMUData, createCMU);
router.route('/pickup').post(createPickupRequest);
router.route('/track/:waybill').get(trackPackage);
router.route('/cancel/:waybill').get(cancelOrder);
router.route('/reverse-cmu').post(createReverseCMU);
router.route('/cmu-manifest').post(createCMUManifest);  



export default router ;