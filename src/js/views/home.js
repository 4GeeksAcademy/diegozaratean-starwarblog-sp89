import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Carnave } from "../component/cardnave";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store } = useContext(Context);
	
	return(
		<div className="text-center mt-5">
			
			<h1>Naves desde FLUX API cardnave!</h1>
			<div className="row flex-row flex-nowrap " style={{overflowX: 'auto'}}>
				{store.naves.map( (nave)=> <Carnave key={nave.url} 
				uid={nave.url.replace('https://swapi.dev/api/starships/','').replace('/','')}
				nombre = {nave.name} model = {nave.model} manufacturer = {nave.manufacturer} />  )}
			</div>
			
		</div>
	);
	
} 

