import {useEffect,useState} from "react"
function UseEffect(){
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
    const [post,setPost] = useState({id:"",title:"",userId:"",completed:""})

    async function getPost(){
        
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let post = await data.json()
        console.log(post)
        setPost(post)
    }

    useEffect(()=>{   // useEffect() will executes on every render and render() will executes on every change in setState()
        console.log("Hello i am useEffect")
        getPost()
    },[name,age]);
        
        /* Types of useEffect Syntax :

        1. useEffect(()=>{
            // It calls on every render
        })

        2. useEffect(()=>{
            // It calls on first render only
        },[])

        3. useEffect(()=>{
            // It calls on very first render as well as whenever we change the dependencies like name or age
        },[name,age])
        */
  

    const ChangeName = ()=>{
        setName("Dileep")
    }

    const ChangeAge = ()=>{
        setAge(20)
    }

    const handleAge = (e)=>{
        setAge(e.target.value)
    }

    return(
        <div>
            <h1>2. Demo of useEffect Hook</h1>
            <h1>{name} {age}</h1>
            <input type="text" placeholder="Enter differet age" value={age} onChange={(e)=>handleAge(e)}/>
            <button onClick={ChangeName}>ChangeName</button>
            <button onClick={ChangeAge}>ChangeAge</button>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            userid
                        </th>
                        <th>
                            title
                        </th>
                        <th>
                            completed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {post.id}
                        </td>
                        <td>
                            {post.userId}
                        </td>
                        <td>
                            {post.title}
                        </td>
                        <td>
                            {post.completed ? "true" : "false"}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UseEffect

