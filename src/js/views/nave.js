import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Nave = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params)

    const [info,setInfo] = useState({})

    useEffect(()=>{
        console.log('vy a llamr al api a la siguiene url' + 'https://www.swapi.tech/api/starships/' + params.identificador)
        fetch('https://www.swapi.tech/api/starships/' + params.identificador)
        .then( (response)=> response.json())
        .then( (data)=> setInfo(data.result.properties))
    },[])
    return (
        <div className="jumbotron">
            <h1 className="display-4">Tinfo nave: {params.identificador} </h1>

            <h2>Model: {info.model} </h2>
            <h2>Manufacturer: {info.manufacturer} </h2>
            <h2>Name: {info.name} </h2>


            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

Nave.propTypes = {
    match: PropTypes.object
};
