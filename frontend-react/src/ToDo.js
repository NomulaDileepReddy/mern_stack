import React from "react";

class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"Dileep",
            changeMe :""
        }
        this.change=this.change.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    change(){
        this.setState({name:this.state.changeMe})
        // console.log(this.state.name)
    }

    handleChange(event){
        this.setState({changeMe:event.target.value})
    }

    render(){
        return(
        <div>
            <input type="text" value={this.state.changeMe} onChange={this.handleChange}/>
            <button onClick={this.change}>Save</button>
            <h1>{this.state.name}</h1>
        </div>
        )
    }
}

export default ToDoList;
