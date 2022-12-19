import { useEffect, useState } from "react"

function UsersCrud() {
    const[user,setUser] = useState({})
    const [users, setUsers] = useState([])
    function getUsersFromServer(){
        fetch("http://localhost:5000/users/").then(function (res) {
            return res.json()
        }).then(function (data) {
            setUsers(data)
        })
    }
    useEffect(() => {
        getUsersFromServer();
    },[])

    const handleIdChange = (event)=>{
        setUser((prev)=>({
            ...prev,
            id:event.target.value
        }))
    }
    const handleNameChange = (event)=>{
        setUser((prev)=>({
            ...prev,
            name:event.target.value
        }))
    }
    const handleAgeChange = (event)=>{
        setUser((prev)=>({
            ...prev,
            age:event.target.value
        }))
    }
    const handlePhoneChange = (event)=>{
        setUser((prev)=>({
            ...prev,
            phone:event.target.value
        }))
    }

    const createUser = ()=>{
        fetch("http://localhost:5000/users/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(user)}).then(function(res){
            console.log("User created succesfully")
            getUsersFromServer();
        })
        setUser((prev)=>({
            ...prev,
            phone:"",
            id:"",
            name:"",
            age:""
        }))
        
    }

    const deleteUser = (user)=>{
        console.log("User to be deleted :",user)
        fetch(`http://localhost:5000/users/${user.id}/delete/`,{method:"DELETE"}).then(function(res){
            console.log("User created succesfully")
            getUsersFromServer();
        })
    }

    const updateUser = (user)=>{
        setUser((prev)=>({
            ...prev,
            phone:user.phone,
            id:user.id,
            name:user.name,
            age:user.age
        }))
    }

    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter course id"
                        name="id"
                        value={user.id}
                        onChange={(e) => handleIdChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter user name"
                        name="name"
                        value={user.name}
                        onChange={(e) => handleNameChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter age"
                        name="age"
                        value={user.age}
                        onChange={(e) => handleAgeChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter phone"
                        name="phone"
                        value={user.phone}
                        onChange={(e) => handlePhoneChange(e)}
                    />
                </div>


                <button
                    onClick={() => {
                        createUser();
                    }}
                    className="btn btn-success"
                >
                    Create
                </button>
            </div>
            <h1>Welcome to users CRUD App </h1>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={()=>deleteUser(user)}className="btn btn-danger">Delete</button>
                                <button onClick={()=>updateUser(user)}className="btn btn-primary">Update</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default UsersCrud