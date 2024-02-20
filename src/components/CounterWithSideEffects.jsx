import { useEffect, useState } from "react";

const options = [1, 5, 10];

const calc1 = (num) => num / 3 + 7;
const calc2 = (num) => num * 4 + 39;

const CounterWithSideEffects = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(options[0]);
    const [sideEffect1, setSideEffect1] = useState(0);
    const [sideEffect2, setSideEffect2] = useState(0);

    useEffect(() => {
        const res1 = calc1(count);
        const res2 = calc2(count);
        setSideEffect1(res1);
        setSideEffect2(res2);
    }, [count]);
    return (
        <div>
            <select
                value={step}
                onChange={(e) => setStep(+e.target.value)}
                style={{ marginBottom: "10px" }}
            >
                {options.map((val) => (
                    <option key={val} value={val}>
                        Step val: {val}
                    </option>
                ))}
            </select>
            <button onClick={() => setCount((prev) => prev + step)}>
                +step
            </button>
            <p>Counter: {count}</p>
            <p>Side effect #1 (counter / 3 + 7): {sideEffect1}</p>
            <p>Side effect #1 (counter * 4 + 39): {sideEffect2}</p>
        </div>
    );
};

export default CounterWithSideEffects;
