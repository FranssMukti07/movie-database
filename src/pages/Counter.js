import { useEffect, useState } from "react";

const Counter = () => {
    const [result, setResult] = useState(0);

    const handleClick = (e) => {
        const { name } = e.target;
        if (name === "one") {
            setResult(result + 1);
        } else if (name === "two") {
            setResult(result + 2);
        }

    };
    
    useEffect(() => {

        // Akses DOM
        document.title = `Angka: ${result}`
    });

    return (
        <div>
            <p>Result: {result}</p>
            <button onClick={handleClick} name="one">
                Add +1
            </button>
            <button onClick={handleClick} name="two">
                Add +2
            </button>
        </div>
    );
};

export default Counter;
