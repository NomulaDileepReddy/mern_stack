import {useState} from "react"
function UseState(props){
    const [count,setCount] = useState(0)
    const [name, setName] = useState("")

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }

    function handleChange(e){
        setName(e.target.value)
    }

    return(
       <div>
            <h1>1. Demo of useState Hook</h1>
            <button className='btn btn-success'onClick={()=>increment()}>Increment</button>
            <button className='btn btn-danger' onClick={()=>decrement()}>Decrement</button>
            <div>
                <h1>Count : {count}</h1>
                <h1>Name : {name}</h1>
                <input type="text" value={name} onChange={handleChange} />
            </div>
       </div>
    )
}

export default UseState