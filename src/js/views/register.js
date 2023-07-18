import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";




export const Register = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    const [ name, setName ] = useState("")
    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        actions.register(email, password, name)
        setName("");
        setEmail("");
        setPassword("");
    }

	useEffect(() => {
		
	}, []);
	
	return (
        <div className="m-3 p-3">
        <form onSubmit={handleSubmit}>

  <div className="mb-3 text-center">
    <label htmlFor="exampleInputName1" className="form-label bold fs-2">Nombre</label>
    <input type="string" onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputName1" />
  </div>       

  <div className="mb-3 text-center">
    <label htmlFor="exampleInputEmail1" className="form-label bold fs-2">Email</label>
    <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3 text-center">
    <label htmlFor="exampleInputPassword1" className="form-label bold fs-2">Password</label>
    <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>


<div className="text-center"><button type="submit" className="btn btn-primary">Crear Usuario</button></div>



  
</form>
</div>



	);
};
