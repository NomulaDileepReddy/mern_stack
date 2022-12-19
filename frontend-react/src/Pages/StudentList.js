import { useEffect, useState } from 'react'
function StudentList(){

    const [student,setStudent] = useState("")
    useEffect(()=>{
        let student = localStorage.getItem("student")
        if(student){
            let studentData = JSON.parse(student)
            setStudent((prev)=>({
                ...prev,
                ...studentData
            }))
        }
    })
    return(
        <div className="container">
            <h1>I am in student list page</h1>
            <div>
                <h1>Name:{student.name} Age : {student.age}</h1>
            </div>
        </div>
    )
}

export default StudentList;