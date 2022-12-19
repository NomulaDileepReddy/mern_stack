import { createContext,useContext } from "react";

const NameContext = createContext();

const name = "Hyderabad";

function Home(){
    const name = useContext(NameContext)
    return(
        <div>
            <h4>Home Component {name}</h4>
            <AboutUs/>
        </div>
    )
}

function AboutUs(){
    const name = useContext(NameContext)
    return(
        <div>
            <h4>About Us Component {name}</h4>
            <ContactUs/>
        </div>
    )
}

function ContactUs(){
    const name = useContext(NameContext)
    return(
        <div>ContactUs Component My address : {name}</div>
    )
}

function MenuItem(){
    return(
        <div><Home/></div>
    )
}

function ContextHookDemo(props){
    return(
        <NameContext.Provider value={name}>
            {/* <h1>Trainer name :{props.trainer}</h1> */}
            <MenuItem/>
        </NameContext.Provider>
    )
}

export default ContextHookDemo