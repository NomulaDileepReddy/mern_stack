import React from "react";

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState({count:this.state.count+1}) 
        // setState is used to update the data or value which is in render() function and react will call render() function everytime whenever you change setState()
        this.state.count=this.state.count+1;
        console.log(this.state.count)
    }

    decrement(){
        this.setState({count:this.state.count-1})
        this.state.count=this.state.count-1;
        console.log(this.state.count)
    }


    render() {
        console.log("rendering")
        return (
            <div>                
                <h1>Counter Example</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>this.increment()} class="btn btn-primary">Increment</button>
                <button onClick={()=>this.decrement()} class="btn btn-danger">Decrement</button>
            </div>
        )
    }
}

export default Counter