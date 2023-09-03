import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { SinglePlaneta } from "./views/singlePlaneta";
import { SingleVehicle } from "./views/singleVehicle";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./views/login"
import { Register } from "./views/register"


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<Navbar />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:name/:id" element={<Single />} />
						<Route path="/singlePlaneta/:name/:id" element={<SinglePlaneta />} />
						<Route path="/singleVehicle/:name/:id" element={<SingleVehicle />} />
						<Route path="*" element={<Login />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
