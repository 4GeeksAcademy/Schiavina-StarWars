import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import {Context} from "../store/appContext.js"

export const Card = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});



  function enviarFavorito(e){
    e.preventDefault()
    actions.agregarFavorito(props.name)
    console.log(store.listaFavoritos)

}
	
return (
	<div className="">
		
		<div className="card" style={{width: 280}}>
  <img src="https://parade.com/.image/t_share/MTkwNTgxMzUwMjEwMjgzMzg4/star-wars-characters-grogu-baby-yoda.jpg" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title"> {props.name} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-flex justify-content-between"><a href="#" className="btn btn-outline-primary">Learn more!</a><a onClick={enviarFavorito} href="#" className="btn btn-outline-warning"> <i className="fa fa-heart" /> </a> </div>
	






  </div>

</div>
		
	</div>
);
}