import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div class="notfound-container">
            <h1>Erreur 404 : Oops! Vous vous êtes perdu ! </h1>
            <h2><a href="/" className="err404-return-home"> Retourner à l'accueil </a> </h2>
        </div>
   )
};