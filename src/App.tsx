import React from "react";
import ButtonSkew from "./Components/ButtonSkew/ButtonSkew";
import Header from "./Components/UI/NavBar/Header";
import Input from "./Components/Input/Input";
import "./Styles/App.scss";
import RoutesMyApp from "./Routes/RoutesMyApp";

function App() {
    return (
        <div className="App">
            <RoutesMyApp />
        </div>
    );
}

export default App;
