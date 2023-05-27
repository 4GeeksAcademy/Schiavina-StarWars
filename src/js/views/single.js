import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card.js";
import { CardPlaneta } from "../component/cardPlaneta.js";
import { CardVehiculo } from "../component/cardVehiculo.js";
import { Favoritos } from "../component/favoritos.js";




export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(useParams())
	return (
<div className="d-flex w-100 inline">
	<div className="card col-12 d-flex" style={{}}>
		<img src="https://i.blogs.es/7de56b/650_1200/1366_2000.jpeg" className="" style={{width: 450}}/>
  	<div className="col-6 align-content-end">
		<h1 className="">{params.name}</h1>
		<p className=""> star wars.............	</p>
  	</div>
</div>

			
			<Link to="/">
				<button className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</button>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
