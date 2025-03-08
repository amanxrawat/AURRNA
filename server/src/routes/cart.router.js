import { Router } from "express";
import { addToCart, getUserCart, clearUserCart , removeProductFromCart } from "../controllers/cart.controller.js";
const router = Router();

router.route("/addToCart").post(addToCart);
router.route("/getUserCart").get(getUserCart);
router.route("/clearCart").delete(clearUserCart);
router.route("/removeProduct").delete(removeProductFromCart);

export default router;