import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductService from "./productService";
import Cookies from "js-cookie";

const initialState = {
	products: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const createProduct = createAsyncThunk(
	"admin/products/create",
	async (ProductData, thunkAPI) => {
		try {
			// const token = thunkAPI.getState().auth.userInfo.token;
			const token = Cookies.get("jwt");
			const result = await ProductService.createProduct(
				ProductData,
				token,
			);
			return result;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const getProducts = createAsyncThunk(
	"admin/products/getall",
	async (_, thunkAPI) => {
		try {
			const token = Cookies.get("jwt");
			// console.log(ProductData);
			return await ProductService.getProducts(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const ProductSlice = createSlice({
	name: "Product",
	initialState: initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.Products.push(action.payload);
			})
			.addCase(createProduct.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.Products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = ProductSlice.actions;
export default ProductSlice.reducer;
