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
			{store.naves.map( (nave)=> <Carnave key={nave.uid} uid={nave.uid} nombre = {nave.name} />  )}
			
		</div>
	);
	
} 

