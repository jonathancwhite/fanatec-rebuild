import express from "express";
const router = express.Router();
import {
  registerUser,
  authUser,
  getUserProfile,
  logoutUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/account", protect, getUserProfile);

export default router;
