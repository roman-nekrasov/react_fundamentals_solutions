import { useEffect, useState } from "react";

const SimpleTimer = ({ delay }) => {
    const [passedTime, setPassedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPassedTime(
                (prev) => Math.floor((prev + delay / 1000) * 1000) / 1000
            );
        }, delay);
        return () => {
            setPassedTime(0);
            clearInterval(interval);
        };
    }, [setPassedTime, delay]);

    return (
        <div>
            <p>
                Seconds passed after loading page:
                <span style={{ fontSize: "24px" }}> {passedTime}</span>
            </p>
        </div>
    );
};

export default SimpleTimer;
