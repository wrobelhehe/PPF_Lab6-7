import React, { Component } from 'react';    
import './style/style.css'

class event4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      timer: false,
      counter: 0
    };
  }

   handlerCopy(e) {
    var val = this.state.counter;
    val = val + 1;
    this.setState({
      counter: val
    }, function(){
      console.log('licznik ', this.state.counter);
    })
    alert('Skopiowałes tekst!');
  }


  render() {
    return (
      <React.Fragment>
        <div className="copyOn">
          <p>Skopiuj "tekst" aby wyświetlić komunikat</p>
        <p className = "pText" onCopy={(e) => this.handlerCopy(e)}>tekst</p>
        <p>licznik: {this.state.counter}</p>
        </div>
      </React.Fragment>
    );
  }
}



export default event4;
