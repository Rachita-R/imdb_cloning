import React, {useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [factor, setFactor] = useState(1);
    
    return (
        <div>
            <h1>This is my Counter: {count}</h1>
            <button onClick={() => setCount(count + factor)}>Increment</button>
            <button onClick={() => setCount(count - factor)}>Decrement</button>

            <h1>Set my Factor: {factor}</h1>
            <button onClick={() => setFactor(factor + 1)}>Increment Factor</button>
            <button onClick={() => setFactor(factor - 1)}>Decrement Factor</button>
        </div>
    )
}
export default Counter