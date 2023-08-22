import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import Account from "./components/Account.jsx";

const authenticated = false;

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	if (!authenticated) {
		navigate("/");
		// Optionally, you could store the intended destination and redirect after login:
		// sessionStorage.setItem('nextPathname', window.location.pathname);
	}

	return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route
							path='/admin/*'
							element={
								<ProtectedRoute>
									<AdminDashboard />
								</ProtectedRoute>
							}
						/>
						<Route path='/account' element={<Account />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>,
);
