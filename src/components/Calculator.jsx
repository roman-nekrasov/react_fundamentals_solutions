import { useEffect, useState } from "react";

const actions = ["+", "-", "*", "/"];

const calc = (num1, num2, action) => {
    switch (action) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num1 + num2;
    }
};

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [action, setAction] = useState(actions[0]);
    const [result, setResult] = useState(2);

    useEffect(() => {
        const res = calc(+num1, +num2, action);
        setResult(res);
    }, [num1, num2, action]);
    return (
        <div style={{ display: "flex", gap: "5px" }}>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <select value={action} onChange={(e) => setAction(e.target.value)}>
                {actions.map((action) => (
                    <option key={action} value={action}>
                        {action}
                    </option>
                ))}
            </select>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            {num1 && num2 && (
                <>
                    <span>=</span>
                    <span>{result}</span>
                </>
            )}
        </div>
    );
};

export default Calculator;
