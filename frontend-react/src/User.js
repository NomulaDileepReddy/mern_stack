function User(props){
    return(
        <div>
            <h1>Hello From User Component {props.name}</h1>
            <p>Type of element need to create is {props.type}</p>
        </div>
    )
}
export default User