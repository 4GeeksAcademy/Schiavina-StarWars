import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.js";
import { CardPlaneta } from "../component/cardPlaneta.js";

import {Context} from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.personaje)
	const [state, setState] = useState({});
	
	useEffect(() => {
		actions.obtenerPersonaje();
		actions.obtenerPlaneta();
	}, []);
	
return (
	<div>
	<div className="d-flex ms-3">
		
		<h1>PERSONAJES </h1>	
	{store.personaje.map((item, index) => (
							<Card
								key={index}
								name={item.name}
							/>
						))}
</div>
<div className="d-flex ms-3">
		<h1>PLANETAS </h1>		
	{store.planeta.map((item, index) => (
							<CardPlaneta
								key={index}
								namePlaneta={item.name}
							/>
						))}
	</div>
	</div>
);
}