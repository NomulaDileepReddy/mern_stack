function Home(props){
    return(
        <div>
            <h4>Home Component</h4>
            <AboutUs address={props.address}/>
        </div>
    )
}

function AboutUs(props){
    return(
        <div>About Us Component
            <ContactUs address={props.address}/>
        </div>
    )
}

function ContactUs(props){
    return(
        <div>ContactUs Component My address : {props.address}</div>
    )
}

function MenuItem(){
    return(
        <div><Home address="Hyderabad"/></div>
    )
}

export default MenuItem