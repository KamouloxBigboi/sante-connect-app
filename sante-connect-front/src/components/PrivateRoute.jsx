import React from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(){

    const navigate = useNavigate();
    const logOut = () => {
            navigate("/login");
        }

    return  <div className="private">
            <h1> Page confidentielle </h1>
            <button onClick={logOut}> Log out </button>
            </div>;
}