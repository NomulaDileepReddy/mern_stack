import UseEffect from "./UseEffect"
import UseState from "./UseState"
import MenuItem from "./PropsDrilling"
import ContextHookDemo from './useContextHookDemo'
import UseReducerHookDemo from "./useReduceDemo"
import UseRefDemo from "./useRefDemo"

function AllHooks(props){
    return(
        <div>
            <h1>-----Demo of React  Hooks-----</h1>
            
            {/* <UseState/>
            <UseEffect/> */}
            {/* <MenuItem/> */}
            {/* <ContextHookDemo trainer={props.trainer}/> */}
            {/* <UseReducerHookDemo/> */}
            <UseRefDemo/>
        </div>
    )
}

export default AllHooks