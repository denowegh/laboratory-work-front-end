import React from "react";
import { NavLink } from "react-router-dom";
import "./LableWork.scss";
const LableWork: React.FC<{
    Title: string;
    NumberWork: string;
    Variant: number;
    Link: string;
}> = ({ Title, NumberWork, Variant, Link }) => {
    return (
        <NavLink to={Link} style={{ textDecoration: "none", color: "black" }}>
            <div className="MainLable">
                <h1 className="NumberWork">{NumberWork}</h1>
                <h2 className="Title">
                    {"Title:\n"}
                    {Title}
                </h2>
                <h2 className="Variant">Variant: {Variant}</h2>
            </div>
        </NavLink>
    );
};

export default LableWork;
