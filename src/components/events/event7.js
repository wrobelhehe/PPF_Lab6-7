import React, { Component } from 'react';   

export default class event7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      messagetext: "",
    }
  }

  handleOnBlurText(event) {
    var text = event.target.value;
    var messagetext = "";

    if(!text) {
      messagetext = "Brak tekstu"; 
    }

    this.setState({
      text: text,
      messagetext: messagetext
    });
  }

  render() {
    return (
      <div className = "event7blur">
          <p>Kliknij w pole tekstowe, a następnie na strone, aby otrzymać wiadomość o braku tekstu. Po wpisaniu tekstu wiadomość znika.</p>
        <label>
          tekst:
        </label>
        <input
          type="text"
          onBlur={this.handleOnBlurText.bind(this)}
        />
        {this.state.messagetext}
        
        
      </div>
    );
  }
}

