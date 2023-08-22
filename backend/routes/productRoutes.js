import express from "express";
const router = express.Router();
import {
	createProduct,
	updateProduct,
	deleteProduct,
	getProducts,
} from "../controllers/productsController.js";

import { protect } from "../middleware/authMiddleware.js";

router.get("/", getProducts);
router.post("/create", protect, createProduct);
router.route("/:id").delete(protect, deleteProduct).put(protect, updateProduct);

export default router;
