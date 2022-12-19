import React from "react";

class Child extends React.Component{
    constructor(props){
        console.log("I am in child constructor")
        super(props)
        this.state = {}
    }

    static getDerivedStateFromProps(props){  // responsible to take the latest data from the component if it is a child component it will take the latest data from parent component
        console.log("ParentValue",props)
        console.log("I am in child getDerivedstateFromProps")
        return {}
    }

    shouldComponentUpdate(){  // Responsible to re-render the child's render or not  , if true render else won't render
        console.log("I am in child shouldComponentUpdate")
        return true;
    }

    componentDidMount(){
        console.log("I am in child componentDidMount")
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("I am in child getSnapshotBeforeUpdate")
        console.log("BeforeUpdate",props)
        // console.log(props,StaticRange)
        return props
    }

    componentDidUpdate(){
        console.log("I am in child componentDidUpdate")
        console.log("AfterUpdate",this.props)
    }


    componentWillUnmount(){
        console.log("I am unmounting")
    }


    render(){
        console.log("I am in child render")
        return(
            <h1>I am in Child count : {this.props.count}</h1>
        )
    }
}

export default Child;