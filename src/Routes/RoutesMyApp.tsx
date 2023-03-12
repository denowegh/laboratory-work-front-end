import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MyRoutes } from ".";
import Header from "../Components/UI/NavBar/Header";

const RoutesMyApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {MyRoutes.map((e) => (
                    <Route element={e.element} path={e.path} key={e.path} />
                ))}
                <Route path="*" element={<Navigate to="/MainPage" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesMyApp;
