import React from 'react';
class Employee extends React.Component{
    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            name : "Dileep",
            age : "20",
            salary : "100000",
            company :props.company,
            changeName:""
        }
        this.changeName = this.changeName.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    changeName(){
        console.log(this.state.name)
        this.setState({name:this.state.changeName})
        console.log(this.state.name)
        this.props.add()
    }

    handleChange(event){
        this.setState({changeName:event.target.value})
    }

    render(){
        return(
            <div>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.state.age}</h1>
                <h1>Salary : {this.state.salary}</h1>
                <h1>Company Name : {this.props.company}</h1>
                <input type="text" value={this.state.changeName} onChange={this.handleChange}/>
                <button onClick={this.changeName}>changeName</button>
            </div>
        )
    }
}
export default Employee