import React, {Component} from "react";

export default class MyFirstComponent extends Component{
    constructor(props){
        super(props); 
            this.state = {
                myFirstState: "Initialized"
            }
            console.log(props)
            // this.h1Click = this.h1Click.bind(this); <---- one of the ways to activate a function
    }


    h1Click= () => {
        // another way to check for values ==== myFirstState: this.state.myFirstState === "Initialized" ? "I have changed" : "Initialized"
        console.log("h1Click Triggered")
        if(this.state.myFirstState === "Initialized")
        {
            this.setState({
                myFirstState:"Its working"
            })

        }
        else
        {
            this.setState({
                myFirstState:"Initialized"
            })
        }
    }

    componentDidUpdate(){

        console.log("App has updated ")
    }
    render(){
        console.log("render")
        const {myFirstProp} = this.props;
        const {mySecondProp} = this.props;
        const {myFirstState} = this.state;
        return (
        <div>
            {/* to activate function through click: this.h1Click.bind(this)  */}
            <p onClick={this.h1Click}>MY FIRST COMPONENT</p> 
            <p>{myFirstProp}</p>
            <p>{mySecondProp}</p>
            <p>{myFirstState}</p>
        </div>
        )
    }
}