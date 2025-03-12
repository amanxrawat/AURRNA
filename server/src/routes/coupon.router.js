import { Router } from "express";
import { createCoupon , deleteCoupon  , getCouponByCode} from "../controllers/Coupon.controller.js"

const router = Router();

router.route('/create').post(createCoupon);
router.route('/:coupon_id').delete(deleteCoupon);
router.route('/couponDetails').get(getCouponByCode);

export default router;