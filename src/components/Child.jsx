const Child = ({ inputValue, handleChangeValue, inputNumber }) => {
    return (
        <div>
            <p>input # {inputNumber}</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleChangeValue(e.target.value)}
            />
        </div>
    );
};

export default Child;
