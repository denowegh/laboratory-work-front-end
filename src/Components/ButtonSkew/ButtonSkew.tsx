import React, { useRef } from "react";
import "./ButtonSkew.scss";

const ButtonSkew: React.FC<{
    children: string;
    className?: string;
}> = ({ children, className = "", ...props }) => {
    const btn = useRef<HTMLButtonElement>(null);

    return (
        <button
            {...props}
            id="Btn"
            onMouseEnter={() => {
                const elem2 = btn.current;
                if (elem2) {
                    const beforeStyles = window.getComputedStyle(
                        elem2,
                        "::before"
                    );

                    const beforeleft = beforeStyles.getPropertyValue("left");

                    elem2.style.setProperty("--before_left", beforeleft);

                    elem2.classList.remove("buttonAnimate-Leave");
                    elem2.classList.add("buttonAnimate-Enter");
                }
            }}
            onMouseOut={() => {
                const elem2 = btn.current;
                if (elem2) {
                    const beforeStyles = window.getComputedStyle(
                        elem2,
                        "::before"
                    );
                    const beforeleft = beforeStyles.getPropertyValue("left");

                    elem2.style.setProperty("--before_left", beforeleft);
                    elem2.classList.remove("buttonAnimate-Enter");
                    elem2.classList.add("buttonAnimate-Leave");
                }
            }}
            className={`myButton ` + className}
            ref={btn}
        >
            {children}
        </button>
    );
};

export default ButtonSkew;
