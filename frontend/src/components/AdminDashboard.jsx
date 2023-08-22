import React, { useState } from "react";
import fanatecLogo from "../assets/img/fanatec-logo_white25.svg";
import NavListItem from "./mui/NavListItem";
import { LinkContainer } from "react-router-bootstrap";

import HomeComponent from "./dashboard/Home";
import ProductsComponent from "./dashboard/Products";
import OrdersComponent from "./dashboard/Orders";
import CustomersComponent from "./dashboard/Customers";
import SettingsComponent from "./dashboard/Settings";
import AccountComponent from "./dashboard/Account";

const AdminDashboard = () => {
	const [currentSection, setCurrentSection] = useState("Home");

	const renderSection = () => {
		switch (currentSection) {
			case "Home":
				return <HomeComponent />;
			case "Products":
				return <ProductsComponent />;
			case "Orders":
				return <OrdersComponent />;
			case "Customers":
				return <CustomersComponent />;
			case "Settings":
				return <SettingsComponent />;
			case "Account":
				return <AccountComponent />;
			default:
				return <HomeComponent />;
		}
	};

	return (
		<>
			<div className='dashboard'>
				<div className='sidebar'>
					<div className='sidebar__branding'>
						<img src={fanatecLogo} alt='' />
					</div>
					<nav className='sidebar__nav'>
						<ul className='sidebar__nav--top'>
							<a href={"/"} target='_blank' rel='noreferrer'>
								<li>
									<NavListItem
										icon={"BsShop"}
										text={"View Store"}
									/>
								</li>
							</a>
							<li onClick={() => setCurrentSection("Home")}>
								<NavListItem
									icon={"BsFillHouseDoorFill"}
									text={"Home"}
								/>
							</li>
							<li onClick={() => setCurrentSection("Products")}>
								<NavListItem
									icon={"BsFillPlusSquareFill"}
									text={"Products"}
								/>
							</li>
							<li onClick={() => setCurrentSection("Orders")}>
								<NavListItem
									icon={"BsBoxFill"}
									text={"Orders"}
								/>
							</li>
							<li onClick={() => setCurrentSection("Customers")}>
								<NavListItem
									icon={"BsFillPersonFill"}
									text={"Customers"}
								/>
							</li>
						</ul>
						<ul className='sidebar__nav--bottom'>
							<li onClick={() => setCurrentSection("Settings")}>
								<NavListItem
									icon={"BsFillGearFill"}
									text={"Settings"}
								/>
							</li>
							<li onClick={() => setCurrentSection("Account")}>
								<NavListItem
									icon={"BsFillPersonLinesFill"}
									text={"Account"}
								/>
							</li>
						</ul>
					</nav>
				</div>
				<main>{renderSection()}</main>
			</div>
		</>
	);
};

export default AdminDashboard;
