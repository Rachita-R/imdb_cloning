import React, {useEffect } from "react";
import { useState } from "react";

function UseEffectHook1() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("")

    let incrementCount = () => {
        setCount(count + 1);
    }
    let handleChange = (e) => {
        setText(e.target.value);
    }

    // syntax of useEffect
    // Component Mounting and Component Updating
//     useEffect(() => {
//         console.log("useEffect is called");
//         document.title = `You have clicked ${count} times`;
// })


// Component Mounting only cuz of Dependency Array "[]"
    useEffect(() => {
        console.log("useEffect is called");
        document.title = `You have clicked ${count} times`;
}, [count])





    return (
        <div>
            <h1> This is my Count value: {count}</h1>
            <input onChange={handleChange} type="text" value={text}></input>
            <h2>{text}</h2>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}
export default UseEffectHook1;