import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import ButtonSkew from "../ButtonSkew/ButtonSkew";
const Header: React.FunctionComponent<{
    className?: string;
    onClickLogo?: Function;
}> = ({ className = "", onClickLogo = () => {} }) => {
    return (
        <div className={className}>
            <header>
                <h2
                    className="nameAndLogoProg"
                    onClick={() => {
                        onClickLogo();
                    }}
                >
                    Laboratory works
                </h2>
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
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 1
                            </ButtonSkew>
                        </li>

                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 2
                            </ButtonSkew>
                        </li>
                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 3
                            </ButtonSkew>
                        </li>
                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 4
                            </ButtonSkew>
                        </li>
                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 5
                            </ButtonSkew>
                        </li>
                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 6
                            </ButtonSkew>
                        </li>
                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 7
                            </ButtonSkew>
                        </li>
                        <li>
                            <ButtonSkew className=" liElement ">
                                Laboratory Work 8
                            </ButtonSkew>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
