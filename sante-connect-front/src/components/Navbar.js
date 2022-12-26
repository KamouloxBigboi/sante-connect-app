// Put a navbar here with home, forum and logout links
import React from "react";
import { Component } from "react";
import { MenuData } from "./MenuData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './NavbarStyles.css' 

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="SClogo">
                    <a href="/">
                        <img src={require("../img/logo.png")} width='80%' alt="logo"/>
                    </a>
                </h1>
                <div className="menu-icons">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </div>
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

export default Navbar;