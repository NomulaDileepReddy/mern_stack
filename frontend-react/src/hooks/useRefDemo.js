import { useRef,useEffect } from "react";
function UseRefDemo(){
    const inputRef = useRef("")

    useEffect(()=>{
        inputRef.current.focus();  // focus on textbox
    })

    const submit = ()=>{
        console.log("ref value",inputRef.current.value)
    }
    return(
        <div>
            <h1>Demo of use ref hook</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}


export default UseRefDemo;