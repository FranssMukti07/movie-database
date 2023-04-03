import { useState } from "react";

const Counter = () => {
    // let result = 0;
    const [result, setResult] = useState(0);

    const handleClick = () => {
        setResult(result + 1);
    };

    return (
        <div>
            <p>Result: {result}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default Counter;
