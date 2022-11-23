
// import { useState } from "react";
import Counter from "../TopicTwo/Counter";

export default function Counters(props){
    // const[Counters,setCounters]=useState([
    //     {id:1,value:10},
    //     {id:2,value:40},
    //     {id:3,value:33},
    //     {id:4,value:26},
    //     {id:5,value:12},
        
    // ]);

    // const handleDelete = (counterId) =>{
    //     // console.log("counter"+counterId+" has been deleted!");
    //     setCounters(Counters.filter((c)=>c.id!=counterId));
    // };

    // const handleReset =() =>{
    //     setCounters(
    //         Counters.map((c)=>{
    //             c.value=0;
    //             return c;
    //         })
    //     );
    // }

    // const handleIncrement=(counter)=>{
    //     Counters.filter((c)=> c.id===counter.id)[0].value++;
    //     setCounters(
    //         Counters.map((c)=>{
    //             return c;
    //         })
    //     );
    // };

    return (
        <div>
            <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            {props.counters.map((counter)=>(
                <Counter 
                    key={counter.id} 
                    onDelete={props.onDelete}
                    onIncrement={props.onIncrement}
                    onDecrement={props.onDecrement}
                    counter={counter}
                >

                </Counter>
            ))}
            
        </div>
    );
    
}



