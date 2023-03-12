import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import ButtonSkew from "../../ButtonSkew/ButtonSkew";
const Header: React.FunctionComponent<{
    className?: string;
    onClickLogo?: Function;
}> = ({ className = "", onClickLogo = () => {} }) => {
    return (
        <div className={"divHeader " + className}>
            <header>
                <NavLink
                    to={"/MainPage"}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    {
                        <h2
                            className="nameAndLogoProg"
                            onClick={() => {
                                onClickLogo();
                            }}
                        >
                            Laboratory works
                        </h2>
                    }
                </NavLink>
                <input type="checkbox" className="switcher" id="menu" />
                <label className="open" htmlFor="menu">
                    <FontAwesomeIcon className="symbol" icon={faBars} />
                </label>
                <nav>
                    <label className="close" htmlFor="menu">
                        <FontAwesomeIcon className="symbol" icon={faTimes} />
                    </label>
                    <ul>
                        <li>
                            <NavLink to={"/FirstLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 1
                                </ButtonSkew>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/SecondLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 2
                                </ButtonSkew>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ThirdLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 3
                                </ButtonSkew>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/FouthLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 4
                                </ButtonSkew>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/FifthLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 5
                                </ButtonSkew>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/SixthLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 6
                                </ButtonSkew>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/SeventhLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 7
                                </ButtonSkew>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/EigthLaboratoryWork"}>
                                <ButtonSkew className=" liElement ">
                                    Laboratory Work 8
                                </ButtonSkew>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
