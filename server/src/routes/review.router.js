import { Router } from "express";
import {
	getAllReviews,
	getProductReview,
	getHighRatedReviews,
	deleteReview,
} from "../controllers/review.controller";

const router = Router();

router.route("/allReview").get(getAllReviews);
router.route("/:product_id").get(getProductReview);
router.route("/:review_id").delete(deleteReview);

router.route("/highReview").get(getHighRatedReviews);

export default router;
