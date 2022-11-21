import { Fragment, useState } from "react";

export default function Counter(props) {

    const [counter,setCounter] = useState(props.counter.value);
    const [tags]=useState(["tag1","tag2","tag3"]);

    
  
    function formatCounter() {
      return counter === 0 ? "Zero" : counter;
    }

    function getBadgeClasses() {
      let classes = "badge m-2 ";
      classes += counter === 0 ? "bg-warning" : "bg-primary";
      return classes;
    }

    return (
      <Fragment>
        
      <h4>Counter #{props.counter.id}</h4>
      <h1 className={getBadgeClasses()}>{formatCounter()}</h1>
      <button onClick={()=> setCounter(counter+1)} className="btn btn-secondary btn-sm">Increment</button>
      <button 
        onClick={()=>props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
      </Fragment>
    );
  
  }