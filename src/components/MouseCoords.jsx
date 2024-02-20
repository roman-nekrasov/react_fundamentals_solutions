import { useEffect } from "react";
import { useState } from "react";

const MouseCoords = () => {
    const [coordX, setCoordX] = useState(0);
    const [coordY, setCoordY] = useState(0);

    useEffect(() => {
        function updateCoords(e) {
            setCoordX(e.clientX);
            setCoordY(e.clientY);
        }
        window.addEventListener("mousemove", updateCoords);
        () => window.removeEventListener("mousemove", updateCoords);
    }, []);
    return (
        <div>
            <p>Mouse X coord: {coordX}</p>
            <p>Mouse X coord: {coordY}</p>
        </div>
    );
};

export default MouseCoords;
