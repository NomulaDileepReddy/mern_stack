import { useEffect, useState } from 'react'
function UserPage(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users").then(function(res){
            return res.json()
        }).then(function(result){
            console.log(result)
            setUsers(result)
        })
    },[])
    return(
        <div className="container">
            <h1>I am in User list page</h1>
            <div>
               <ul>
                    {users.map((user,index)=>{
                        return(
                            <li key={index}>Name :{user.name} Age:{user.age} Id:{user.id} phone:{user.phone}</li>
                        )
                    })}
               </ul>
            </div>
        </div>
    )
}

export default UserPage;