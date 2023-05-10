import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.js";

import {Context} from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.personaje)
	const [state, setState] = useState({});
	
	useEffect(() => {
		actions.obtenerPersonaje();
	}, []);
	
return (
	<div className="">
		
	 
	{store.personaje.map((item, index) => (
							<Card
								key={index}
								name={item.name}
							/>
						))}

		
	</div>
);
}