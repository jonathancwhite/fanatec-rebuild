import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
dotenv.config();

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const __dirname = path.resolve();

// Serve frontend
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")),
	);
} else {
	app.get("/", (req, res) => {
		res.send("API is running....");
	});
}

app.listen(port, () => console.log(`Server has started on port ${port}`));
