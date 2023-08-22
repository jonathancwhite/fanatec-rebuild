import React from "react";
import Button from "@mui/material/Button";
import { BsPlusLg } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useSelector, useDispatch } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	boxShadow: "rgba(49, 52, 64, 0.2) 0px 1px 6px",
	color: theme.palette.text.secondary,
}));

const products = [];

const Products = () => {
	// const { products, isLoading, isError, message } = useSelector(
	// 	(state) => state.products,
	// );

	return (
		<div className='productsDashboard'>
			<div className='productsDashboard__control'>
				<h2>Products</h2>
				<Button variant='outlined' startIcon={<BsPlusLg />}>
					Add New
				</Button>
			</div>
			<div className='productsDashboard__main'>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid xs={12}>
							<Item>
								<div>Test</div>
							</Item>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
};

export default Products;
