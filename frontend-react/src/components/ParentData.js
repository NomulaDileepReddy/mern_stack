import React from "react";
import ChildData from "./ChildData.js"

class ParentData extends React.Component{
    constructor(props){
        console.log("I am in Parent constructor")
        super()
        this.state = {
            name:"Dileep"
        }
    }

    receiveData(data){
        console.log("Value received from child",data)
        this.setState({name:data})
    }

    render(){
        return(
            <div>
                <h1>Hello in parent my name is {this.state.name}</h1>
                <ChildData receiveData={(data)=>this.receiveData(data)}/>
            </div>
        )
    }
}

export default ParentData