import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from 'react-router-dom';
import {Context} from "../store/appContext.js"

export const CardVehiculo = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	
  function enviarFavorito(e){
    e.preventDefault()
    actions.agregarFavorito(props.nameVehiculo)

}

function singleVehicle(e){
  actions.singleVehicleIndividual(props.vid)
 
}
	
return (
	<div className="">
		
		<div className="card" style={{width: 280}}>
  <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/7f/Vehicles.png" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title"> {props.nameVehiculo} </h5>
    <p className="card-text m-0 p-0">Crew:</p>
    <p className="card-text m-0 p-0">Vehicle class:</p>
    <div className="d-flex justify-content-between"><Link to={"/SingleVehicle/"+props.nameVehiculo+"/"+props.vid}><button href="#" className="btn btn-outline-primary" onClick={singleVehicle}>Learn more!</button></Link><a onClick={enviarFavorito} href="#" className="btn btn-outline-warning"><i className="fa fa-heart" /></a> </div>
    
	






  </div>

</div>
		
	</div>
);
}