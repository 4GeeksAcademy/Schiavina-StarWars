import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.js";
import { CardPlaneta } from "../component/cardPlaneta.js";
import { CardVehiculo } from "../component/cardVehiculo.js";
import { Favoritos } from "../component/favoritos.js";
import {Context} from "../store/appContext.js"
import { useNavigate } from "react-router";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	let navigate = useNavigate()

	useEffect(() => {
		let token = localStorage.getItem("token")
			if (token == null) navigate("/")
		console.log(localStorage)
		actions.obtenerPersonaje();
		actions.obtenerPlaneta();
		actions.obtenerVehiculo();
	}, [store.isLogged])

return (
	<div className="">
	<div className=" ms-4 p-1">
		
		<h1 className="text-danger m-3">Characters </h1>	
	<div id="contenedorPersonaje" className="d-flex overflow-auto col-6 w-100" >{store.personaje.map((item, index) => (
							<Card
								key={index}
								name={item.name}
								id={item.uid}
							/>
						))}</div>
</div>
<div className="ms-4 p-1">
		<h1 className="text-danger m-3">Planets </h1>		
	<div id="contenedorPlaneta" className="d-flex overflow-auto col-6 w-100">{store.planeta.map((item, index) => (
							<CardPlaneta
								key={index}
								namePlaneta={item.name}
								pid={item.uid}
							/>
						))}</div>
	</div>
	<div className="ms-4 p-1">
		<h1 className="text-danger m-3 ">Vehicles </h1>		
	<div id="contenedorVehiculo" className="d-flex overflow-auto col-6 w-100">{store.vehiculo.map((item, index) => (
							<CardVehiculo
								key={index}
								nameVehiculo={item.name}
								vid={item.uid}
							/>
						))}</div>


						
	</div>

	</div>
);
}