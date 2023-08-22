import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Account = () => {
	const { userInfo } = useSelector((state) => state.auth);
	let loggedIn = false;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!userInfo) {
			loggedIn = false;
			console.log("log in");
		} else {
			loggedIn = true;
		}

		return () => {};
	}, [navigate, userInfo, dispatch]);

	return (
		<MainLayout>
			<div className='account'>
				<h2>Test</h2>
			</div>
		</MainLayout>
	);
};

export default Account;
