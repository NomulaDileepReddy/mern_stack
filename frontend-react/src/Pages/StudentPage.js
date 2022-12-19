import { useState } from "react";
import { useNavigate } from 'react-router-dom'


function StudentPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }

    const handleAgeChange = (e)=>{
        setAge(e.target.value)
    }
    const submit = (e) => {
        let student = {
            name:name,
            age:age
        }
        localStorage.setItem("student",JSON.stringify(student))
        navigate("/studentlist")
    }

    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e)=>handleNameChange(e)}/>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Age</label>
                    <input type="text" className="form-control" placeholder="Enter age" onChange={(e)=>handleAgeChange(e)}/>
                </div>
                <button className="btn btn-success" onClick={submit}>Save</button>
            </div>
            <h1>Hello i am in studentPage</h1>
        </div>
    )
}

export default StudentPage