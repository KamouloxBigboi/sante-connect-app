import React, { useContext } from "react";
import { userContext } from "../hooks/UserContext"
import { useNavigate } from "react-router-dom";
import './home.css'

export default function Home() {

    const navigate = useNavigate();
   
    const { user } = useContext(userContext);
        if(user) {
            navigate('/dashboard');
        };

    const logOut = () => {
            navigate("/login");
        };

  return (
      <main style={{ padding: "1rem 0" }}>
        <h2> Bienvenue sur Santé Connect ! </h2>
        <div className="log-out-button">
          <button className="button" onClick={logOut}> Se déconnecter </button>
        </div>
      </main>
  );
}