import { Router } from "express";
import { upload } from "../middlewares/multer.middlerware.js"
import { productReview, createProduct } from '../controllers/product.controller.js'

const router = Router();

router.route('/create').post(
    upload.fields([
        {
            name: 'productImage1',
            maxCount: 1
        },
        {
            name: 'productImage2',
            maxCount: 1
        },
        {
            name: 'productImage3',
            maxCount: 1
        },
        {
            name: 'productImage4',
            maxCount: 1
        },
    ]),
    createProduct)


router.route('/:user_id/:product_id/review').post(productReview)

export default router