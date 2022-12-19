import React from "react";

class TableData extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <h1>Employee Data</h1>
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.detail.map((item) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.salary}</td>
                                <td>{item.address}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableData