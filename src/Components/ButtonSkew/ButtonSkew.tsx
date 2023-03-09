import React from "react";
import "./ButtonSkew.scss";

const ButtonSkew: React.FC<{
    children: string;
    className?: string;
}> = ({ children, className = "", ...props }) => {
    return (
        <button {...props} className={"myButton " + className}>
            {children}
        </button>
    );
};

export default ButtonSkew;
