import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

export default function User() {

  const navigate = useNavigate();
  const logOut = () => {
          navigate("/login");
      }

  return  (
      <main style={{ padding: "1rem 0" }}>
        <div className="private">
          <h1> Votre compte Santé Connect </h1>
          <button onClick={logOut}> Log out </button>
        </div>;
      </main>
  )
}