import React from 'react'
import {Link} from "react-router-dom";
import './Events.css'

export const Events = () => {
    return (
        <div className = "container">
            <ul className= "li">
            <li>
              <Link to="/event1">event1</Link>
            </li>
            <li>
              <Link to="/event2">event2</Link>
            </li>
            <li>
              <Link to="/event3">event3</Link>
            </li>
            <li>
              <Link to="/event4">event4</Link>
            </li>
            <li>
              <Link to="/event5">event5</Link>
            </li>
            <li>
              <Link to="/event6">event6</Link>
            </li>
            <li>
              <Link to="/event7">event7</Link>
            </li>
            <li>
              <Link to="/event8">event8</Link>
            </li>
            <li>
              <Link to="/event9">event9</Link>
            </li>
            
            
          </ul>
        </div>
    )
}
export default Events;


