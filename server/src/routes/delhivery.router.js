import { Router } from "express";
import { checkPindcodeAvalibility } from "../controllers/delhivery.controller.js";

const router = Router();

router.route('/pincode').get(checkPindcodeAvalibility);


export default router ;