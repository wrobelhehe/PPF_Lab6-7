import React, { Component } from 'react';    
 import "./style/style.css"
function Message(props)   
{   
    if (props.isOnline)   
        return <h1>Jesteś online</h1>;   
    else  
        return <h1>Jesteś offline</h1>;   
}   
 
function Online(props)   
{   
   return(   
           <button onClick = {props.clickInfo}> Online </button>   
       );   
}    
 
function Offline(props)   
{   
    return(   
           <button onClick = {props.clickInfo}> Offline </button>   
       );   
}   
class event1 extends Component{    
   constructor(props)   
    {   
        super(props);    
        this.handleOnline = this.handleOnline.bind(this);  
          this.handleOffline = this.handleOffline.bind(this);   
      this.state = {isOnline : false};   
    }   
   handleOnline()   
    {   
        this.setState({isOnline : true});   
    }   
    handleOffline()   
    {   
        this.setState({isOnline : false});   
    }   
    render(){   
        return(   
            <div className = "event1Container">   
        <h1>Zmiana statusu po kliknięciu przycisku</h1>  
                <Message isOnline = {this.state.isOnline}/>               
                {   
                    (this.state.isOnline)?(<Offline clickInfo = {this.handleOffline} /> ):(<Online clickInfo = {this.handleOnline}/>)   
                }   
            </div>         
            );   
    }   
}   
export default event1;    