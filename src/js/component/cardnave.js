import React, { useContext } from "react";
import { Context } from "../store/appContext";

import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const Carnave = (props) => {
    const { store, actions } = useContext(Context);
    return (
       <div className="card mx-2" style={{width: "18rem"}}>
            <img src={rigoImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <button onClick={()=>actions.changeText(props.nombre)} >cambiar texto</button>
                <h5 className="card-title"> {props.nombre}</h5>
                <h4>Model: {props.model}</h4>
                <h4>Manufacturer: {props.manufacturer}</h4>
                <p className="card-text">info</p>
                <Link to={"/nave/" + props.uid }className="btn btn-primary">ver {props.uid} </Link>
            </div>
        </div>
    );
};
