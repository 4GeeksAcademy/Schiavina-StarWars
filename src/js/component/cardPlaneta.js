import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from 'react-router-dom';
import {Context} from "../store/appContext.js"

export const CardPlaneta = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});

  function enviarFavorito(e){
    e.preventDefault()
    actions.agregarFavorito(props.namePlaneta)

}
	
return (
	<div className="">
		
		<div className="card" style={{width: 280}}>
  <img src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title"> {props.namePlaneta} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-flex justify-content-between"><Link to={"/Single/"+props.namePlaneta}><button href="#" className="btn btn-outline-primary">Learn more!</button></Link><a onClick={enviarFavorito} href="#" className="btn btn-outline-warning"><i className="fa fa-heart" /></a> </div>
	






  </div>

</div>
		
	</div>
);
}