import React, { Component } from 'react';
import "./style/style.css"

 class event6 extends Component {
    state = {
        tasks: [
            {name:"jeden",category:"kontener1", bgcolor: "yellow"},
            {name:"dwa", category:"kontener1", bgcolor:"pink"},
            {name:"trzy", category:"kontener2", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            kontener1: [],
            kontener2: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <div><h2 className="header">Przytrzymaj i przesuń element do drugiego kontenerta</h2></div>
                <div className="kontener1"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "kontener1")}}>
                    <span className="task-header">Kontener1</span>
                    {tasks.kontener1}
                </div>
                <div className="kontener2" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "kontener2")}>
                     <span className="task-header">Kontener2</span>
                     {tasks.kontener2}
                </div>


            </div>
        );
    }
}

export default event6