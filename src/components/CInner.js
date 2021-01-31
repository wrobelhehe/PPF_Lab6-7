import React, { Component } from "react";

export default class CInner extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        console.log("CInner - konstruktor");
    }

    static getDerivedStateFormProps(props, state) {
        console.log("CInner - getDerivedStateFormProps()");
        return null;
    }

    componentDidMount() {
        console.log("CInner - componentDidMount()");
    }

    render() {
        console.log("CInner - render()");
        return (
            <div>
                <h3 className='bgClassInner'>Komponent wewnętrzny</h3>
            </div>
        );
    }

    shouldComponentUpdate() {
        console.log("CInner - shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(props, pstate) {
        console.log("CInner - getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("CInner - componentDidUpdate()");
    }
}
