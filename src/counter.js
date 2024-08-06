import {useState} from "react"
function Counter()
{
    var [count,setCount] = useState(0)

    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0);
    }
   return (<div className="container">
    <h1>Increment/Decrement Number</h1>
    <h1>
        {count}
    </h1>
    <button onClick={Increment} className="btn">Increment</button>
    <button onClick={Decrement} className="btn">Decrement</button>
    <button onClick={reset} className="btn">Reset</button>
   </div>)
}

export default Counter
