import React, { Component } from 'react';    
 import "./style/style.css"

class event3 extends Component{
    state = {
      windowWith: window.innerWidth
    }
  
    handleResize = (event) => {
      this.setState({ windowWith: window.innerWidth })
    }
    
    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }
  
    componentDidUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }
  
    render() {
      return(
        <React.Fragment>
            <div class = "event3Window">
          <h1>Szerokość okna przeglądarki</h1>
          <h1>{this.state.windowWith} px</h1>
          </div>
        </React.Fragment>
      )
    }
  }
  
  


  export default event3;  