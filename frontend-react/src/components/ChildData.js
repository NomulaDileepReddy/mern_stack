import React from "react";

class ChildData extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    onNameChange(e){
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }

    save(){
        console.log("Value after save",this.state.name)
        this.props.receiveData(this.state.name)
    }

    render(){
        return(
            <div>
                <h1>Hello in child</h1>
                <input type="text" value={this.state.name} onChange={(e)=>this.onNameChange(e)} />
                <button onClick={()=>this.save()}>Save</button>
            </div>
        )
    }
}

export default ChildData