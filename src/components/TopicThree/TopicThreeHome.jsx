import React, { useState } from "react";
import Counter from "../TopicTwo/Counter";
import CountersComponent from "./Counters";
import Navbar from "./navbar";


export default function TopicThreeHome(){
  

    const[Counters,setCounters]=useState([
        {id:1,value:10},
        {id:2,value:40},
        {id:3,value:33},
        {id:4,value:26},
        {id:5,value:12},
        
    ]);

    const handleDelete = (counterId) =>{
        // console.log("counter"+counterId+" has been deleted!");
        setCounters(Counters.filter((c)=>c.id!=counterId));
    };

    const handleReset =() =>{
        setCounters(
            Counters.map((c)=>{
                c.value=0;
                return c;
            })
        );
    }

    const handleIncrement=(counter)=>{
        Counters.filter((c)=> c.id===counter.id)[0].value++;
        setCounters(
            Counters.map((c)=>{
                return c;
            })
        );
    };

    const handleDecrement=(counter)=>{
        Counters.filter((c)=> c.id===counter.id)[0].value--;
        setCounters(
            Counters.map((c)=>{
                return c;
            })
        );
    };

    return (
        <div className="App">
            <Navbar/>
            <main className="container">
                <CountersComponent
                 counters={Counters}
                 onReset={handleReset}
                 onIncrement={handleIncrement}
                 onDecrement={handleDecrement}
                 onDelete={handleDelete}
                 />
            </main>
        </div>
    );
}