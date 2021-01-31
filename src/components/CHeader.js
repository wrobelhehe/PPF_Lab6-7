import React from "react";
import {Link} from "react-router-dom";
import logo from "../qqqqq.png";
import "./CHeader.css";


export default function CHeader()  {
    
        
        return (
            <div className="headerContainer">
                
                <div className = "header">
            <div className = "nav-wrapper">
                <div className = "logo">
                    <Link   Link to = "/">
                    <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
            <ul className= "li-wrapper">
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/info">Rejestracja</Link>
            </li>
            <li>
              <Link to="/events">Eventy</Link>
            </li>
          </ul>
         
         </div>
        </div>
            </div>
        );
    
}


