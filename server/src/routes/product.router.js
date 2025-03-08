import { Router } from "express";
import { upload } from "../middlewares/multer.middlerware.js";
import {
	productReview,
	getAllProducts,
	getSingleProduct,
	check,
	createProduct,
	updateProduct,
	deleteProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/create").post(upload.array("images", 6), createProduct);
router.route("/all").get(getAllProducts);

router.get("/:product_id", getSingleProduct);

router.route("/:user_id/:product_id/review").post(productReview);
router.route("/update").put(updateProduct);
router.route("/:product_id").delete(deleteProduct);
router.route("/check").get(check);
export default router;
