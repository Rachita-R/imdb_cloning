import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo( () => {
        for (let i = 0; i < 2000000000; i++) { } // Simulating a heavy computation
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}
export default React.memo(Counter)

