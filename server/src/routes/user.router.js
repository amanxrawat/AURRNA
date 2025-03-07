import { Router } from "express";
import {
	registerUser,
	loginUser,
	logoutUser,
	deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/deleteUser/:user_id").delete(deleteUser);

export default router;
