import React, { Component } from "react";
import "./CContents.css";
import jsonData from "../res/text.json";
import jsonData2 from "../res/text2.json";

class CContents extends Component {
    constructor() {
        super();
        this.state = {
            msg: "Witaj uzytkowniku. Kliknij przycisk aby poznać wiadomość",
        };
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
        const imgContext = require.context("../res/", false, /\.png$/);
        let img = {};
        this.imgs = imgContext.keys().reduce((icons, file) => {
            const cname = imgContext(file).default;
            const label = file.slice(2, -4);
            img[label] = cname;
            return img;
        }, {});
        // this.changeMsg = this.changeMsg.bind(this);
    }

    changeMsg = () => {
        this.setState({
            msg: "Właśnie jesteś uczestnikiem kursu React, gratuluje!",
        });
        console.log("Przycisk został naciśnięty");
    };

    render() {
        const tabData = this.txtData2().data;
        const items = tabData.map((item) => (
            <div id={`"div${item.id}"`} className="contentsFlex">
                <img className="contentsFlexImg" src={this.imgs[item.img]} alt="" />
                <p className="contentsFlexTxt">{item.text}</p>
            </div>
        ));

        return (
            <div className="contentsDivClass">
                {items}
                <h1> {this.state.msg} </h1>
                <button onClick={this.changeMsg}>Kliknij, aby poznać tajemnicę</button>
            </div>
        );
    }
}

export default CContents;
