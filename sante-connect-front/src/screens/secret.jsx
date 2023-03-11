import React from "react";
import { useNavigate } from "react-router-dom";

export default function Secret(){

    const navigate = useNavigate();
    const logOut = () => {
        navigate("/sign-in");
    }

    return  <div className="private">
            <h1> Page très confidentielle </h1>
            <button onClick={logOut}> Log out </button>
            </div>;
}