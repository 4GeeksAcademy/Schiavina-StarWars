import React, {useContext, useState, useEffect, useSyncExternalStore} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { Card } from "../component/card.js";
import { Favoritos } from "../component/favoritos.js";
import { useNavigate, useLocation } from "react-router";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	const navigate = useNavigate();
	const location = useLocation();
	const shouldShowNavbar =
    location.pathname === "/home" ||
    location.pathname.startsWith("/singlePlaneta/") ||
    location.pathname.startsWith("/singleVehicle/") ||
    location.pathname.startsWith("/single/");

function pendiente() {
	store.listaFavoritos.length
	if (store.listaFavoritos.length >= 1) return (store.listaFavoritos.length)
	else return ("0");
}
function logOut(){
	actions.logout(),
	console.log(store.isLogged)
	// console.log(localStorage.token)
	navigate("/")
}
	return shouldShowNavbar ? (
	
		<nav className="navbar navbar-light bg-light mb-3 w-100">
			<Link to="/home">
				<span className="navbar-brand ms-4 p-2 h1"> <img style={{ maxHeight:30, maxWidth:30 }} src=" https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/e1/7c/ca/e17cca85-581d-4ce7-1965-65a80009ce4d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp" className="card-img-top" /></span>
				{/* https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/e1/7c/ca/e17cca85-581d-4ce7-1965-65a80009ce4d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp */}
			</Link>
			<div className="text-center "><button onClick={logOut} className="btn btn-danger">Logout</button></div>
			<div className="ml-auto">
				
				<div className="dropdown dropstart">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos {pendiente()}
  </button>
  <ul className="dropdown-menu">
    <li><span className="dropdown-item">{store.listaFavoritos.map((item, index)=> (<Favoritos key={index} nombre={item} />))}</span></li>
  </ul>
</div>


					
					{/* <button className="btn btn-primary me-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorite</button>
					<ul className="dropdown-menu text-start border list-group text-dark">{store.listaFavoritos.map((item, index)=> (<Favoritos key={index} nombre={item} />))} </ul> */}
				
			</div>

			
			
		</nav>
	) : null;
};





