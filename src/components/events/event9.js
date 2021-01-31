import React, { Component } from 'react';
import "./style/style.css"

class event9 extends Component {
  
rightClick = () =>{
    alert("Rajt klik")
}

  render() {
    return (
        <div className="event9Container" onContextMenu = {this.rightClick}>
            Kliknij prawym przyciskiem, aby zobaczyć komunikat
        </div>
 );
  }
}

export default event9;