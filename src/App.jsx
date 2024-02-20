import { useState } from "react";
import MouseCoords from "./components/MouseCoords";
import CounterWithSideEffects from "./components/CounterWithSideEffects";
import ParentWithChilds from "./components/ParentWithChilds";
import Calculator from "./components/Calculator";
import UserFilter from "./components/UserFilter";
import SimpleTimer from "./components/SimpleTimer";
import AdvancedTimer from "./components/AdvancedTimer";

import { users } from "./consts/users";

const componentsMapping = {
    MouseCoords: <MouseCoords />,
    CounterWithSideEffects: <CounterWithSideEffects />,
    ParentWithChilds: <ParentWithChilds />,
    Calculator: <Calculator />,
    UserFilter: <UserFilter users={users} />,
    SimpleTimer_a: <SimpleTimer delay={1000} />,
    SimpleTimer_b: <SimpleTimer delay={5} />,
    AdvancedTimer_a: <AdvancedTimer delay={1000} />,
    AdvancedTimer_b: <AdvancedTimer delay={5} />,
};

function App() {
    const [currentComponent, setCurrentComponent] = useState(
        Object.keys(componentsMapping)[0]
    );
    return (
        <>
            <div
                style={{
                    marginBottom: "30px",
                    borderBottom: "1px solid black",
                }}
            >
                <p>Select component</p>
                <select
                    value={currentComponent}
                    onChange={(e) => setCurrentComponent(e.target.value)}
                    style={{ marginBottom: "10px" }}
                >
                    {Object.keys(componentsMapping).map((comp, i) => (
                        <option key={comp} value={comp}>
                            {comp} (exercise {i + 1})
                        </option>
                    ))}
                </select>
            </div>
            {componentsMapping[currentComponent]}
        </>
    );
}

export default App;
