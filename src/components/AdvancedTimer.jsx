import { useEffect, useState } from "react";

const AdvancedTimer = ({ delay }) => {
    const [passedTime, setPassedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    const reset = () => {
        setIsRunning(false);
        setPassedTime(0);
    };

    const startAndPause = () => {
        setIsRunning((prev) => !prev);
    };

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setPassedTime(
                    (prev) => Math.floor((prev + delay / 1000) * 1000) / 1000
                );
            }, delay);
        } else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [setPassedTime, delay, isRunning]);

    useEffect(() => {
        setPassedTime(0);
    }, [delay]);

    return (
        <div>
            <p>
                Seconds passed after loading page:{" "}
                <span style={{ fontSize: "18px" }}>{passedTime}</span>
            </p>
            <button onClick={startAndPause}>start/pause</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default AdvancedTimer;
