import React, {useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import {Context} from "../store/appContext.js"

export const Card = (props) => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({});
	console.log(props);
	
return (
	<div className="">
		
		<div className="card" style={{width: 280}}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title"> {props.name} </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
	






  </div>

</div>
		
	</div>
);
}