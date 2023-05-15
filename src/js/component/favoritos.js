import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import {Context} from "../store/appContext.js"

export const Favoritos = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});

function borrarFavorito(e) {
actions.eliminarFavorito(props.nombre)
}
  


	
return (
	<div className="d-flex justify-content-between">
	{props.nombre}<button onClick={borrarFavorito} className="btn-close"></button>
		</div>
);
}