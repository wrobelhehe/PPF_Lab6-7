import React, { Component } from "react";
import jsonData from "../res/text.json";
import './Home.css';


export default class Home extends Component {
    constructor() {
        console.log("Home constructor()");
        super();
        this.state = {
            
        }
        this.txtData = JSON.parse(JSON.stringify(jsonData));
        var x = require.context("../res", false, /\.png$/);
        this.images = x.keys().map(x);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        let img = {};
        this.imgs = x.keys().reduce((icons, file) => {
            const cname = x(file).default;
            const label = file.slice(2, -4);
            img[label] = cname;
            return img;
        }, {});


    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        this.setState({ comment: this.state.text });
        event.preventDefault();
    }

    render() {
        console.log("Home  render()");
        return (
            <div className="home">
                
             
                    {this.txtData["list"].map((value, id) => {
                        return (
                            <h1 key={id}>{value}</h1>
                        )
                    })}
           
               <div className="labell">
                
                
                <div className = "statediv">{this.state.comment}</div>
               
                
                <form onSubmit={this.handleSubmit}>
                <div className="nic">Co sądzisz o Norbercie G? Napisz!</div>
                    <label> 
                        <input type="text" maxLength = "15" value={this.state.text} onChange={this.handleChange} />
                    </label>
                    
                    <button type="submit" value="Submit">Wyślij</button>
                </form>
                </div>

                
                <div className = "lan">Nasze łańcuchy</div>
                <div className="image">
                    
                    {this.images.map((value) => {
                        return (
                            <div key={value.default} >
                                <img src={value.default} alt={value.default} />
                                <p className="imgtext">30 koła łańcuch, a to cena w wyrobie</p>

                                
                            </div>
                        )
                    })}
                </div>
                <div className="video">
                    <div className="client">Nasi klienci:</div>
                    <div className="videoWindow"><iframe width="560" height="315" src="https://www.youtube.com/embed/nI3lDHcWyRY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
                
            </div>

            
        );
    }
    static getDerivedStateFormProps(props, state) {
        console.log("Home - getDerivedStateFormProps()");
        return null;
    }

    componentDidMount() {
        console.log("Home - componentDidMount()");
    }

    shouldComponentUpdate() {
        console.log("Home - shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(props, pstate) {
        console.log("Home - getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("Home - componentDidUpdate()");
    }



    



}

//export default Home;
