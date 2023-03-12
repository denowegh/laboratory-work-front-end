import React from "react";
import "./Input.scss";
const Input: React.FunctionComponent<{
    className?: string;
    placeholder?: string;
    Type?: string;
    Value: any;
    setValueUseState: React.Dispatch<React.SetStateAction<any>>;
}> = ({
    className = "",
    placeholder,
    Type = "text",
    setValueUseState,
    Value,
}) => {
    function handleNum1Change(e: React.ChangeEvent<HTMLInputElement>) {
        setValueUseState(e.target.value);
    }
    return (
        <div className={"divInput " + className}>
            <input
                placeholder={placeholder}
                className="myinput"
                id="inputInDiv"
                value={Value}
                type={Type}
                onChange={handleNum1Change}
            />
            <label htmlFor="inputInDiv" className="lableFromInput">
                {placeholder}
            </label>
        </div>
    );
};
export default Input;
