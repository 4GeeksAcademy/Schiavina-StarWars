import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card.js";
import { CardPlaneta } from "../component/cardPlaneta.js";
import { CardVehiculo } from "../component/cardVehiculo.js";
import { Favoritos } from "../component/favoritos.js";
import { useNavigate } from "react-router";



export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let navigate = useNavigate()
	
	useEffect(() => {
		let token = localStorage.getItem("token")
			if (token == null) navigate("/")
		actions.singlePersonajeIndividual(params.id)
		// console.log(params)
	}, []);
	console.log(store.single1.eye_color)
	console.log(store.single1.name)
	console.log(store.single1.birth_year)
	
	return (
<div className="w-100 h-100">
	<div className="d-flex w-100 m-3 p-3 border-bottom border-danger">
	
	<img src="https://i.blogs.es/7de56b/650_1200/1366_2000.jpeg" className="" style={{width: 450}}/>
  	
		
		
		<div className= "w-100 text-center">
			<h1 className="">{params.name}</h1>
			<p className="me-2"> Dos Jedis, Qui-Gon Jinn y su Padawan Obi-Wan Kenobi deben proteger a la reina Amidala. En medio de la misión conocen a un niño llamado Anakin Skywalker quien forma parte de una antigua profecía Jedi pues es el elegido que traerá equilibrio a la galaxia.
Los enemigos de esta saga son los Sith. Un aprendiz de esta raza malvado, Darth Maul y su maestro Darth Sidious (quien se hace pasar por un senador de la República Galáctica llamado Palpatine). Al final Darth Maul asesina a Qui-Gon Jinn. Obi-Wan asesina a Darth Maul y Anakin se convierte en Padawan de Obi-Wan. Mientras, la Guerra entre la República y los Separatistas continúa.	</p>
		</div>

</div>
<div>
      <tr className="d-flex col-12 justify-content-between">
        <th className="text-danger col-2 m-2 ms-2 fw-bold fs-5 text-center">Name</th>
        <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">Birth year</th>
        <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">Gender</th>
        <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">Height</th>
        <th className="text-danger col-2 m-2 fw-bold fs-5 text-center">Skin Color</th>
        <th className="text-danger col-2 m-2 fw-bold fs-5 me-2 text-center">Eye Color</th>
      </tr>
      <tr className="col-12 d-flex justify-content-between">
        <td className="col-2 text-danger fs-5 m-2 ms-2 text-center">{store.single1.name}</td>
        <td className="col-2 text-danger fs-5 m-2 text-center">{store.single1.birth_year}</td>
        <td className="col-2 text-danger fs-5 m-2 text-center">{store.single1.gender}</td>
        <td className="col-2 text-danger fs-5 m-2 text-center">{store.single1.height}</td>
        <td className="col-2 text-danger fs-5 m-2 text-center">{store.single1.skin_color}</td>
        <td className="col-2 text-danger fs-5 m-2 me-2 text-center">{store.single1.eye_color}</td>
      </tr>
</div>

		<div className="d-flex w-100 m-3 p-3">	
			<Link to="/home">
				<button className="btn btn-primary btn-lg mt-5" href="#" role="button">
					Back home
				</button>
			</Link>
		</div>
</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
