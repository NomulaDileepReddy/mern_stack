import React from "react";
import Child from "./Child.js"

class Parent extends React.Component{
    constructor(props){   // Is used to initialise data
        console.log("I am in Parent constructor")
        super(props)
        this.state = {
            count :0,
            show : true
        }
    }

    static getDerivedStateFromProps(props,state){  // Initialize state from props if we have any props
        console.log("I am in Parent getDerivedStateFromProps")
        return {}
    }

    componentDidMount(){  // Responsible for calling API
        console.log("I am in Parent componentDidMount")
    }

    increment(){
        this.setState({count:this.state.count+1})
    }

    Hide(){
        this.setState({show:!this.state.show})
    }

    render(){  // Rendering
        console.log("I am in Parent Render")
        return(
            <div>
                <h1>I am in parent count : {this.state.count}</h1>
                <button onClick={()=>this.increment()} className="btn btn-success">Increment</button>
                <button onClick={()=>this.Hide()} className="btn btn-primary">Hide</button>
                {this.state.show && <Child count={this.state.count}/>}
                {/* <h1>Scores of the Dileep : {this.props.scores}</h1> */}
            </div>
        )
    }
}

export default Parent