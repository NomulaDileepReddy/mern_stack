import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"ClickAnyButton"
        }
        this.handleClick1 = this.handleClick1.bind(this)
    } 

    handleClick1(event){
        console.log("Clicked1",event)
        this.setState({name:"test1"})
    }

    handleClick2(event){
        console.log("Clicked2",event)
        this.setState({name:"test2"})
    }

    handleClick3(event){
        console.log("Clicked3",event)
        this.setState({name:"test3"})
    }

    handleClick4 = (event)=>{
        console.log("Clicked4",event)
        this.setState({name:"test4"})
    }

    render(){
        return(
            <div>
                <h1>I am in User Component - {this.state.name}</h1>
                <button onClick={this.handleClick1}>Click1</button>
                <button onClick={this.handleClick2.bind(this)}>Click2</button>
                {/* no need of binding to this while we use arrow operator because it directly points to User function and can directly access without binding */}
                <button onClick={(event)=>this.handleClick3(event)}>Click3</button>
                <button onClick={this.handleClick4}>Click4</button>
            </div>
        )
    }
}

export default User;