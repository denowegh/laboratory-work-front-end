import React, { useEffect, useMemo, useState } from "react";
import ButtonSkew from "../../Components/ButtonSkew/ButtonSkew";
import Input from "../../Components/Input/Input";
import IsNullOrEmpty from "../../utils/IsNullOrEmpty";
import "./Styles.scss";
import { MathComponent } from "mathjax-react";
interface MyResponse {
    X: number;
    H: number;
    XArray: number[];
    YArray: number[];
    FunctionVariantSixString: string;
    FivePointSchemeForCalculatingTheCostA: string;
    FivePointSchemeForCalculatingTheCostB: string;
    FunctionForSerchingSecondDerivative: string;
    A5Value: number;
    B5Value: number;
    DerivativeValue: number;
    SecondDerivative: number;
}

const FirstLaboratoryWork = () => {
    const [data, setData] = useState<MyResponse | null>(null);

    const [X, setX] = useState<string>("");
    const [H, setH] = useState<string>("");

    const sum = useMemo(() => {
        return { X: X, H: H };
    }, [X, H]);

    async function getData() {
        try {
            if (
                !isNaN(Number(X)) &&
                !IsNullOrEmpty(X) &&
                !IsNullOrEmpty(H) &&
                !isNaN(Number(H))
            ) {
                const response = await fetch(
                    `http://localhost:5000/FirstLaboratoryWork?X0=${sum.X}&h=${sum.H}`
                );
                let respData = (await response.json()) as MyResponse;
                setData(respData);
                console.log(data);
            } else {
                throw new Error("Enter number");
            }
        } catch (error) {
            alert(error);
        }
    }
    function ArrayToString(arr: number[]) {
        let retStr = "";
        arr.forEach((e) => {
            retStr += `${e};  `;
        });
        return retStr;
    }
    return (
        <div className="FirstWork">
            <h1 className="H1FirstWork">
                Numerical differentiation of tabulated functions
            </h1>
            <div className=" MainInfoFirstWork ">
                <div>
                    <Input
                        className=" InputFirstWork "
                        placeholder="Enter X"
                        setValueUseState={setX}
                        Value={X}
                    ></Input>
                    <Input
                        className=" InputFirstWork "
                        placeholder="Enter H"
                        setValueUseState={setH}
                        Value={H}
                    ></Input>
                    <ButtonSkew className="FirstWorkButton" onClick={getData}>
                        Get Result
                    </ButtonSkew>
                </div>
                {data && (
                    <div className=" RespounseFirstWork ">
                        <div className=" H2FirstWork ">
                            <h2 className=" FormulaSizeFirstWork ">
                                Function my variant:
                            </h2>
                            <div className=" FormulaSizeFirstWork ">
                                <MathComponent
                                    tex={`${data.FunctionVariantSixString}`}
                                />
                            </div>
                            <h3>
                                {"   "}True Derivetive Func:
                                {`  ${data.DerivativeValue}`}
                            </h3>
                        </div>
                        <div className=" H2FirstWork ">
                            <h2 className=" FormulaSizeFirstWork ">
                                Five point scheme for calculating the cost A:
                            </h2>
                            <div className=" FormulaSizeFirstWork ">
                                <MathComponent
                                    tex={`${data.FivePointSchemeForCalculatingTheCostA}`}
                                />
                            </div>
                            <h3>
                                The result of executing the formula:
                                {`  ${data.A5Value}`}
                            </h3>
                        </div>
                        <div className=" H2FirstWork ">
                            <h2 className=" FormulaSizeFirstWork ">
                                Five point scheme for calculating the cost B:
                            </h2>
                            <div className=" FormulaSizeFirstWork ">
                                <MathComponent
                                    tex={`${data.FivePointSchemeForCalculatingTheCostB}`}
                                />
                            </div>
                            <h3>
                                The result of executing the formula:
                                {`  ${data.B5Value}`}
                            </h3>
                        </div>
                        <div className=" H2FirstWork ">
                            <h2 className=" FormulaSizeFirstWork ">
                                Second derivative formula:
                            </h2>
                            <div className=" FormulaSizeFirstWork ">
                                <MathComponent
                                    tex={`${data.FunctionForSerchingSecondDerivative}`}
                                />
                            </div>
                            <h3>
                                The result of executing the formula:
                                {`  ${data.SecondDerivative}`}
                            </h3>
                        </div>
                        <div className=" H2FirstWork ">
                            <h3>
                                {"Array X: \n"}
                                {ArrayToString(data.XArray)}
                            </h3>
                        </div>
                        <div className=" H2FirstWork ">
                            <h3>
                                {"Array Y: \n"}
                                {ArrayToString(data.YArray)}
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FirstLaboratoryWork;
