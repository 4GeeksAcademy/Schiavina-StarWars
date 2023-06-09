import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from 'react-router-dom';

import {Context} from "../store/appContext.js"


export const Card = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});

  function enviarFavorito(e){
    e.preventDefault()
    actions.agregarFavorito(props.name)
}

function singlePersonaje(e){
  actions.singlePersonajeIndividual(props.id)
 
}




	
return (
	<div className="">
		
		<div className="card" style={{width: 280}}>
  <img src="https://parade.com/.image/t_share/MTkwNTgxMzUwMjEwMjgzMzg4/star-wars-characters-grogu-baby-yoda.jpg" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title"> {props.name}</h5>
    <p className="card-text m-0 p-0">Gender:</p>
    <p className="card-text m-0 p-0">Hair_color:</p>
    <p className="card-text m-0 p-0">Eye_color:</p>
    <div className="d-flex justify-content-between"><Link to={"/Single/"+props.name+"/"+props.id}><button href="#"  onClick={singlePersonaje} className="btn btn-outline-primary">Learn more!</button></Link><a onClick={enviarFavorito} href="#" className="btn btn-outline-warning"> <i className="fa fa-heart" /> </a> </div>
	






  </div>

</div>
		
	</div>
);
}