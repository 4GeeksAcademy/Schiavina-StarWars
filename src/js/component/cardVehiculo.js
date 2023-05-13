import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import {Context} from "../store/appContext.js"

export const CardVehiculo = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	
  function enviarFavorito(e){
    e.preventDefault()
    actions.agregarFavorito(props.nameVehiculo)

}
	
return (
	<div className="">
		
		<div className="card" style={{width: 280}}>
  <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/7f/Vehicles.png" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title"> {props.nameVehiculo} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-flex justify-content-between"><a href="#" className="btn btn-outline-primary">Learn more!</a><a onClick={enviarFavorito} href="#" className="btn btn-outline-warning "><i className="fa fa-heart" /></a> </div>
	






  </div>

</div>
		
	</div>
);
}