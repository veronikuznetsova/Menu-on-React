import React, { useState } from "react";

const Counter = ({ children }) => {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useState(+children);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count !== 0){
            setCount(count - 1);
        }
    }

    return (
        <div>
        {/* <div onClick={() => setCount(count - 1)}>minus</div> */}
        <div onClick={decrement}>minus</div>
        <div>count {count}</div>
        {/* <div onClick={() => setCount(count + 1)}>plus</div> */}
        <div onClick={increment}>plus</div>
        </div>
    )
}

export default Counter;