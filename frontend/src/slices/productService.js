import axios from "axios";

const product_URL = "/api/products/";

export const createProduct = async (productData, token) => {
	const config = {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(product_URL, productData, config);
	return response.data;
};

export const getProducts = async (token) => {
	const config = {
		headers: {
			authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(product_URL, config);
	return response.data;
};

const productService = {
	createProduct,
	getProducts,
};

export default productService;
