
import { useState } from "react";
import Counter from "../TopicTwo/Counter";

export default function Counters(){
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

    return (
        <div>
            {Counters.map((counter)=>(
                <Counter 
                    key={counter.id} 
                    onDelete={handleDelete}
                    // value={counter.value} 
                    // id={counter.id}
                    counter={counter}
                >

                </Counter>
            ))}
            
        </div>
    );
    
}



