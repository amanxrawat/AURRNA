import {Router} from 'express';
import {createAddress,deleteAddress} from '../controllers/address.controller.js';

const router = Router();


router.route('/').post(createAddress);
router.route('/:user_id/:address_id').delete(deleteAddress);

export default router;