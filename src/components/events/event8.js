import React, { Component } from 'react';   
import './style/style.css'

class event8 extends Component {
    constructor(props) {
      super(props)
      this.state = {
        captureSpace: true,
        captureEnter: true,
        keyPressMessage: '',
        clickMessage: ''
      }
    }
  
    render() {
      return (
        <div className = "event8Container">
          <div>
            <div>Wybierz którymi klawiszami możesz kliknąc przycisk</div>
            <div className = "space"><input id="captureSpace" type="checkbox" checked={this.state.captureSpace}onChange={() => this.setState({ captureSpace: !this.state.captureSpace })} />
            <label for="captureSpace">Spacja</label></div>
            <div className = "enter"><input id="captureEnter" type="checkbox" checked={this.state.captureEnter}onChange={() => this.setState({ captureEnter: !this.state.captureEnter })} />
            <label for="captureEnter">Enter</label></div>
          </div>
          <div className = "event8Inner">
            <input type="text" onKeyDown={(e) => this.handleKeyDown(e)} />
            <span>{this.state.keyPressMessage}</span>
            <span>{this.state.clickMessage}</span>
            <br />
            <button ref="thebutton" onClick={(e) => this.handleClick(e)} >Kliknij</button>
          </div>
        </div>
      )
    }
    handleKeyDown(e) {
      this.setState({ clickMessage: '' })
      this.setState({ keyPressMessage: 'przycisk: "' + e.key + '" - kod przycisku: ' + e.keyCode })
      if (this.state.captureSpace && (e.key === " " || e.keyCode === 32)) {
        this.refs.thebutton.focus()
      }
      if (this.state.captureEnter && (e.key === "Enter" || e.keyCode === 13)) {
        this.refs.thebutton.focus()
      }
  
    }
    handleClick(e) {
      this.setState({ clickMessage: 'Przycisk został wciśnięty' })
    }
  }
  
  
  

  export default event8