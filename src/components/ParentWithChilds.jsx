import { useEffect, useState } from "react";
import Child from "./Child";

const ParentWithChilds = () => {
    const [inputValue, setInputValue] = useState(
        localStorage.getItem("inputValue") || ""
    );

    const handleChangeInputValue = (value) => {
        setInputValue(value);
    };

    useEffect(() => {
        localStorage.setItem("inputValue", inputValue);
    }, [inputValue]);
    return (
        <div>
            {Array(3)
                .fill(1)
                .map((_, i) => (
                    <Child
                        key={`${i}Child`}
                        inputValue={inputValue}
                        handleChangeValue={handleChangeInputValue}
                        inputNumber={i}
                    />
                ))}
            <p>*refresh page for checking if localStorage save input value</p>
        </div>
    );
};

export default ParentWithChilds;
