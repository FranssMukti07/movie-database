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

        console.log(result);
    };
    
    useEffect(() => {
        console.log("## Component di-mount/di-update");

        // Akses DOM
        document.title = `Angka: ${result}`
    });

    console.log("## Component di-render");

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
