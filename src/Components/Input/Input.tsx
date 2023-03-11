import React from "react";
import "./Input.scss";
const Input: React.FunctionComponent<{
    className?: string;
    placeholder?: string;
}> = ({ className = "", placeholder, ...props }) => {
    return (
        <div className={"divInput " + className}>
            <input
                {...props}
                placeholder={placeholder}
                className="myinput"
                id="inputInDiv"
            />
            <label htmlFor="inputInDiv" className="lableFromInput">
                {placeholder}
            </label>
        </div>
    );
};
export default Input;
