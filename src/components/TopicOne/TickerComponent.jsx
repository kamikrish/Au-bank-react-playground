import React, { Component } from "react";

export default class TickerComponent extends Component{
    state={
        tickerCount:0,
    };

    componentDidMount(){
        console.log("Component Did Mount()");
        this.timer=setInterval(this.tick,1000);
    }

    componentDidUpdate(){
        console.log("Component Did Update()");
    }

    componentWillUnmount(){
        console.log("Component will Unmount()");
        clearInterval(this.timer);
    }

    tick=()=>{
        this.setState({
            tickerCount:this.state.tickerCount+1
        });
    }

    render(){
        console.log("Render()");
        return (

            <div>
                <h3>TickerComponent</h3>
                <br/>
                <br/>
                Time Elapsed : {this.state.tickerCount}

            </div>
            
        );
        
    }
}