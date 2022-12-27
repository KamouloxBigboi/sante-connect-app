/* Put a navbar for screens here with sign-in/sign-out options */

import { React } from "react";
import { Component } from "react";
import { MenuData } from "./menudata.js";
import './navbar-styles.css';

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="SClogo">
                    <a href="/">
                        <img src={require("../img/logo.png")} width='80%' alt="logo"/>
                    </a>
                </h1>
                <ul className="nav-menu">
                {MenuData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url}
                            className={item.className}>
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                        )
                    })}  
                </ul>             
            </nav>
        )    
    }
}

export default Navbar