import React, { Component } from 'react';    
 import "./style/style.css"



class event2 extends Component {
    state = {
      
      input: "",
      reversedText: ""
    };
  
    
    handleChange = event => {
      const value = event.target.value;
      this.setState({
        input: value
      });
    };
  
    
    handleReverse = event => {
      event.preventDefault();
      const text = this.state.input;
      this.setState({
        reversedText: text
          .split("")
          .reverse()
          .join("")
      });
    };
  
    render() {
      return (
        <React.Fragment>
            <div className = "event2Container">
          <form onSubmit={this.handleReverse}>
            <div>
              <label>Twój tekst: {this.state.input}</label>
            </div>
            <div>
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                placeholder="Wpisz tekst"
              />
            </div>
            <div>
              <button>Kliknij aby odwrócić tekst</button>
            </div>
          </form>
          <p class="event2P">Odwrócony tekst: {this.state.reversedText}</p>
          </div>
        </React.Fragment>
      );
    }
  }
 
  export default event2
  