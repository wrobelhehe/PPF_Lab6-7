import React, { Component } from 'react';

class event5 extends Component {
  selectedText() {
      alert("Zaznaczyłes tekst!");
  }

  render() {
    return (

        <div className = "inputOnselect">
            <div>Zaznacz "tekst", aby wyświetlić komunikat</div>
        <div><input  type="text" value="tekst"  onSelect={this.selectedText}/></div>
        </div> );
  }
}

export default event5;