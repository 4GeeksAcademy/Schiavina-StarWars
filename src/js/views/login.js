import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";




export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        actions.login(email, password)
    }

	useEffect(() => {
		
	}, []);
	
	return (
        <div className="m-3 p-3">
        <form onSubmit={handleSubmit}>
  <div className="mb-3 text-center">
    <label htmlFor="exampleInputEmail1" className="form-label bold fs-2">Email</label>
    <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3 text-center">
    <label htmlFor="exampleInputPassword1" className="form-label bold fs-2">Password</label>
    <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>
<div className="text-center"><button type="submit" className="btn btn-primary">Ingresar</button></div>



<div>
    <div className="text-start mt-5">
        <p>No tienes un usuario?</p>
       <Link to="/register"> <button type="submit" className="btn btn-primary">Registrarse</button></Link>
        </div>
</div>
  
</form>
</div>



	);
};



