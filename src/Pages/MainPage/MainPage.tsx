import React from "react";
import "./MainPage.scss";
import LableWork from "../../Components/LableWork/LableWork";

const MainPage = () => {
    return (
        <div className="Main">
            <LableWork
                Link="/FirstLaboratoryWork"
                Title="Numerical differentiation of tabulated functions"
                Variant={6}
                NumberWork="First laboratory work"
            ></LableWork>
            <LableWork
                Link="/SecondLaboratoryWork"
                Title="Classical numerical integration procedures: trapezium method and Simpson's method"
                Variant={6}
                NumberWork="Second laboratory work"
            ></LableWork>
            <LableWork
                Link="/ThirdLaboratoryWork"
                Title="Numerical integration of two-dimensional functions by the Monte Carlo method"
                Variant={6}
                NumberWork="Third laboratory work"
            ></LableWork>
            <LableWork
                Link="/FouthLaboratoryWork"
                Title="Approximate solution of nonlinear equations: Method of Bisections"
                Variant={6}
                NumberWork="Fouth laboratory work"
            ></LableWork>
            <LableWork
                Link="/FifthLaboratoryWork"
                Title="Iterative methods of finding the roots of algebraic equations. Method of simple iterations"
                Variant={6}
                NumberWork="Fifth laboratory work"
            ></LableWork>
            <LableWork
                Link="/SixthLaboratoryWork"
                Title="Euler's method of solving ordinary differential equations"
                Variant={6}
                NumberWork="Sixth laboratory work"
            ></LableWork>
            <LableWork
                Link="/SeventhLaboratoryWork"
                Title="The Runge-Kutta method for solving ordinary differential equations of the 1st (and 2nd) order"
                Variant={6}
                NumberWork="Seventh laboratory work"
            ></LableWork>
            <LableWork
                Link="/EigthLaboratoryWork"
                Title="Solution of the mixed problem for equations of the parabolic type by the grid method"
                Variant={6}
                NumberWork="Eigth laboratory work"
            ></LableWork>
        </div>
    );
};

export default MainPage;
