import React from "react";
import TableData from './TableData'

class EmployeeClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            detail : [],
            details :{
                name:"",
                age:"",
                salary:"",
                address:""
            }
        }
    }

    SaveData(e){
        e.preventDefault()
        let details = this.state.details;
        let tempArticles = this.state.detail;
        tempArticles.push(details)
        this.setState({details:{...details,name:"",age:"",salary:"",address:""}})
    }

    handleChangeName(e){
        this.setState({details:{...this.state.details,name:e.target.value}})
    }
    handleChangeAge(e){
        this.setState({details:{...this.state.details,age:e.target.value}})
    }
    handleChangeSalary(e){
        this.setState({details:{...this.state.details,salary:e.target.value}})
    }
    handleChangeAddress(e){
        this.setState({details:{...this.state.details,address:e.target.value}})
    }

    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.SaveData(e)}>
                    <label>Name :</label>
                    <input type="text" value={this.state.details.name} onChange={(e)=>this.handleChangeName(e)}/>
                    <label>Age :</label>
                    <input type="number" value={this.state.details.age} onChange={(e)=>this.handleChangeAge(e)}/>
                    <label>Salary :</label>
                    <input type="text" value={this.state.details.salary} onChange={(e)=>this.handleChangeSalary(e)}/>
                    <label>Address :</label>
                    <input type="text" value={this.state.details.address} onChange={(e)=>this.handleChangeAddress(e)}/>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>
                <TableData detail={this.state.detail}/>
            </div>
        )
    }
}

export default EmployeeClass