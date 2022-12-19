import { useState } from "react";
function EmployeeWithFunction(props){
    const [address,setAddress] = useState("hyd")
    return(
        <div>Hello From employee function based component {props.company} {address}</div>
    )
}
export default EmployeeWithFunction