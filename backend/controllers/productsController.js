import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

/**
 * @desc   Create new product
 * @route  POST /api/products/create
 * @access Public
 */
const createProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		sale_price,
		description,
		category,
		compatibility,
		stock,
		slug,
		mainImage,
		otherImages,
		productLine,
	} = req.body;

	const product = await Product.create({
		name,
		price,
		sale_price,
		description,
		category,
		compatibility,
		stock,
		slug,
		mainImage,
		otherImages,
		productLine,
	});

	if (product) {
		res.status(201).json({
			_id: product._id,
			name: product.name,
			price: product.price,
			sale_price: product.sale_price,
			description: product.description,
			category: product.category,
			compatibility: product.compatibility,
			stock: product.stock,
			slug: product.slug,
			mainImage: product.mainImage,
			otherImages: product.otherImages,
			productLine: product.productLine,
		});
	} else {
		res.status(400);
		throw new Error("Invalid product data");
	}
});

/**
 * @desc   Gets all products
 * @route  GET /api/products
 * @access Public
 */
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});

	res.status(200).json(products);
});

/**
 * @desc   Update product
 * @route  PUT /api/products/:id
 * @access Private
 */
const updateProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(400);
		throw new Error("Product not found");
	}

	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	const user = await User.findById(req.user.id);
	if (!user) {
		res.status(403);
		throw new Error("Not authorized");
	}

	const updatedProduct = Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updateProduct);
});

/**
 * @desc   Delete product
 * @route  DEL /api/products/:id
 * @access Private
 */
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(400);
		throw new Error("Product not found");
	}

	if (!req.user) {
		res.status(401);
		throw new Error("User not found");
	}

	const user = await User.findById(req.user.id);
	if (!user) {
		res.status(403);
		throw new Error("Not authorized");
	}

	await product.deleteOne();
	res.status(200).json({ id: req.params.id });
});

export { getProducts, createProduct, updateProduct, deleteProduct };
