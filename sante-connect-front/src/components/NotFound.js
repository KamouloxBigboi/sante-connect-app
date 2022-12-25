import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div class="notfound-container">
            <h1>Erreur 404 : Oops! Vous vous êtes perdu ! </h1>
            <h2> Voilà de quoi retrouver votre chemin : </h2>

            <Link to='/'> Accueil </Link>
            <Link to='/forum'> Forum </Link>
            <Link to='/sign-up'> S'inscrire </Link>
        </div>
   )
};