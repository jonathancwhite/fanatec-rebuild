import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    sale_price: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    category: {
      type: String,
    },
    compatibility: {
      type: Map,
      of: Boolean,
    },
    stock: {
      type: Number,
    },
    slug: {
      type: String,
    },
    mainImage: {
      type: String,
    },
    otherImages: [
      {
        type: String,
      },
    ],
    productLine: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
