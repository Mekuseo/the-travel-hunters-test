import React from 'react'
import { useState } from 'react'

const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className='counter'>
            <button className='counter-btn' onClick={handleDecrement}>-</button>
            <h2 className='number'>{count}</h2>
            <button className='counter-btn' onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter