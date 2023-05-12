import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { Card } from "../component/card.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand ms-2 h1"> <img style={{ maxHeight:30, maxWidth:30 }} src=" https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/e1/7c/ca/e17cca85-581d-4ce7-1965-65a80009ce4d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp" className="card-img-top" /></span>
				{/* https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/e1/7c/ca/e17cca85-581d-4ce7-1965-65a80009ce4d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp */}
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-2">Favorite</button>
				</Link>
			</div>

			
			
		</nav>
	);
};





