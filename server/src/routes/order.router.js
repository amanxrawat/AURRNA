import { Router } from "express";
import {createOrder , getAllOrders ,getUserOrders ,getSingleOrderDetails} from "../controllers/oder.controller.js"


const router = Router();

router.route('/').post(createOrder);
router.route('/allOrders').get(getAllOrders);
router.route('/:user_id').get(getUserOrders);
router.route('/orderDetail/:order_id').get(getSingleOrderDetails);

export default router;